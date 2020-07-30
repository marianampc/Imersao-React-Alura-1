import React from 'react'

function ButtonLink() {
    return (
        //Quando usamos o compando props, signific que o valor daquela váriavel irá ser passado pela página que estiver chamando a função.
        <a className={this.props.className} href={this.props.href}>
                Novo Vídeo
        </a>
        )
}
export default ButtonLink;