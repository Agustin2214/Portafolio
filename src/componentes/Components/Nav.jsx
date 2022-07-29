import style from './Nav.module.css'
import React from 'react';
import x from '../../media/Iconos/1password.svg'

export function Nav({posicion}){
function handleClickTop(){
  window.scrollTo({top:0,left:0,behavior:"smooth"})
}


    return(
        <nav className = {` ${style.navbar} ${posicion>20? style.scroll : null}`} >
          <div on onClick={handleClickTop} className={style.cont} >
       <ul className={style.ul}>
         <li className={style.li1}><img className={style.asd} src={x} width={25} height={25} alt="" /></li>
         
         <li className={style.li2}>Descargar Cv</li>
         <li className={style.li3}>Contacto</li>
         </ul> 
      </div>
        </nav>
        )
}