import style from './About.module.css'

import fotocv from '../../media/fotocv.jpg'
import React from 'react';

export function About() {


    return (
        <div className={style.contenedor}>
            <div className={style.lorem}>
                <h3>Hola!</h3>
               <p>Mi nombre es Agustin, tengo 26 años y soy desarrollador web fullstack. Mi camino con la programación comenzó en un bootcamp con mas de 800hs de código el cual pude terminar en tiempo y forma a pesar de que era mi primer contacto con este tipo de tecnologías. No conforme con esto continuo mi formación en varios cursos orientados a programación para seguir mejorando y sumando tecnologías al stack que manejo actualmente. Estoy trabajando en Grupo Datco en la unidad de negocios Focus, en la cual puede aprender sobre docker,kubernetes, openshift y otras herraminetas de Red Hat.</p>
            </div>
            <div className={style.img}>
<img src={fotocv} alt='img not found' />
            </div>
        </div>
    )
}
