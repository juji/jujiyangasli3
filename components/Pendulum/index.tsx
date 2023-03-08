import { useState, useEffect, useRef } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'

export default function Pendulum(){

    const [ img, setImage ] = useState<string | null>(null)
    const [ started, setStarted ] = useState<number | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout> | null>()
    const startTime = useRef<number | null>()

    // handle resize event
    useEffect(() => {

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
        if(timeout.current) clearTimeout(timeout.current)
        if(!started) timeout.current = setTimeout(() => {
            startTime.current = new Date().valueOf()
            setStarted(startTime.current)
        },500)
    },[ started ])

    return <div className={styles.pendulum}>
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