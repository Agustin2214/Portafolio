import React from "react"
import style from "./Footer1.module.css"
import typescript from '../media/Iconos/typescript.svg'

export function Footer1() {
    return (
        <footer className={style.footer}>
            <div className={style.info}>
                <h1>Agustin Ibañez</h1>
                <p>Ciudad de Buenos Aires - Argentina</p>
                 </div>
            <div className={style.contacto}>
                <h3>Contactame</h3>
                <a href={typescript} download="Cv_AgustinIbañez_WEBDEVELOPER">
<p> Descargar CV</p>
</a>
            </div>
          
            <div className={style.links}>
<a className={style.linkimg} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/agustinibz/">
    <i className="fab fa-linkedin linkedin" ></i>
    </a>

    <a className={style.linkimg} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=3854447988&text=Me%20interesa%20saber%20mas%20sobre%20tu%20perfil">
    <i className="fab fa-whatsapp whatsapp"></i>
    </a>

    <a className={style.linkimg} rel="noreferrer" href="https://twitter.com/AgustinIbanez22" target="_blank">
    <i className="fab fa-twitter twitter"></i>
</a>
            </div>
        </footer>
    )
}
