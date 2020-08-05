import React from 'react'
import Menu from '../menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right:5%;
`;

function PageDefault({children}) {
    return (
        <>{/*Isto é uma tag de fragmento, poderiamos colocar <React.Fragment> */}
           <Menu />
                <Main>
                    {/*Aqui virá o conteûdo de todos os childrens*/}
                    {children}
                </Main>   
            <Footer /> 
        </>        
    )   
}
export default PageDefault;