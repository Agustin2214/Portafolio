import React from 'react';
import { Link } from 'react-router-dom';
import Balance from '../../media/balance.mp4'
import style from './FourComponent.module.css'





export function FourComponent() {
      return (
        <>
        <nav className={style.navBar}>
        <Link to='/3'><p>Anterior</p></Link>
        <Link to='/5'><p>Siguiente</p></Link>
        
        </nav>
        <div className={style.contenedor}>
            <div className={style.lorem}>
            <h1>BALANCE</h1>
            <p>Aplicación desarrollada para poder ingresar al desafio Alkemy como full stack. Es una aplicación para control y gestión de tus registros financieros, pudiendo ingresar o retirar dinero manteniendo así un control, se muestra solo las ultimas 10 opereciones y se registra el balance de las mismas y el historico.Realice esta app utilizando en el back end Node Js, Express, PostgreSQL, autenticación JWT y el front con React Js, Redux y React-Bootstrap.
                <a className={style.ref} href="https://github.com/Agustin2214/ProjectoAlkemyFullStack"> <i className="fab fa-github github"></i></a>
                <Link to='/'> <button className={style.btn}>Volver</button></Link>
               
            
                
</p>
            </div>
            <div className={style.video}>
            <video width="700" height="500" controls autoplay src={Balance}></video>
            </div>
           
        </div>
        </>
    )
}
