import React from 'react';
import { Link } from 'react-router-dom';
import style from './Slide.module.css'


// export function Slide() {
// const slides =[
//     {
//         img:'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         alt:'Proyecto1',
//         descripcion:'Proyect Description',
//     },
//     {
//         img:'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         alt:'Proyecto2',
//         descripcion:'Proyect Description',
//     },
//     {
//         img:'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         alt:'Proyecto3',
//         descripcion:'Proyect Description',
//     }
// ]



//     return (
//         slides.map(e=>( 
//         <div className={style.contendor}>
//             <img src={e.img} alt={e.alt} />
//             <div className={style.desc}>
//                 <span>{e.descripcion}</span>
                
//                 </div>
//         </div>
//     )))
// }

    const slides =[
        {
            img:'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt:'Proyecto1',
            descripcion:'DOGS API-',
            id:1
        },
        {
            img:'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt:'Proyecto2',
            descripcion:'BLOCKFLIX-',
            id:2
        },
        {
            img:'https://images.pexels.com/photos/11739092/pexels-photo-11739092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt:'Proyecto3',
            descripcion:'VINOTECA-',
            id:3
        }
    ]
    
    
    
     
           const slidesmap = slides.map(e=>( 
               
            <div className={style.contenedor}>
              <Link className={style.defecto} to ={'/'+e.id}>  <img src={e.img} alt={e.alt} /></Link>
                <div className={style.descripcion}>
                   <span >{e.descripcion}</span>
                    
                    </div>
            </div>
            ))
    export default slidesmap
    