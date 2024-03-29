'use client';

import { ReactNode, useState, useMemo, useRef } from 'react'
import { usePathname } from 'next/navigation'
import data from '../works.local.js'
import styles from './detail.module.scss'
import Link from 'next/link'

import dynamic from 'next/dynamic'
// import Slider from './Slider'
import NojsSlider from './NojsSlider'

const Zoomer = dynamic(() => import('./Zoomer'), { ssr: false })

type WorkDetailProps = {
    children: ReactNode
    btz?: boolean
}

type ZoomerProps = {
    src: string
    alt: string
    width: number
    height: number
}

export default function WorkDetail({ children, btz }: WorkDetailProps){

    const pathname = usePathname()
    // query.btz // backToZombies

    const workName = useRef(pathname.replace('/btz','').split('/').pop())
    const project = useMemo(() => {
        return data.find(v => v.id === workName.current)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ data, pathname ])

    const [ zoomer, setZoomer ] = useState<ZoomerProps | null>(null)
    const onCloseZoomer = useRef<Function|null>(null)    
    const openZoomer = (obj: ZoomerProps) => (onClose:Function|null) => {
        onCloseZoomer.current = onClose
        setZoomer(obj)
    }
    const closeZoomer = () => {
        onCloseZoomer.current && onCloseZoomer.current()
        onCloseZoomer.current = null
        setZoomer(null)
    }

    // const openZoomerTransition = (obj: ZoomerProps) => (onClose:Function|null) => {
    //     // @ts-ignore
    //     if (!document?.startViewTransition)
    //         openZoomer(obj)(onClose);
    //     else // @ts-ignore
    //         document.startViewTransition(() => openZoomer(obj)(onClose));
    // }

    // const closeZoomerTransition = () => {
    //     // @ts-ignore
    //     if (!document?.startViewTransition)
    //         closeZoomer()
    //     else // @ts-ignore
    //         document.startViewTransition(() => closeZoomer())
    // }

    return project ? <>
        <div className={`${styles.workDetail} page`}>
            <div className={styles.image}>
                <div>
                    <NojsSlider slides={project.images} openZoomer={openZoomer} />
                </div>
            </div>
            <div className={styles.text}>

                <div className={styles.topbar}>
                    <h1>{project.title}</h1>
                    <Link href={btz ? "/works/showzombies" : "/works"}>&times;</Link>
                </div>

                <div className={styles.content}>
                    <div className={styles.contentChild}>
                        <div className={styles.projectLink}>
                            <a target="_blank" rel="noopener noreferrer" href={project.url}>
                                {project.url.replace('https://','').replace('www.','')}</a>
                        </div>
                        <div className={styles.projectYear}>
                            Year: {project.year}
                        </div>
                        {children}
                    </div>
                </div>

            </div>
            
            { zoomer ? <Zoomer 
                {...zoomer}
                onClose={closeZoomer} /> : null}
            
        </div>
    </> : null


}