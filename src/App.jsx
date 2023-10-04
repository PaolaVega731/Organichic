import { ItemListContainer } from "./Components/ItemListContainer"
import { NavBar } from "./Components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <>
     

      <div className="">
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a OrganiChic"}/>
        <span className="absolute top-4 right-5 bg-red-500 px-1 rounded-full text-sm text-white">
               1
            </span>
      </div>
      
     
      
        
    </>
  )
}

export default App
