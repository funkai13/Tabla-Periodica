import PeriodicTableData from '../../public/PeriodicTableData.json'
import { useElementStore } from '../store/element';
import { Modal } from './Modal';


export const PeriodicTable =()=>{
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
  };
  
  const elements = useElementStore(state=>state.elements)
  const { setSelectedElement,selectedElement } = useElementStore();
  const plv= elements.find((category)=>category ='metalloid')
  console.log(plv)
const handleClick = (element) => () => {
  console.log(element)
setSelectedElement(element);

}


return(
  <>
 
<section className={`h-screen flex items-center justify-center bg-slate-800 flex-col ${selectedElement ? 'blur-sm':''}`}  >
<div className='grid  grid-cols-18  grid-rows-7 gap-1'>

  {
    
    elements.map(element=>(
      <div  onClick={handleClick(element)}key={element.name} className='bg-clip-border border-2  cursor-pointer hover:scale-125 rounded-md p-1 w-20 h-20 transition ease-in-out delay-150 '   style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
        backgroundColor: colorMap[element.category],
        borderColor: selectedElement&& selectedElement.number===element.number ? 'yellow': colorMap[element.category],
        
      }}>
        <p className='text-white text-xs pl-1'>{element.number}</p>
        <h1 className='text-white  text-center font-medium text-2xl '>{element.symbol}</h1>
        <h1 className='text-xs text-white text-center mb-px '>{element.name}
        </h1>
      </div>
 )) } 
</div>
</section>
{selectedElement && <Modal />}
</>
  )
}

