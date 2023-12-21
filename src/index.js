import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Estetica from './pages/estetica';
import SobreNos from './pages/sobre-nos';
import Academia from './pages/academia';
import Odontologia from './pages/odontologia';
import Exames from './pages/exame';
import Contato from './pages/contato';
import TrabalheConosco from './pages/trabalhe-conosco';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "exames",
    element: <Exames />
  },
  {
    path: "estetica",
    element: <Estetica />
  },
  {
    path: "odontologia",
    element: <Odontologia />
  },
  {
    path: "academia",
    element: <Academia />
  },
  {
    path: "sobre-nos",
    element: <SobreNos />
  },
  {
    path: "contato",
    element: <Contato />
  },
  {
    path: "trabalhe-conosco",
    element: <TrabalheConosco />
  }
])

ReactDOM.render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
