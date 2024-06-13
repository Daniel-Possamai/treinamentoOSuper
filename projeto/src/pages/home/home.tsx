
import "./home.scss"
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";
import Loaderall from "../../components/loaderall/loaderall";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const API_KEY = 'bc46ceb0eb6abe76c6ec4ba9bb8d9103'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface Filme {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview?: string;
}



export default function Home(){
    const [FilmeEmDestaque, setFilmeEmDestaque] = useState<Filme[]>([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [forYouMovies, setForYouMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [ isLoad, setLoad ] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoad(true)
            try {
                // Supondo que você queira pegar um filme popular aleatório
                const filmeEmDestaqueResposta = await axios.get(`${BASE_URL}/movie/popular`, { params: { api_key: API_KEY } });
                if (filmeEmDestaqueResposta.data.results.length > 0) {
                    const filmeAleatorio = filmeEmDestaqueResposta.data.results[Math.floor(Math.random() * filmeEmDestaqueResposta.data.results.length)];
                    setFilmeEmDestaque([filmeAleatorio]);
                }
                setTimeout(() => {
                    setLoad(false);
                }, 2000);
            } catch (error) {
                console.error("Erro ao buscar filmes", error);
                setLoad(false);
            }
        };
    
        fetchMovies();
    }, []);

    return  <div className={ 'containter-home' }>
        { isLoad ?  <Loaderall/> : <Fragment>
        <Destaquefilme filmes={ FilmeEmDestaque }/>
        <Btnplay/>
        
        
        
        <div className={ 'line1' }></div>

        {/* <Containerfilmes filmes={ trendingFilmes } title={ 'Trending' }/>
        <Containerfilmes filmes={ forYouFilmes } title={ 'For You' }/>
        <Containerfilmes filmes={ action } title={ 'Action' }/> */}
        </Fragment>}
        
    </div>
}
