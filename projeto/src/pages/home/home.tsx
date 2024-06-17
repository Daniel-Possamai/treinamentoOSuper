
import "./home.scss"
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";
import Loaderall from "../../components/loaderall/loaderall";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Language } from "@mui/icons-material";

const API_KEY = 'bc46ceb0eb6abe76c6ec4ba9bb8d9103'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface Filme {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview?: string;
    trailer?: string;
}



export default function Home(){
    const [FilmeEmDestaque, setFilmeEmDestaque] = useState<Filme[]>([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [ isLoad, setLoad ] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoad(true)
            try { 
                const filmeEmDestaqueResposta = await axios.get(`${BASE_URL}/movie/popular`, { params: { api_key: API_KEY, language: 'pt-BR' } });
                if (filmeEmDestaqueResposta.data.results.length > 0) {
                    const filmeAleatorio = filmeEmDestaqueResposta.data.results[Math.floor(Math.random() * filmeEmDestaqueResposta.data.results.length)];
                    
                    const trailerResponse = await axios.get(`${BASE_URL}/movie/${filmeAleatorio.id}/videos`, { params: { api_key: API_KEY, language: 'pt-BR' } });
                    const trailerData = trailerResponse.data.results.find((video: { type: string; }) => video.type === 'Trailer');
                    if (trailerData) {
                        setTrailerUrl(`https://www.youtube.com/watch?v=${trailerData.key}`);
                    }

                    setFilmeEmDestaque([filmeAleatorio]);
                }

                const trendingMoviesResposta = await axios.get(`${BASE_URL}/movie/popular`, { params: { api_key: API_KEY } });
                setTrendingMovies(trendingMoviesResposta.data.results);

                const comedyMoviesResposta = await axios.get(`${BASE_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: '35'
                    }
                });
                setComedyMovies(comedyMoviesResposta.data.results);

                const dramaMoviesResposta = await axios.get(`${BASE_URL}/discover/movie`, {
                    params: {
                        api_key: API_KEY,
                        with_genres: '12',
                    }
                })
                setDramaMovies(dramaMoviesResposta.data.results)



                setTimeout(() => {
                    setLoad(false);
                }, 1500);
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
        <Btnplay filmes= { FilmeEmDestaque }/>

        
        
        
        <div className={ 'line1' }></div>

        <Containerfilmes filmes={ trendingMovies } title={ 'Trending' }/>
        <Containerfilmes filmes={ dramaMovies } title={ 'Drama' }/>
        <Containerfilmes filmes={ comedyMovies } title={ 'Comédia' }/>
        </Fragment>}
        
    </div>
}
