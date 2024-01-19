import { useElementStore } from "../store/element";

export const Modal=()=>{
  const selectedElement =useElementStore(state=>state.selectedElement)
  const element=useElementStore(state=>state.selectedElement)
  const clearSelectedElement= useElementStore(state=>state.clearSelectedElement)
  const goNextElement =useElementStore(state=>state.goNextElement)
  console.log(element)
  if(!selectedElement){
    return null
  }
  return(
    <main className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <section key={element.number}>
      <article   className='flex flex-col items-center'>
        <div className='flex z-0 w-96 h-48'>
          <div>
            <img className='absolute z-0 w-96 h-48 ' src={element.image.url} alt={element.name} />
          </div>
          <div className=' z-10 '>
            <h1 className='text-white'>{element.symbol}</h1>
            <div>
              <h1 className=' text-white'>{element.name}</h1>
              <p className='text-white'>{element.atomic_mass}g/mol</p>
            </div>
          </div>
        </div>
        <section className=' w-96'>
          <h1 className=' bg-slate-400 w-96  text-center'>overwiev</h1>
          <h1>Summary</h1>
          <p>{element.summary}</p>
          <h1>Discovered By</h1>
          <p>{element.discovered_by}</p>
          <h1>Name By</h1>
          <p>{element.named_by}</p>
          <h1>Appereance</h1>
          <p>{element.appearance}</p>
          <h1>Electron Shells</h1>
          <p>{element.shells}</p>
          <h1>Color</h1>
      </section>
      <section className='w-96'>
        <h1 className=' bg-gray-800'>Properties</h1>
        <h1>ATOMIC NUMBER:</h1>
        <p>{element.number}</p>
        <h1>ATOMIC MASS:</h1>
        <p>{element.atomic_mass}</p>
        <h1>DENSITY:</h1>
        <p>{element.density}</p>
        <h1>PHASE:</h1>
        <p>{element.phase}</p>
        <h1>MELTING POINT:</h1>
        <p>{element.melt}K</p>
        <h1>BOILING POINT:</h1>
        <p>{element.boil}</p>
        <h1>MOLAR HEAT:</h1>
        <p>{element.molar_heat}</p>
        <h1>GROUP:</h1>
        <p>{element.group}</p>
        <h1>PERIOD:</h1>
        <p>{element.period}</p>
        <h1>EMMISION SPECTRUM:</h1>
        <p>{element.spectral_img}</p>
        <h1>ELECTRON CONFIGURATION:</h1>
        <p>{element.electron_configuration}</p>
        
      </section>
      <section className='w-96'>
        <h1>Reactivity</h1>
        <h1>ELECTRONEGATIVITY PAULING:</h1>
        <p>{element.electronegativity_pauling}</p>
        <h1>ELECTRON AFFINITY:</h1>
        <p>{element.electron_affinity}</p>
      </section>
      <div className="flex items-center  space-x-2">
      <button>atra mi negro</button>
      <button onClick={clearSelectedElement}>Cerrar esta mouser </button>
      <button onClick={goNextElement}>siguiente</button>
      </div>
      </article>
     
      </section>
    </main>
  )
}




