/*Geral: aqui è o local onde vamos determinar onde ira fica os coponentes como home e os demais no app  */

import { Outlet } from "react-router-dom"

import classes from './App.module.css'

function App() {


  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet/>
    </div> 
    
  )
}

export default App
