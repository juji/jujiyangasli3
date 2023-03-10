
import style from './tech.module.scss'
import data from './data'

export default function Tech(){

    return <div className={`${style.tech} page`} id="tech">

        <h1 className={`${style.h1}`}>Technologies</h1>
        <p className={`${style.par}`}>Techs i&apos;m familiar with</p>

        { data.map((group, i) => {

            return <div key={`techRow${i}`} className={style.techRow} id={style[`techRow${i}`]}>

                {group.map((tech, idx) => {

                    return <a key={`techRow${i}.${idx}`} href={tech.url} 
                        title={tech.title} 
                        target="_blank" rel="noopener noreferrer" 
                        className={style.techItem}>

                            <img src={tech.image} 
                                aria-label={tech.title} 
                                alt={tech.title} 
                                loading="lazy"
                                id={style[tech.id]} />
                            
                        </a>

                })}

            </div>

        })}

    </div>

}