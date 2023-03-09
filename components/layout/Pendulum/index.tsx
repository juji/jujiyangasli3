import { useState, useEffect, useRef } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'

export default function Pendulum(){

    const [ img, setImage ] = useState<string | null>(null)
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
        
        <div className={styles.inside}>
            { img ? <img src={img} /> : started ? <canvas ref={r => PendulumFn(
                r, 
                started, 
                (uri: string, ts: number) => {
                    if(ts === startTime.current) setImage(uri)
                })}></canvas> : null }
        </div>

        
    </div>

}