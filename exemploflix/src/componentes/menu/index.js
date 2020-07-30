import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/home">
                <img class="logo" src={logo} alt="nome" />
            </a>
            <Button as="a"  href="/" className="ButtonLink"> {/*Esse as="a" está falando que o componente butão está funcionando como um link*/}
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu; // Essa ultimá linha serve para enviar a função ao aparecer o nome da função
