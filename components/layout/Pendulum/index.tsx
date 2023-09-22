'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'
import { usePathname } from 'next/navigation'

type PendulumImage = {
    src: string
    width: number
    height: number
}

export default function Pendulum(){

    const pathname = usePathname()
    const isNotHome = pathname !== '/'

    const [ img, setImage ] = useState<PendulumImage | null>(null)
    const [ started, setStarted ] = useState<number | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout> | null>()
    const startTime = useRef<number | null>()

    const haveWindow = typeof window !== 'undefined'

    // console.log(started)

    // handle resize event
    useEffect(() => {

        if(!haveWindow) return () => {};

        const handleResize = () => {
            setImage(null)
            setStarted(null)
        }
        
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }


    },[ haveWindow ])


    // delay draw start
    useEffect(() => {

        if(pathname.match('/work')) return () => {};
        if(pathname.match('/tech')) return () => {};

        // first time, start immediately
        if(!started && !timeout.current) {
            
            startTime.current = new Date().valueOf()
            setStarted(startTime.current)
            timeout.current = setTimeout(() => {},0)
        
        // second time and so on
        }else if(timeout.current){
            
            clearTimeout(timeout.current)
            if(!started) timeout.current = setTimeout(() => {
                startTime.current = new Date().valueOf()
                setStarted(startTime.current)
            },500)

        }
    },[ started, pathname ])

    const windowInnerWidth = haveWindow && window.innerWidth
    const width = useMemo(() => {

        return windowInnerWidth ? Math.min(
            windowInnerWidth,
            Number(
                getComputedStyle(
                    document.documentElement
                ).getPropertyValue('--maxWidth').replace(/px/,'')
            )
        ) : null

    },[ windowInnerWidth ])

    // console.log(
    //     'canvas width',
    //     width
    // )

    return <div className={styles.pendulum} id="pendulum">

        <div className={`${styles.bg} ${isNotHome?styles.on:''}`}></div>
        
        <div className={styles.inside}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            { img ? <img 
                src={img.src} 
                height={`${img.height}px`} 
                width={`${img.width}px`} 
                alt="pendulum" /> : started ? (width !== null ? <canvas 
                ref={canvasRef => PendulumFn(
                    canvasRef, 
                    started,
                    width, //maxWidth,
                    (image: PendulumImage, ts: number) => {
                        if(ts === startTime.current) setImage(image)
                    })}></canvas> : null) : null }
        </div>

        
    </div>

}