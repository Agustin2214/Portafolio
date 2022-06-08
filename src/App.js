
import './App.css';
import { Home } from './componentes/Home';
import { Nav } from './componentes/Nav';
import {useState, useEffect} from 'react'
import { About } from './componentes/About';
import { Sliders } from './componentes/Sliders';
import React from 'react';
import { Info } from './componentes/Info';
import { Footer1 } from './componentes/Footer1';
import {OneComponent} from './componentes/OneComponent'
import {BrowserRouter,Switch,Route,Router} from 'react-router-dom'
import { TwoCompent } from './componentes/TwoCompent';
import { ThereeComponent } from './componentes/ThreeComponent';

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
      <Route exact path ='/1' component = {OneComponent} />
      <Route exact path ='/2' component = {TwoCompent} />
      <Route exact path ='/3' component = {ThereeComponent} />
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
