import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() { 
  return (
    <>     
      <div className="">
        <NavBar/>
        <ItemDetailContainer />
        <span className="absolute top-4 right-5 bg-red-500 px-1 rounded-full text-sm text-white">
               1
            </span>
      </div>          
    </>
  )
}
export default App
