// import { useState } from 'react'
import style from './workTile.module.scss'
// import Loader from '@/components/utils/Loader'
import Link from 'next/link'
// import version from '@/lib/version'
import Image from 'next/image'

type WorkImage = {
    url: string
    title: string
    thumbnail: string
    dimension: {
        thumb: { width: number, height: number }
        image: { width: number, height: number }
    }
}

type WorkTileType = {
   id: string
   year: string
   workId: string
   images: WorkImage[]
   title: string
   url: string
   className: string
   lazyLoad?: boolean
   backToZombies?: boolean
}

export default function WorkTile(props: WorkTileType){

    const { id, workId, images, title, className, lazyLoad, backToZombies } = props
    
    // const [ loaded, setLoaded ] = useState(lazyLoad ? false: true)
    // const onLoad = () => {
    //     setLoaded(true)
    // }

    const preventContextMenu = (e: any) => {
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available? 
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
    }
    
    // https://www.codingwithjesse.com/blog/image-onload-isnt-being-called/
    return <div id={id} 
        onContextMenu={preventContextMenu}
        className={`${style.loaded} ${className} ${style.workTile}`}>
        <Image 
            src={images[0].thumbnail}
            width={images[0].dimension.thumb.width}
            height={images[0].dimension.thumb.height}
            alt={title} 
        />
        <Link 
            // prefetch={false} 
            href={`/works/${workId}${backToZombies?'/btz':''}`} 
            className={style.workTitle}>{title}</Link>
        {/* <Loader className={style.loader} /> */}
    </div>
}