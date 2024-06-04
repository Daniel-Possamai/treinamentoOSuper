import React from "react"
import "./home.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";


export default function Home(){
    return  <div className={ 'containter-home' }>
        <Destaquefilme/>
        <Btnplay/>
        
        <div className={ 'line1' }></div>

        <Containerfilmes/>

    </div>
}
