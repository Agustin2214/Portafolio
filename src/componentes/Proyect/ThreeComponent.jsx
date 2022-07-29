
import React from 'react';
import { Link } from 'react-router-dom';

import style from './OneComponent.module.css'
import WINE from '../../media/WINES.mp4'



export function ThereeComponent() {
    return (
        <div className={style.contenedor}>
            <div className={style.lorem}>
            <h1>VINOTECA</h1>
            <p>Proyecto final realizado para obtener la certificacion de FULLSTACK DEVELOPER del bootcamp Soy Henry!.
                Se trata de un E-COMMERCE de vinos con todas las funcionalidades que cuenta un proyecto de estas caracteristicas.
                En este proyecto utilice las siguiente tecnologías: REACT, REDUX, CSS, NODEJS, EXPRESSJS, MONGODB. 
                <a href="https://wine-ecommercew.vercel.app/">  Click aqui para ser redireccionado al sitio</a> 
                <a className={style.ref} href="https://github.com/vinoteca-ecommerce/wineEcommerce"> <i className="fab fa-github github"></i></a>
                <br />

                <Link to='/'> <button className={style.btn}>Volver</button></Link>
               
            
                
</p>
</div>
            <div className={style.video}>
            <video width="700" height="500" controls autoplay src={WINE}></video>
            </div>
           
        </div>
    )
}

