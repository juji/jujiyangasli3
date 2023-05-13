import { ReactNode, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import data from '../works'
import styles from './detail.module.scss'
import Link from 'next/link'

import dynamic from 'next/dynamic'
// import Slider from './Slider'
import NojsSlider from './NojsSlider'
const Zoomer = dynamic(() => import('./Zoomer'), { ssr: false })


interface WorkDetailProps{
    children: ReactNode
}

export default function WorkDetail({ children }: WorkDetailProps){

    const { pathname } = useRouter()
    const workName = useRef(pathname.split('/').pop())
    const [ project ] = useState(
        data.find(v => v.id === workName.current)
    )

    const [ zoomer, setZoomer ] = useState<{ src: string, alt: string } | null>(null)
    const openZoomer = (obj: { src: string, alt: string }) => () => setZoomer(obj)
    const closeZoomer = () => setZoomer(null)

    return project ? <div className={`${styles.workDetail} page`}>
        <div className={styles.image}>
            <div>
                <NojsSlider slides={project.images} openZoomer={openZoomer} />
            </div>
        </div>
        <div className={styles.text}>

            <div className={styles.topbar}>
                <h1>{project.title}</h1>
                <Link href="/works">&times;</Link>
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
        
    </div> : null


}