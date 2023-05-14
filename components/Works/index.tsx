import { useState, useMemo } from 'react'
import style from './works.module.scss'
import workData from './works.local.js'
import WorkTile from './WorkTile'
import Toggle from '@/components/utils/Toggle'
import version from '@/lib/version'

export default function Works({ showAll }:{ showAll?: boolean }){

    const [ showZombies, setShowZombies ] = useState(showAll||false)
    const toggleClick = (e:any) => {
        e.preventDefault()
        setShowZombies(!showZombies)
    }

    const works = useMemo(() => {
        return workData.filter(v => !v.zombie)
    },[])

    const zombies = useMemo(() => {
        return workData.filter(v => v.zombie)
    },[])

    return <div className={`${style.works} page`} id="works">
        
        <h1 className={`${style.h1}`}>Works</h1>
        <div className={style.top}>
            <p className={`${style.par}`}>My works - that i remember ;)</p>
            <div className={style.toggle}>
                <Toggle 
                    onClick={toggleClick}
                    href={showAll || showZombies ? `/works?v=${version}` : `/works/showzombies?v=${version}`} 
                    toggled={showAll|| showZombies || false} 
                    label={showAll || showZombies ? 
                        <>Zombies&nbsp;Shown</> :
                        <>Show&nbsp;Zombies</>} />
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
            { showAll || showZombies ? zombies.map((v,i) => <WorkTile 
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