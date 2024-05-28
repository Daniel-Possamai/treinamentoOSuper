import React from "react"
import "./home.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Home(){
    return  <div className="containter-home">
        <img className="imgDestaque" src="./images/avengersCapa.svg" alt="imagem da capa do filme dos vingadores" />
        <div className="infoFilme">
            <h3>Avengers: Infinity War</h3>
            <p>2018</p>
        </div>
        
    </div>
}
