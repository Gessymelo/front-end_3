import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// inportanto algumas coisa do react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages quer estao sendo pegas da pasta routes
import Home from "./routes/Home";

import About from './routes/About';
import Colaboradores from './routes/Colaboradores';

// configuramos o objeto a patir do CreateBrowserRouter,difinido os componetes principal que irra abarca com outros elementos da page 
const router = createBrowserRouter([
{
  path: "/",
  element:<App/>,
  children:[ //aqui eu vou ta configurando page por page
    {
      path:"/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/colab",
      element:<Colaboradores/>,

    }
  ],
},
]);

// aqui foi passado para App a partir do RouterProvider*//
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
