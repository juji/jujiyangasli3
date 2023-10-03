
import style from './tech.module.scss'
import data from './data.local.js'
import TechCell from './TechCell'


export default function Tech(){
    
    let num = 0;
    
    return <div className={`${style.tech} page`} id="tech">

        <h1 className={`${style.h1}`}>Technologies</h1>
        <p className={`${style.par}`}>Techs i&apos;m comfortable with</p>

        { data.map((group, i) => {
            
            
            return <div key={`techRow${i}`} className={style.techRow} id={style[`techRow${i}`]}>

                {group.map((tech, idx) => {

                    // console.log(num)
                    // count the number of tech for tech.module.scss

                    return <TechCell {...tech} 
                        key={`techRow${i}.${idx}`}
                        id={style[tech.id]}
                        className={`${style.techItem} ${style[`techNo${num++}`]}`} />

                })}

            </div>

        })}

    </div>

}