import styled from 'styled-components';
import React from 'react';

const Sobre = () => {
    return(
        <SSobreContainer>
            <h2>Sobre nós</h2>
            <p>Projeto realizado para o curso de Desenvolvedor Full Stack do Instituto Infnet</p>
            <br/>
            <p>Alunos:</p>
            <p>Felipe Siqueira - Back-End</p>
            <p>Suelen Batista - Front-End</p>
        </SSobreContainer>
    );
}
export default Sobre;

const SSobreContainer = styled.div`
    background-color: #ccc;
    text-align: center;
    margin: 30px;
    padding: 30px;
`