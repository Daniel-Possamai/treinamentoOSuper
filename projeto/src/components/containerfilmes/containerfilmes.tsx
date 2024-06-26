import { HomeQuery_movies } from "../../types/HomeQuery";
import "./containerfilmes.scss"
import React, { useState, useEffect } from 'react';
 

interface propsContainerFilmes {
    filmes: HomeQuery_movies[]
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
                    <img src={ filme.image?.url } alt= {`Imagem da capa do filme ${filme.title}`} />
                </div>)} 
        </div>
        
    </div>
)
}