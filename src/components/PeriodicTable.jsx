import PeriodicTableData from '../../public/PeriodicTableData.json'
import { useElementStore } from '../store/element';
import { Modal } from './Modal';


export const PeriodicTable =()=>{

const elements = useElementStore(state=>state.elements)
const { setSelectedElement,selectedElement } = useElementStore();
const plv= elements.find((category)=>category ='metalloid')
const colorMap = useElementStore(state=>state.colorMap)
const handleClick = (element) => () => {
setSelectedElement(element);

}


return(
  <>
<section className={`xl:h-screen flex items-center justify-center bg-slate-800  xl:pt-0  pt-20 ${selectedElement ? 'blur-sm':''}`}  >
<div className='xl:grid  xl:grid-cols-18  xl:grid-rows-7 xl:gap-1 flex flex-col gap-1'>

  {
    
    elements.map(element=>(
      <div  onClick={handleClick(element)}key={element.name} className='bg-clip-border border-2  cursor-pointer hover:scale-125 rounded-md xl:p-1 xl:w-20 xl:h-20 transition ease-in-out delay-75  '   style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
        backgroundColor: colorMap[element.category],
        borderColor: selectedElement&& selectedElement.number===element.number ? 'red': colorMap[element.category],
        
      }}>
        <p className='text-white text-xs pl-1'>{element.number}</p>
        <h1 className='text-white  text-center font-medium text-2xl '>{element.symbol}</h1>
        <h1 className='text-xs font-extralight text-white text-center mb-px '>{element.name}
        </h1>
      </div>
 )) } 
</div>
</section>
{selectedElement && <Modal />}
</>
  )
}

