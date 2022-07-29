// import React from 'react';
import { Link } from 'react-router-dom';
import Palidromo from '../../media/PALINDROMO.mp4'
import style from './Fivecomponents.module.css'


export function Fivecomponents() {
    
    return (
        <div className={style.contenedor}>
            <div className={style.lorem}>
            <h1>PALINDROMOS</h1>
            <p>Pequeño proyecto que integra un backend con realizado con Node y Express, y un fontend realizado con react y bootstrap.Se realiza una petecion a la API local enviandole una palabra por query para que esta nos responda con la misma palabra invertada y en caso de ser PALINDROMO nos infroma tambien. 
            <br />
            <a href="https://copy-write.vercel.app/"> <h2>Link Deploy</h2>  </a>
            <br />
                <a className={style.ref} href="https://github.com/Agustin2214/BLOCKFLIX"> <i className="fab fa-github github"></i></a>
                <Link to='/'> <button className={style.btn}>Volver</button></Link>
               
            
                
</p>
</div>
            <div className={style.video}>
            <video width="700" height="500" controls autoplay src={Palidromo}></video>
            </div>
        </div>
    )
}





