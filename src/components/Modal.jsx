import { useElementStore } from "../store/element";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { useGLTF,Stage, PresentationControls, Shadow, OrbitControls } from "@react-three/drei";
import { CloseIcon, GitHubIcon, GoBackIcon, GoNextIcon } from "./Icons";






export const Modal=()=>{
const selectedElement =useElementStore(state=>state.selectedElement)
const element=useElementStore(state=>state.selectedElement)
const clearSelectedElement= useElementStore(state=>state.clearSelectedElement)
const goToNextElement =useElementStore(state=>state.goToNextElement)
const colorMap = useElementStore(state=>state.colorMap)
const goPreviousElement = useElementStore(state=>state.goPreviousElement)

  console.log(element)
  if(!selectedElement){
    return null
  }
  return(
    <div className='fixed  z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0 flex items-center justify-center'>
    <div className='relative w-full max-w-lg max-h-full'>
      
        <div className='relative rounded-lg  bg-slate-500/65 shadow-2xl border-solid border-2'>
            <div className='flex  justify-between  p-4   border-b rounded-t dark:border-gray-600'>
              <div style={{ backgroundColor: colorMap[element.category],}} className='w-20 h-16 rounded-md border-transparent '>
                <div className='flex justify-between '>
                    <p className='text-white text-xs  text-left pl-2'>{element.number} </p>
                    <p className='text-white text-xs  pr-2'>  {element.atomic_mass.toFixed(2)}</p>
                </div>
            
               <h1 className='text-white  text-center  font-extrabold'>{element.symbol}</h1>
              <h1 className='text-xs text-white text-center mb-px pb-0'>{element.name}</h1>
              </div>
                <div className='flex flex-col justify-between h-12 items-center '>
                  <h1 className='text-white text-3xl'>{element.name}</h1>
                  <span className='text-white'>{element.category}</span>
              </div>
              <button onClick={clearSelectedElement} type="button" className="fill-white space-x-0 spacey-0"  >
                   <CloseIcon className="fill-white" />
                    
                </button>
            
            </div>
            
            <div>
              {element.bohr_model_3d &&  
              <Canvas  className=" absolute cursor-pointer"dpr={[1,2]} shadows camera={{fov:45}}>
                <OrbitControls zoom={0.5}/>
                <Stage environment={null}>
                  <Model scale={0.2}/>
              </Stage>
              </Canvas> } 
            
            </div>
            <div className="flex justify-between  pr-2 pl-2">
              <button  onClick={goPreviousElement}className="fill-white">
                <GoBackIcon/>
              </button>
              <button onClick={goToNextElement} className="fill-white">
              <GoNextIcon/>
              </button>
            </div>
            <div className='p-4 space-y-4 '>
              <h1 className='text-white text-xs xl:text-lg '>{element.summary}</h1>
            </div>
          
            <div className='flex  flex-col  items-start xl:p-4 pl-4 pb-2 m border-t border-gray-200 rounded-b dark:border-gray-600 text-white  text-xs xl:text-lg'>
              <h1 > ATOMIC MASS:  {element.atomic_mass}K</h1>
              <h1> DENSITY : {element.density} (g/cm³)</h1>
              <h1>PHASE : {element.phase}</h1>
              <h1>MELTING POINT: {element.melt}K</h1>
              <h1>BOILING POINT: {element.boil}K</h1>
              <h1>ELECTRON CONFIGURATION: {element.electron_configuration}</h1>
            </div>
        </div>
    </div>
</div>
  )
}




