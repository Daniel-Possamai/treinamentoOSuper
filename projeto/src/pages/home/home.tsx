
import "./home.scss"
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";
import Loaderall from "../../components/loaderall/loaderall";
import { action, forYouFilmes, trendingFilmes } from "../../utils/filmes";
import { Fragment, useEffect, useState } from "react";

export interface Filme{
    title: string
    year: number
    img: string
    description?: string
}


export default function Home(){

    const [ isLoad, setLoad ] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false); 
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);

    return  <div className={ 'containter-home' }>
        { isLoad ?  <Loaderall/> : <Fragment>
        <Destaquefilme filmes={ trendingFilmes }/>
        <Btnplay/>
        
        
        
        <div className={ 'line1' }></div>

        <Containerfilmes filmes={ trendingFilmes } title={ 'Trending' }/>
        <Containerfilmes filmes={ forYouFilmes } title={ 'For You' }/>
        <Containerfilmes filmes={ action } title={ 'Action' }/>
        </Fragment>}
        
    </div>
}
