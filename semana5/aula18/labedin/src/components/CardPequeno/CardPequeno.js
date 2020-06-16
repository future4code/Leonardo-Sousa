import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p className="nome-info">{ props.nomeInfo } 
                    <p className="normal">{ props.info }</p>
                </p> 
            </div>
        </div>
    )
}

export default CardPequeno;