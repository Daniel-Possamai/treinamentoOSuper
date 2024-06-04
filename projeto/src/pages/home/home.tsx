import React from "react"
import "./home.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Btnplay from "../../components/btnplay/btnplay";


export default function Home(){
    return  <div className={ 'containter-home' }>
        <img className={ 'imgDestaque' } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTgrMzKEsApaDEI3IUlhVrjp-1PBHEm3WJA&s" alt="imagem da capa do filme dos vingadores" />
        <div className={ 'infoFilme' }>
            <h3>Avengers: Infinity War</h3>
            <p>2018</p>
        </div>
        <div className={ 'btnsFilme' }>
            <StarRoundedIcon className={ 'estrela' }/>
            <FavoriteIcon className={ 'coracao' }/>
            <ShareRoundedIcon className={ 'compartilhar' } />
        </div>
        <Btnplay/>
        
        <div className={ 'line1' }></div>

        <div className={ 'containerFilmes' }>
            <h2>Trending</h2>
            <div className={ 'filmes' }>
                <img src="./images/fullMetalJacket.svg" alt="imagem da capa do filme Inside out" />
                <img src="./images/insideOut.svg" alt="imagem da capa do filme Full metal jacket" />
            </div>
        </div>

        <div className="containerFilmes">
            <h2>For You</h2>    
            <div className="filmes">
                <img src="./images/qualche.svg" alt="imagem da capa do filme Inside out" />
                <img src="./images/upon.svg" alt="imagem da capa do filme Full metal jacket" />
            </div>
        </div>

        <div className="containerFilmes">
            <h2>Action</h2>
            <div className="filmes">
                <img src="./images/japa.svg" alt="imagem da capa do filme Inside out" />
                <img src="./images/before.svg" alt="imagem da capa do filme Full metal jacket" />
            </div>
        </div>
        
    </div>
}
