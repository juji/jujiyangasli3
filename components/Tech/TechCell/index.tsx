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

    return <a href={url}
        id={id}
        className={`${style.cell} ${style.loaded} ${className} noline`}
        title={title}
        aria-label={title} 
        target="_blank" rel="noopener noreferrer">
            <div className={style.imageContainer}>
                <img 
                    src={image} 
                    alt={title} 
                    loading="lazy" />
            </div>
        </a>


}