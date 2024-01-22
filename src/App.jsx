import './App.css'
import {PeriodicTable} from './components/PeriodicTable'
import { useElementStore } from './store/element'

function App() {

return(
  <>
  <main>
    <h1 className=' fixed flex items-center justify-center'>Periodic Table</h1>
  <PeriodicTable/>
  </main>

  </>
)
}


export default App
