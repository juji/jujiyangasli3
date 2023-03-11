import { useState } from 'react'
import Loader from '@/components/utils/Loader'
import style from './techcell.module.scss'

interface TechProps {
    id: string,
    title: string,
    image: string,
    url: string,
    className?: string
}

export default function TechCell(props: TechProps){

    const { className, id, title, image, url } = props

    const [ loaded, setLoaded ] = useState(false)
    const onLoad = () => { setLoaded(true) }

    return <a href={url}
        id={id}
        className={`${style.cell} ${loaded ? style.loaded : ''} ${className}`}
        title={title}
        aria-label={title} 
        target="_blank" rel="noopener noreferrer">
            <div className={style.imageContainer}>
                <img src={image} alt={title} loading="lazy" onLoad={onLoad} />
            </div>
            <Loader className={`${style.loader}`} />
        </a>


}