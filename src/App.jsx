import PeriodicTableData from './mocks/PeriodicTableData.json'
import './App.css'


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

function handleClick(){
  alert('que tranza carnal')}

function App() {
  const elements = PeriodicTableData.elements
return(
  <section className='h-screen flex items-center justify-center bg-slate-800'  >
  <div className='grid  grid-cols-18  grid-rows-7 gap-1.5'>
    {
      elements.map(element=>(
        <div onClick={handleClick} key={element.name} className='bg-clip-border border-2  cursor-pointer'  style={{
          gridColumn: element.xpos,
          gridRow: element.ypos,
          borderColor: colorMap[element.category],
          backgroundColor: colorMap[element.category],
        }}>
          <p className='text-white text-sm'>{element.number}</p>
          <h1 className='text-white  text-center '>{element.symbol}</h1>
          <h1 className='text-xs text-white text-center'>{element.name}</h1>
        </div>
   )) } 
  </div>
</section>
)

}

export default App
