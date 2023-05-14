
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoSkype,
    IoLogoNpm
  } from "react-icons/io";
import style from './contact.module.scss'

export default function Contact(){

    return <div className={`${style.contact} page`} id="contact">
        <h1 className={`${style.h1}`}>Contact</h1>
        <p className={`${style.par}`}>and profiles..</p>
        <p className={`${style.email}`}>
            <a target="_blank" rel="noopener noreferrer" href="mailto:him@jujiyangasli.com">
                him@jujiyangasli.com
            </a>
        </p>
        <p className={`${style.city}`}>
            Tangerang, Indonesia
        </p>

        <div className={`${style.links}`}>
            <a target="_blank" rel="noopener noreferrer" 
                title="Github page"
                aria-label="Go to juji's github page"
                id={`${style.github}`} href="https://github.com/juji"><IoLogoGithub size="2.618em" /></a>
            <a target="_blank" rel="noopener noreferrer" 
                title="NPM page"
                aria-label="Go to juji's npm page"
                id={`${style.npm}`} href="https://npmjs.com/~jujiyangasli"><IoLogoNpm size="2.618em" /></a>
            <a target="_blank" rel="noopener noreferrer" 
                title="LinkedIn page"
                aria-label="Go to juji's linkedin page"
                id={`${style.linkedin}`} href="https://www.linkedin.com/in/jujiyangasli/"><IoLogoLinkedin size="2.618em" /></a>
            <a target="_blank" rel="noopener noreferrer" 
                title="Skype Chat"
                aria-label="chat with juji on skype"
                id={`${style.skype}`} href="skype://juji.gunadi?chat"><IoLogoSkype size="2.618em" /></a>
        </div>
    </div>

}