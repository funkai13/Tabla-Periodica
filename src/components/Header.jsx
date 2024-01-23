import { GitHubIcon, LinkedinIcon } from "./Icons"


export const Header =()=>{
    return(
        <header className=" flex  justify-center ">
            <h1>
            PERIODIC TABLE
            </h1>
            <section className=" flex">
               <a href="https://github.com/funkai13/Tabla-Periodica" target="_blank">
                <GitHubIcon/>
               </a>
               <a href="https://www.linkedin.com/in/evinsson-medrano-642014256/" target="_blank">
                <LinkedinIcon/>
               </a>
            </section>
        </header>
    )
}