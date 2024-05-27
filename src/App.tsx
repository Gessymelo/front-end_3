/*Geral: aqui è o local onde vamos determinar onde ira fica os coponentes como home e os demais no app  */

import { Outlet, NavLink, Navigate} from "react-router-dom"

import classes from './App.module.css'
import Navbar from "./components/Navbar"


function App() {


  return (

     
     
    <div className={classes.app}>
      
       <Navbar/>
      <h1>GitHub Finder</h1>
      <Outlet/>
    </div> 
    
  )
}

export default App
