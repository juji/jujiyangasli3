import { useState, useMemo, useEffect } from 'react'
import style from './works.module.scss'
import workData from './works.local.js'
import WorkTile from './WorkTile'
import Toggle from '@/components/utils/Toggle'
// import version from '@/lib/version'

export default function Works({ showAll }:{ showAll?: boolean }){

    const [ showZombies, setShowZombies ] = useState(showAll||false)
    const toggleClick = (e:any) => {
        if(showAll) return true;
        e.preventDefault()
        setShowZombies(!showZombies)
        if(showZombies)
            localStorage.removeItem('juji-showzombies')
        else localStorage.setItem('juji-showzombies','1')
    }

    useEffect(() => {
        if(typeof localStorage === 'undefined') return () => {}
        const zombies = localStorage.getItem('juji-showzombies')
        if(zombies && !showZombies) setShowZombies(true)
    },[ typeof localStorage ])

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
                    href={showAll || showZombies ? `/works` : `/works/showzombies`} 
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
                backToZombies={!!showAll}
            />)}
            { showAll || showZombies ? zombies.map((v,i) => <WorkTile 
                className={`${style.workTile} ${style.zombie} ${style[`workTile${i}`]}`}
                key={`work_${v.id}`}
                {...v}
                id={style[v.id]}
                workId={v.id}
                lazyLoad={i>=0}
                backToZombies={!!showAll}
            />) : null }
        </div>
    </div>

}