import React from "react";
import { Filme } from "../../pages/home/home";
import "./btnplay.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


interface trailerFilme{
    trailer: string
}


export default function Btnplay( props: trailerFilme ){

    const { trailer } = props

    
    const handleClick = () => {
        window.open(trailer, '_blank');
    }


    return <div className={ 'btnPlay' } onClick={ handleClick }>
        <PlayArrowIcon/> 
        <p>Play Trailer</p>
    </div>
}