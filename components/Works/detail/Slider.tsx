import { useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import style from './slider.module.scss'
import Loader from "@/components/utils/Loader"

type Slide = {
    url: string
    title: string
    thumbnail: string
}

type SlideImages = {
    slides: Slide[]
    openZoomer: (obj: { src: string, alt: string }) => () => void
}


export default function Slider({ slides, openZoomer }: SlideImages) {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [ imageloaded, setImageLoaded ] = useState(slides.map(v => false))
  const imageLoadRef = useRef(slides.map(v => false))
  const onImgLoad = (i: number) =>  () => {
    imageLoadRef.current[i] = true
    setImageLoaded([...imageLoadRef.current])
  }

  return <div className={style.slider}>
      <div className={style.navigationWrapper}>
        <div ref={sliderRef} className={`keen-slider ${style.sliderContent}`}>
            {slides.map((v,i) => <div key={`gallery-${v.title}`} 
              className={`keen-slider__slide ${style.slide} ${imageloaded[i]?style.loaded:''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  loading="lazy"
                  onLoad={onImgLoad(i)}
                  ref={r => { if(r){
                    r.srcset=`${v.thumbnail} 700w, ${v.url}`
                    r.src=v.url
                  }}}
                  sizes="(max-width: 700px) 700px"
                  alt={v.title} 
                />
                <Loader className={style.loader} />
                <button 
                  aria-label="open image utility"
                  onClick={openZoomer({ src: v.url, alt: v.title })}></button>
            </div>)}
        </div>
        {loaded && instanceRef.current && slides.length > 1 && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ` ${style.arrowDisabled}` : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${style.arrow} ${
        props.left ? style.arrowLeft : style.arrowRight
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
