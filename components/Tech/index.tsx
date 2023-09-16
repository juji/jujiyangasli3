
import style from './tech.module.scss'
import data from './data.local.js'
import TechCell from './TechCell'

export default function Tech(){
    
    return <div className={`${style.tech} page`} id="tech">

        <h1 className={`${style.h1}`}>Technologies</h1>
        <p className={`${style.par}`}>Techs i&apos;m comfortable with</p>

        { data.map((group, i) => {
            
            let no = 0
            return <div key={`techRow${i}`} className={style.techRow} id={style[`techRow${i}`]}>

                {group.map((tech, idx) => {
                    

                    return <TechCell {...tech} 
                        key={`techRow${i}.${idx}`}
                        id={style[tech.id]}
                        className={`${style.techItem} ${style[`techNo${no++}`]}`} />

                })}

            </div>

        })}

    </div>

}