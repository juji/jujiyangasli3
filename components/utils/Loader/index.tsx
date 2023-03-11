
import style from './loader.module.scss'

interface LoaderProps {
    className?: string,
    id?: string
}

export default function Loader(props: LoaderProps){

    const { className, id } = props

    return <span id={id} className={`${style.loader} ${className}`}></span>

}