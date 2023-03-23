import { useState } from 'react'
import style from './workTile.module.scss'
import Loader from '@/components/utils/Loader'
import Link from 'next/link'

interface WorkImage {
    url: string
    title: string
    thumbnail: string
}

interface WorkTileInterface {
   id: string
   year: string
   workId: string
   images: WorkImage[]
   title: string
   url: string,
   className: string,
   lazyLoad?: boolean
}

export default function WorkTile(props: WorkTileInterface){

    const { id, workId, images, title, className, lazyLoad } = props
    
    const [ loaded, setLoaded ] = useState(lazyLoad ? false: true)
    const onLoad = () => {
        setLoaded(true)
    }

    const preventContextMenu = (e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available? 
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
    }
    
    // https://www.codingwithjesse.com/blog/image-onload-isnt-being-called/
    return <div id={id} 
        onContextMenu={preventContextMenu}
        className={`${loaded?style.loaded:''} ${className} ${style.workTile}`}>
        <img 
        onLoad={onLoad}
        ref={r => { if(r) r.src = images[0].thumbnail }}
        alt={title} 
        {...(lazyLoad ? {loading:'lazy'}:{})} />
        <Link href={`/works/${workId}`} className={style.workTitle}>{title}</Link>
        <Loader className={style.loader} />
    </div>
}