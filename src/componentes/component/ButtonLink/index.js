import React from 'react'

function ButtonLink(props) {
        console.log(props); //Quando entramos no console na área de navegador irá aparecer a relaçao de pai e filho entre as clases, graças a esse comando.    
        return (
                //Quando usamos o compando props, signific que o valor daquela váriavel irá ser passado pela página que estiver chamando a função.
                <a href={(props.href)} className={props.className} >
                        {props.children} 
                </a>
                //Aqui usamos o prps.children para colocar o javascript dentro do html dentro de outro javascript.
        );
}
export default ButtonLink;