import { useEffect, useRef } from 'react'
import styles from './nojslider.module.scss'
import Loader from '@/components/utils/Loader'
import Image from 'next/image'

interface Slide{
  url: string,
  title: string,
  thumbnail: string
  dimension: {
    thumb: { width: number, height: number }
    image: { width: number, height: number }
  }
}

interface SlideTime {
  timer: ReturnType<typeof setTimeout>
  current: number
}

export default function NojsSlider({ slides, openZoomer }:{ 
  slides: Slide[]
  openZoomer: (obj: { src: string, alt: string, width: number, height: number }) => () => void
}) {

  const slideShow = useRef<SlideTime|null>(null)
  const setSlide = (num:number, delay?:number) => {
    if(slides.length == 1) return;
    if(slideShow.current && slideShow.current.timer) 
      clearTimeout(slideShow.current.timer)
    
    const slideTo = num >= slides.length ? 0 : num
    slideShow.current = {
      timer: setTimeout(() => {
          const elm = document.querySelector(`a[href='#slide${slideTo}']`) as HTMLAnchorElement
          elm && elm.click()
          setSlide(slideTo+1)
      },delay||3000),
      current: slideTo
    }
  }

  const cancelTimer = () => {

    if(
      !slideShow.current ||
      !slideShow.current.timer
    ) return;

    // cancel current
    clearTimeout(slideShow.current.timer)
    
    // add delay
    setSlide(slideShow.current.current, 10000)
  }

  useEffect(() => {
    setSlide(0)
    return () => {
      if(slideShow.current?.timer)
        clearTimeout(slideShow.current.timer)
    }
  },[])

  return <div className={styles.sliderContainer}>
    <div className={`${styles.slider} ${slides.length === 1 ? styles.slideZero : ''}`}>
      <div className={`${styles.slides}`} onTouchStart={cancelTimer}>
        {slides.map((v,i) => <div key={`slide${i}`} 
          id={`slide${i}`} 
          className={`${styles.slide}`}>
            <Loader className={styles.loader} />
            <button onClick={openZoomer({ src: v.url, alt: v.title, ...v.dimension.image })}>
              <Image 
                // srcSet={`${v.thumbnail} 700w, ${v.url}`}
                // sizes="(max-width: 700px) 700px"
                src={v.url}
                alt={v.title} 
                width={v.dimension.image.width}
                height={v.dimension.image.height}
              />
            </button>
          <a className={`${styles.slidePrev} noline`}
            onClick={cancelTimer}
            href={`#slide${i === 0?slides.length-1:i-1}`} title="Previous"></a>
          <a className={`${styles.slideNext} noline`} 
            onClick={cancelTimer}
            href={`#slide${(i+1) === slides.length?0:i+1}`} title="Next"></a>
        </div>)}
      </div>
    </div>
  </div>

}