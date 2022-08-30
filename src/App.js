
import './App.css';
import { Home } from './componentes/Components/Home';
import { Nav } from './componentes/Components/Nav';
import {useState, useEffect} from 'react'
import { About } from './componentes/Components/About';
import { Sliders } from './componentes/Components/Sliders';
import React from 'react';
import { Info } from './componentes/Components/Info';
import { Footer1 } from './componentes/Components/Footer1';
import {BrowserRouter,Switch,Route,Router} from 'react-router-dom'


import { OnePagePoyect } from './componentes/Proyect/OnePagePoyect';
function App() {


const [posicion, setPosicion] = useState(0);

function handleScroll() {
const posiciones = window.pageYOffset
setPosicion(posiciones)
}

useEffect(() => {
  window.addEventListener("scroll",handleScroll)
}, [posicion]);









  return (
    <div className="App">
      
      <BrowserRouter>
      
  
      <Route exact path ='/' component = {Home} />
      <Route exact path ='/' component = {About} />
      <Route exact path ='/' component = {Sliders} />
      <Route exact path ='/' component = {Info} />
      <Route exact path ='/' component = {Footer1} />
  
      <Route exact path ='/proyecto/:id' component = {OnePagePoyect} />
    
      
      </BrowserRouter>
    </div>
  );
}

export default App;
