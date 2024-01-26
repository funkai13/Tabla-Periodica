import { GitHubIcon, LinkedinIcon } from "./Icons"


export const Header =()=>{
    return(
        <header className=" fixed  z-50  w-full p-4 overflow-x-hidden  flex items-center  justify-around  bg-gray-800    ">
            <h1 className="text-white text-xl text-center">
            PERIODIC TABLE
            </h1>
            <section className=" flex  gap-3">
               <a href="https://github.com/funkai13/Tabla-Periodica" target="_blank" className="fill-white">
                <GitHubIcon/>
               </a>
               <a href="https://www.linkedin.com/in/evinsson-medrano-642014256/" target="_blank" className="fill-white">
                <LinkedinIcon/>
               </a>
            </section>
        </header>
    )
}