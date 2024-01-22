import { useElementStore } from "../store/element";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { useGLTF,Stage, PresentationControls, Shadow, OrbitControls } from "@react-three/drei";





export const Modal=()=>{
  const selectedElement =useElementStore(state=>state.selectedElement)
  const element=useElementStore(state=>state.selectedElement)
  const clearSelectedElement= useElementStore(state=>state.clearSelectedElement)
  const goNextElement =useElementStore(state=>state.goNextElement)
  const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
    "polyatomic nonmetal": "#909090",
    "actinide":"#70abfa" 
  }

  
  
  
  console.log(element)
  if(!selectedElement){
    return null
  }
  return(
    <div class="fixed top-1/4  z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-x-1/3 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-lg max-h-full">
      
        <div class="relative rounded-lg bg-transparent shadow-2xl border-solid border-2">
            <div class="flex  justify-between  p-4 md:p-5  border-b rounded-t dark:border-gray-600">
              <div style={{ backgroundColor: colorMap[element.category],}} className="w-20 h-16 rounded-md border-transparent ">
                <div className="flex justify-between ">
                    <p className='text-white text-xs  text-left pl-2'>{element.number} </p>
                    <p className="text-white text-xs  pr-2">  {element.atomic_mass.toFixed(2)}</p>
                </div>
            
               <h1 className='text-white  text-center  font-extrabold'>{element.symbol}</h1>
              <h1 className='text-xs text-white text-center mb-px pb-0'>{element.name}</h1>
              </div>
                <div className="flex flex-col justify-between h-16 items-center ">
                  <h1 className="text-white text-3xl">{element.name}</h1>
                  <span className="text-white">{element.category}</span>
              </div>
              <button onClick={clearSelectedElement} type="button" class="">
                    <svg class="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            
            </div>
            <div>
              <Canvas  className=" absolute cursor-pointer"dpr={[1,2]} shadows camera={{fov:45}}>
                <OrbitControls zoom={0.5}/>
                <Stage environment={null}>
                  <Model scale={0.2}/>
              </Stage>
              </Canvas>
            </div>
            <div class="p-4 md:p-5 space-y-4 ">
              <h1 className="text-white">{element.summary}</h1>
            </div>
          
            <div class="flex  flex-col  items-start p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 text-white">
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




