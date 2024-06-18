import "./btnplay.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';



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