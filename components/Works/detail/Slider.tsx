import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import style from './slider.module.scss'

interface Slide{
    url: string,
    title: string
}

interface SlideImages{
    slides: Slide[]
}


export default function Slider({ slides }: SlideImages) {

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

  return (
    <div className={style.slider}>
      <div className={style.navigationWrapper}>
        <div ref={sliderRef} className={`keen-slider ${style.sliderContent}`}>
            {slides.map(v => <div key={`gallery-${v.title}`} className={`keen-slider__slide ${style.slide}`}>
                <img src={v.url} alt={v.title} />
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
  )
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
