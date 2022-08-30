//import Violeta from '../media/Violeta.mp4'
import pc from '../../media/Pc.mp4'
import dev from '../../media/Dev1.mp4'
import dev2 from '../../media/Dev2.mp4'
import style from './Home.module.css'
import { Nav } from './Nav'
import React from 'react';

export function Home() {
    return (
        <div className={style.contenedor}>
           
            {/* <img className={style.img} src={home} alt="asd" /> */}
            <video className={style.img} src={pc} autoPlay loop muted />
            <h1 >Agustin Ibañez</h1>
            <p className={style.spans}>Desarollador Web FullStack</p>
        </div>
    )
}
