import { useState, useEffect, useRef } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'
import isNotHome from '@/components/utils/isNotHome.interface'

export default function Pendulum(props: isNotHome){

    const { isNotHome } = props

    const [ img, setImage ] = useState<{src: string, width: number, height: number} | null>(null)
    const [ started, setStarted ] = useState<number | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout> | null>()
    const startTime = useRef<number | null>()
    const innerW = useRef<number>(0)

    // handle resize event
    useEffect(() => {

        if(typeof window === 'undefined') return () => {};

        innerW.current = window.innerWidth

        const handleResize = () => {
            if(window.innerWidth === innerW.current) return;
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
    },[ started ])

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
                    (uri: string, ts: number) => {
                        if(ts === startTime.current) setImage(uri)
                    })}></canvas> : null }
        </div>

        
    </div>

}