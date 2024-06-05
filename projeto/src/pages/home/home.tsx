
import "./home.scss"
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";
import { action, destaqueFilme, forYouFilmes, trendingFilmes } from "../../utils/filmes";

export interface Filme{
    title: string
    year: number
    img: string
}


export default function Home(){
    return  <div className={ 'containter-home' }>
        <Destaquefilme filmes={ destaqueFilme }/>
        <Btnplay/>
        
        <div className={ 'line1' }></div>

        <Containerfilmes filmes={ trendingFilmes } title={ 'Trending' }/>
        <Containerfilmes filmes={ forYouFilmes } title={ 'For You' }/>
        <Containerfilmes filmes={ action } title={ 'Action' }/>

    </div>
}
