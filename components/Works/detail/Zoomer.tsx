import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from 'react'
import styles from './zoomer.module.scss'

import {
    FiMinusSquare,
    FiPlusSquare,
    FiX,
    FiSquare
} from "react-icons/fi";



interface ZoomerProps {
    src: string,
    onClose: () => void,
    alt?: string,
}

interface ControlProps {
    zoomIn: () => void | any,
    zoomOut: () => void | any,
    resetTransform: () => void | any,
    onClose: () => void,
}

const Controls = ({ zoomIn, zoomOut, resetTransform, onClose }: ControlProps) => (
    <div className={styles.buttons}>
        <div className={styles.left}>
            <button className={styles.left} onClick={() => zoomIn()}><FiPlusSquare /></button>
            <button className={styles.left} onClick={() => zoomOut()}><FiMinusSquare /></button>
            <button className={styles.left} onClick={() => resetTransform()}><FiSquare /></button>
        </div>
        <div>
            <button className={`${styles.right} ${styles.x}`} onClick={() => onClose()}><FiX /></button>
        </div>
    </div>
);

export default function Zoomer({ src, alt, onClose }: ZoomerProps){

    const [ closing, setClosing ] = useState(false)
    const onCloseLocal = () => {
        setClosing(true)
        console.log('onCloseLocal')
        setTimeout(() => {
            console.log('onCloseLocal end')
            onClose()
        },900)
    }

  return (<div className={`${styles.zoomer} ${closing?styles.out:''}`}>
    <TransformWrapper
        centerOnInit={true}
    >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (<>      
            <TransformComponent
                wrapperClass={styles.wrapper}
                contentClass={styles.content}
            ><img src={src} alt={alt} /></TransformComponent>
            <Controls 
                zoomIn={zoomIn} 
                zoomOut={zoomOut} 
                resetTransform={resetTransform}
                onClose={onCloseLocal} />
        </>)}
    </TransformWrapper>
    </div>);
};

