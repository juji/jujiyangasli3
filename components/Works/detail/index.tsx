import { ReactNode, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import data from '../works'
import styles from './detail.module.scss'
import Link from 'next/link'
import Slider from './Slider'

interface WorkDetailProps{
    children: ReactNode
}

export default function WorkDetail({ children }: WorkDetailProps){

    const { pathname } = useRouter()
    const workName = useRef(pathname.split('/').pop())
    const [ project ] = useState(
        data.find(v => v.id === workName.current)
    )
    
    const [ min, setMin ] = useState(false)
    // const minimize = () => {
    //     setMin(true)
    // }

    // const maximize = () => {
    //     setMin(false)
    // }


    return project ? <div className={`${styles.workDetail} page ${min ? styles.min :''}`}>
        <div className={styles.image}>
            <div>
                <Slider slides={project.images}/>
            </div>
        </div>
        <div className={styles.text}>

            <div className={styles.topbar}>
                <h1>{project.title}</h1>
                {/* { min ? 
                    <button onClick={maximize}>&#9744;</button> : 
                    <button onClick={minimize}>&#8213;</button>
                } */}
                
                <Link href="/works">&times;</Link>
            </div>

            <div className={styles.content}>
                <div className={styles.contentChild}>
                    <div className={styles.projectLink}>
                        <a target="_blank" rel="noopener noreferrer" href={project.url}>{project.url}</a>
                    </div>
                    <div className={styles.projectYear}>
                        Year: {project.year}
                    </div>
                    {children}
                </div>
            </div>

        </div>
    </div> : null


}