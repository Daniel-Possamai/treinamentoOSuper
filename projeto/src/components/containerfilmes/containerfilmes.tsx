import "./containerfilmes.scss"
import { Filme } from "../../pages/home/home"
import React, { useState, useEffect } from 'react';
 

interface propsContainerFilmes {
    filmes: Filme[]
    title: string
}

export default function Containerfilmes(props: propsContainerFilmes){
    const { filmes, title } = props 
    const [ numFilmes, setNumFilmes ] = useState(2)

    useEffect(() => {
        function handleResize(){
            if (window.matchMedia("(min-width: 1440px)").matches){
                setNumFilmes(6)

            }else if (window.matchMedia("(min-width: 700px)").matches){
                setNumFilmes(4)

            }else{
                setNumFilmes(2)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    })



    return (<div className={ 'containerFilmes' }>
        <h2>{ title }</h2>
        <div className="organizadorFilmes">
            { filmes.slice(0, numFilmes).map((filme, index) => 
                <div key={index} className={ 'filmes' }>
                    <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={`Imagem da capa do filme ${filme.title}`} />
                </div>)} 
        </div>
        
    </div>
)
}