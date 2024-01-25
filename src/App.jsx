import './App.css'
import { Header } from './components/Header'
import {PeriodicTable} from './components/PeriodicTable'
import { useElementStore } from './store/element'

function App() {

return(
  <>
  <main>
  <Header/>
  <PeriodicTable/>
  </main>

  </>
)
}


export default App
