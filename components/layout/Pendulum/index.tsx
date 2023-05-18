'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'
import { usePathname } from 'next/navigation'

interface PendulumImage {
    src: string, 
    width: number, 
    height: number
}

export default function Pendulum(){

    const pathname = usePathname()
    const isNotHome = pathname !== '/'

    const [ img, setImage ] = useState<PendulumImage | null>(null)
    const [ started, setStarted ] = useState<number | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout> | null>()
    const startTime = useRef<number | null>()

    console.log(started)

    // handle resize event
    useEffect(() => {

        if(typeof window === 'undefined') return () => {};

        const handleResize = () => {
            setImage(null)
            setStarted(null)
        }
        
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }


    },[ typeof window === 'undefined' ])


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

    return <div className={styles.pendulum} id="pendulum">

        <div className={`${styles.bg} ${isNotHome?styles.on:''}`}></div>
        
        <div className={styles.inside}>
            { img ? <img 
                src={img.src} 
                height={`${img.height}px`} 
                width={`${img.width}px`} 
                alt="pendulum" /> : started ? <canvas 
                ref={canvasRef => PendulumFn(
                    canvasRef, 
                    started,
                    0, //maxWidth,
                    (image: PendulumImage, ts: number) => {
                        if(ts === startTime.current) setImage(image)
                    })}></canvas> : null }
        </div>

        
    </div>

}