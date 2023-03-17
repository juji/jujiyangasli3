import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from './zoomer.module.css'

interface ZoomerProps {
    src: string,
    alt?: string
}

// const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
//     <>
//         <button onClick={() => zoomIn()}>+</button>
//         <button onClick={() => zoomOut()}>-</button>
//         <button onClick={() => resetTransform()}>x</button>
//     </>
// );

const Zoomer = ({ src, alt }: ZoomerProps) => {
  return (
    <TransformWrapper>
      <TransformComponent
        wrapperClass={styles.wrapper}
        contentClass={styles.content}
      >
        <img src={src} alt={alt} />
      </TransformComponent>
    </TransformWrapper>
  );
};