
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import apidogs from '../../media/APIDOGS.mp4'

import style from './OnePageProject.module.css'
import BLOCKFLIX from '../../media/BLOCKFLIX.mp4'
import WINE from '../../media/WINES.mp4'
import Balance from '../../media/balance.mp4'
import Palidromo from '../../media/PALINDROMO.mp4'
const slides =[
    {
        img:'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt:'Proyecto1',
        descripcion:'DOGS API',
        id:1,
        video:apidogs,
        info: " Proyecto Individual(PI) realizado en el bootcamp Soy Henry! Es una Single Page Application(SPA) basada en un API de perros. La pagina cuenta con distintos tipos de filtrado y ordenamiento, carta de detalles, búsqueda, creación de nuevos personajes con un formulario controlado y mas. Las tecnologías que utilice fueron: REACT, REDUX, NODEJS, EXPRESSJS, POSTGRESQL, SEQUELIZE, CSS, JAVASCRIPT,HTML.",
        github:"https://github.com/Agustin2214/PI-Dogs-main",
        deploy:''

    },

    {
        img:'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt:'Proyecto2',
        descripcion:'BLOCKFLIX',
        id:2,
        video:BLOCKFLIX,
        info: "Mi primer proyecto creado, se trata de una SPA(Single page Application) en la cual se obtienen datos de una API de películas.Contiene detalle de cada película, un buscador debounce y un scroll infinito.En este proyecto utilice las siguiente tecnologías: REACT, JAVASCRIPT, CSS MODULE, HTML5. ",
        github:"https://github.com/Agustin2214/BLOCKFLIX",
        deploy:''
    },

    {
        img:'https://images.pexels.com/photos/11739092/pexels-photo-11739092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt:'Proyecto3',
        descripcion:'VINOTECA ECOMMERCE',
        id:3,
        video:WINE,
        info: "Proyecto final realizado para obtener la certificacion de FULLSTACK DEVELOPER del bootcamp Soy Henry!.Se trata de un E-COMMERCE de vinos con todas las funcionalidades que cuenta un proyecto de estas caracteristicas.En este proyecto utilice las siguiente tecnologías: REACT, REDUX, CSS, NODEJS, EXPRESSJS, MONGODB. ",
        github:"https://github.com/vinoteca-ecommerce/wineEcommerce",
        deploy:'https://wine-ecommercew.vercel.app/'
    },
    {
        img:'https://images.pexels.com/photos/6801681/pexels-photo-6801681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt:'Proyecto4',
        descripcion:'BALANCE ALKEMY',
        id:4,
        video:Balance,
        info: "Aplicación desarrollada para poder ingresar al desafio Alkemy como full stack. Es una aplicación para control y gestión de tus registros financieros, pudiendo ingresar o retirar dinero manteniendo así un control, se muestra solo las ultimas 10 opereciones y se registra el balance de las mismas y el historico.Realice esta app utilizando en el back end Node Js, Express, PostgreSQL, autenticación JWT y el front con React Js, Redux y React-Bootstrap.",
        github:"https://github.com/Agustin2214/ProjectoAlkemyFullStack",
        deploy:''

    },
    {
        img:'https://images.pexels.com/photos/4289107/pexels-photo-4289107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt:'Proyecto5',
        descripcion:'PALINDROMO',
        id:5,
        video:Palidromo,
        info: "Pequeño proyecto que integra un backend con realizado con Node y Express, y un fontend realizado con react y bootstrap.Se realiza una petecion a la API local enviandole una palabra por query para que esta nos responda con la misma palabra invertada y en caso de ser PALINDROMO nos infroma tambien. En este caso utilize este proyecto para practicar deploy de back en heroku y front en vercel.",
        github:"https://github.com/Agustin2214/CopyWrite",
        deploy:'https://copy-write.vercel.app/'

    }
]

export function OnePagePoyect() {

 let {id} = useParams()
 id = id - 1 
 let ultimo = 6
 let primero = 1
 let siguiente = `/proyecto/${id==ultimo-2?primero:id+2}`
 let anterior = `/proyecto/${id==primero-1?ultimo-1 :id}`


useEffect(() => {
    function toTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    toTop()
}, []);



 return (
    <>
<nav className={style.navBar}>


</nav>
<div className={style.btnsig}> 
<Link className={style.links} to={anterior}> <button className={style.btnsig1}>Anterior</button> </Link>
<Link to='/'><button className={style.btnsig1}>Home</button></Link>
<Link to={siguiente}><button className={style.btnsig1}>Siguiente</button></Link>

</div>
<div className={style.contenedordecontenedor}>
<div className={style.contenedorflecha}>
<Link to={anterior}><a href="#" className={style.arrowleft}></a></Link>
</div>
    <div className={style.contenedor}>
        
        
        <h1 className={style.title}>{slides[id].descripcion}</h1>
        <div className={style.lorem}>
        <p> {slides[id].info}




            
</p>
        </div>
        <div className={style.video}>
        <video className={style.videomp4} controls autoplay src={slides[id].video}></video>
        </div>

       <div className={style.github}>
       <a className={style.ref} href={slides[id].github}>GitHub <i className="fab fa-github github"></i></a>
       {slides[id].deploy? <a className={style.ref} href={slides[id].deploy}> Deploy <i className="fab fa-chrome chrome"></i> </a>: ''}
       </div>

    
    </div>
    <div className={style.contenedorflecha}>
    <Link to={siguiente}><a href="#" className={style.arrowright}></a></Link>
    </div>
    </div>
    <div className={style.footer2}>
        <p>Agustin Ibañez</p>
        <a className={style.linkimg} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/agustinibz/">
    <i className="fab fa-linkedin linkedin" ></i>
    </a>

    <a className={style.linkimg} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=3854447988&text=Me%20interesa%20saber%20mas%20sobre%20tu%20perfil">
    <i className="fab fa-whatsapp whatsapp"></i>
    </a>

    <a className={style.linkimg} rel="noreferrer" href="https://twitter.com/AgustinIbanez22" target="_blank">
    <i className="fab fa-twitter twitter"></i>
</a>
<p className={style.mail}>agustin-nibanez@gmail.com</p>
    </div>

</>
)
}
