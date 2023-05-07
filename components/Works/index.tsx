import { useState, useMemo } from 'react'
import style from './works.module.scss'
import workData from './works'
import WorkTile from './WorkTile'
import Toggle from '@/components/utils/Toggle'

export default function Works(){

    const [ showZombies, setShowZombies ] = useState(false)
    const zombieLabel = useMemo(() => {
        return showZombies?<>Zombies&nbsp;Shown</> : <>Show&nbsp;Zombies</>
    },[ showZombies ])

    const works = useMemo(() => {
        return workData.filter(v => !v.zombie)
    },[])

    const zombies = useMemo(() => {
        return workData.filter(v => v.zombie)
    },[])

    return <div className={`${style.works} page`} id="works">
        
        <h1 className={`${style.h1}`}>Works</h1>
        <div className={style.top}>
            <p className={`${style.par}`}>My works -- that i remember ;)</p>
            <div className={style.toggle}>
                <Toggle onClick={setShowZombies} 
                    toggled={showZombies} label={zombieLabel} />
            </div>
        </div>

        <div className={style.workGrid}>
            {works.map((v,i) => <WorkTile 
                className={`${style.workTile} ${style[`workTile${i}`]}`}
                key={`work_${v.id}`}
                {...v}
                id={style[v.id]}
                workId={v.id}
                lazyLoad={i>=3}
            />)}
            { showZombies ? zombies.map((v,i) => <WorkTile 
                className={`${style.workTile} ${style.zombie} ${style[`workTile${i}`]}`}
                key={`work_${v.id}`}
                {...v}
                id={style[v.id]}
                workId={v.id}
                lazyLoad={i>=0}
            />) : null }
        </div>
    </div>

}