import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img class="logo" src={logo} alt="nome" />
            </Link>
            <Button as={Link}  to="/cadastro/video" className="ButtonLink"> {/*Esse as="a" está falando que o componente butão está funcionando como um link*/}
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu; // Essa ultimá linha serve para enviar a função ao aparecer o nome da função
