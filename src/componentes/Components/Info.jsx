import React from "react"
import style from './Info.module.css'
import react from '../../media/Iconos/react.svg'
import bootstrap from '../../media/Iconos/bootstrap.svg'
import css3 from '../../media/Iconos/css3.svg'
import express from '../../media/Iconos/express.svg'
import git from '../../media/Iconos/git.svg'
import html5 from '../../media/Iconos/html5.svg'
import javascript from '../../media/Iconos/javascript.svg'
import less from '../../media/Iconos/less.svg'
import nodedotjs from '../../media/Iconos/nodedotjs.svg'
import postgresql from '../../media/Iconos/postgresql.svg'
import redux from '../../media/Iconos/redux.svg'
import mongodb from '../../media/Iconos/mongodb.svg'
import sequelize from '../../media/Iconos/sequelize.svg'
import typescript from '../../media/Iconos/typescript.svg'


export function Info() {
    return (
        <div className={style.contenedor}>
            <h2 className={style.textoo}>Stack Actual:</h2>
            <div className={style.info}>
              
                <div className={style.row}>
             <div>  <img className={style.imagen} src={typescript} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}>TYPESCRIPT</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img  className={style.imagen}src={bootstrap} width={100} height={100} alt="" /><br /><br /><p className={style.p}>BOOSTRAP</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={redux} width={100} height={100} alt="" /><br /><br /><p className={style.p}>REDUX</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={express} width={100} height={100} alt="" /><br /><br /><p className={style.p}>EXPRESS</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div> <img className={style.imagen}src={git} width={100} height={100} alt="" /><br /><br /><p className={style.p}>GIT</p></div> 
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={html5} width={100} height={100} alt="" /><br /><br /><p className={style.p}>HTML5</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div> <img className={style.imagen} src={javascript} width={100} height={100} alt="" /><br /><br /><p className={style.p}>JAVASCRIPT</p></div> 
             <div className={style.none}><p>-- --</p> </div>
             </div>
             <div className={style.row}>
             <div> <img className={style.imagen} src={nodedotjs} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}>NODEJS</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={postgresql} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}>POSTGRESQL</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div> <img className={style.imagen} src={css3} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}> CSS</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={mongodb} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}>MONGODB</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>   <img className={style.imagen} src={react} width={100} height={100} alt="" /><br /><br /> <p className={style.ptxt}>REACT</p></div>
             <div className={style.none}><p>-- --</p> </div>
             <div>  <img className={style.imagen} src={sequelize} width={100} height={100} alt="" /><br /><br /><p className={style.ptxt}>SEQUELIZE</p></div>
             <div className={style.none}><p>-- --</p> </div>
             </div>
            </div>
        </div>
    )
}
