import style from './techcell.module.scss'
import Image from 'next/image';

type TechProps = {
    id: string
    title: string
    image: string
    url: string
    width: number
    height: number
    className?: string
}

export default function TechCell(props: TechProps){

    const { className, id, title, image, url, width, height } = props

    return <a href={url}
        id={id}
        className={`${style.cell} ${style.loaded} ${className} noline`}
        title={title}
        aria-label={title} 
        target="_blank" rel="noopener noreferrer">
            <div className={style.imageContainer}>
                {/* <img
                    src={image} 
                    alt={title} 
                    width={width}
                    height={height}
                    loading="lazy" 
                /> */}
                <Image 
                    src={image} 
                    alt={title} 
                    width={width}
                    height={height}
                />
            </div>
        </a>


}