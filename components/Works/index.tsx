import { useState, useMemo } from 'react'
import style from './works.module.scss'
import workData from './works'
import WorkTile from './WorkTile'
import Toggle from '@/components/utils/Toggle'
import { useRouter } from 'next/router'

export default function Works(){

    const router = useRouter()
    // const showZombies = router.query?.showzombies === '1'
    // const zombieLabel = router.query?.showzombies === '1' ? 
    //     <>Zombies&nbsp;Shown</> :
    //     <>Show&nbsp;Zombies</>

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
                <Toggle 
                    href={router.query?.showzombies === '1' ? '/works' : '/works?showzombies=1'} 
                    toggled={router.query?.showzombies === '1'} 
                    label={router.query?.showzombies === '1' ? 
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
            { router.query?.showzombies === '1' ? zombies.map((v,i) => <WorkTile 
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