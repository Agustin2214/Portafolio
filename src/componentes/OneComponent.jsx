import React from 'react';
import { Link } from 'react-router-dom';
import apidogs from '../media/APIDOGS.mp4'
import style from './OneComponent.module.css'




export function OneComponent() {
    return (
        <div className={style.contenedor}>
            <div className={style.lorem}>
            <h1>API DOGS</h1>
            <p>Proyecto Individual(PI) realizado en el bootcamp Soy Henry!

Es una Single Page Application(SPA) basada en un API de perros. La pagina cuenta con distintos tipos de filtrado y ordenamiento, carta de detalles, búsqueda, creación de nuevos personajes con un formulario controlado y mas. 

Las tecnologías que utilice fueron:
REACT, REDUX, NODEJS, EXPRESSJS, POSTGRESQL, SEQUELIZE, CSS, JAVASCRIPT,HTML.

<a className={style.ref} href="https://github.com/Agustin2214/PI-Dogs-main"> <i className="fab fa-github github"></i></a>

<Link to='/'> <button className={style.btn}>Volver</button></Link>
               
            
                
</p>
            </div>
            <div className={style.video}>
            <video width="700" height="500" controls autoplay src={apidogs}></video>
            </div>
           
        </div>
    )
}
