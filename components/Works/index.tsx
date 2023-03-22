
import style from './works.module.scss'
import works from './works.js'
import WorkTile from './WorkTile'

export default function Works(){
    

    return <div className={`${style.works} page`} id="works">
        
        <h1 className={`${style.h1}`}>Works</h1>
        <p className={`${style.par}`}>My works -- that i remember ;)</p>

        <div className={style.workGrid}>
            {works.map((v,i) => <WorkTile 
                className={`${style.workTile} ${style[`workTile${i}`]}`}
                key={`work_${v.id}`}
                {...v}
                id={style[v.id]}
                workId={v.id}
                // lazyLoad={i>=3}
            />)}
        </div>
    </div>

}