import React from 'react';
import { Link } from 'react-router-dom';
import BLOCKFLIX from '../media/BLOCKFLIX.mp4'
import style from './OneComponent.module.css'




export function TwoCompent() {
    return (
        <div className={style.contenedor}>
            <div className={style.lorem}>
            <h1>BLOCKFLIX</h1>
            <p>Mi primer proyecto creado, se trata de una SPA(Single page Application) en la cual se obtienen datos de una API de películas.
                Contiene detalle de cada película, un buscador debounce y un scroll infinito.
                En este proyecto utilice las siguiente tecnologías:
                REACT, JAVASCRIPT, CSS MODULE, HTML5. 
                <a className={style.ref} href="https://github.com/Agustin2214/BLOCKFLIX"> <i className="fab fa-github github"></i></a>
                <Link to='/'> <button className={style.btn}>Volver</button></Link>
               
            
                
</p>
            </div>
            <div className={style.video}>
            <video width="700" height="500" controls autoplay src={BLOCKFLIX}></video>
            </div>
           
        </div>
    )
}

