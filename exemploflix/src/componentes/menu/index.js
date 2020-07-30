import React from 'react'
import logo from '../../assets/img/logo.png'
import '../menu.css'
import ButtonLink from '../component/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/home">
                <img class="logo" src={logo} alt="nome" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu; // Essa ultimá linha serve para enviar a função ao aparecer o nome da função
