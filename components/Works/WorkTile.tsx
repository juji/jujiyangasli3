import { useState } from 'react'
import style from './workTile.module.scss'
import Loader from '@/components/utils/Loader'

interface WorkImage {
    url: string
    title: string
}

interface WorkTileInterface {
   id: string
   workId: string
   images: WorkImage[]
   title: string
   url: string,
   className: string
}

export default function WorkTile(props: WorkTileInterface){

    const { id, workId, images, title, url, className } = props
    
    const [ loaded, setLoaded ] = useState(false)
    const onLoad = () => {
        setLoaded(true)
    }

    return <div id={id} className={`${loaded?style.loaded:''} ${className} ${style.workTile}`}>
        <img src={images[0].url} alt={title} loading="lazy" onLoad={onLoad} />
        <a href={`/works/${workId}`} className={style.workTitle}>{title}</a>
        <Loader className={style.loader} />
    </div>
}