import "./destaquefilme.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Filme } from "../../pages/home/home";


interface propsFilmeDestacado{
    filmes: Filme[]
}

export default function Destaquefilme(props: propsFilmeDestacado){
    const { filmes } = props
    if (!filmes || filmes.length === 0) return null;

    const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)];

    return (
        <div className={ 'containerDestaqueFilme' }>
            <div className="filmeDestacado">
                    <img className={ 'imgDestaque' } src={`https://image.tmdb.org/t/p/original${filmeAleatorio.poster_path}`} alt={`Imagem de capa do filme ${filmeAleatorio.title}`} />
                <div className={ 'infoFilme' }>
                    <h3>{ filmeAleatorio.title }</h3>
                    <p>{ new Date(filmeAleatorio.release_date).getFullYear() }</p>
                </div>
            </div>
            
            <div className={ 'btnsFilme' }>
                <StarRoundedIcon className={ 'estrela' }/>
                <FavoriteIcon className={ 'coracao' }/>
                <ShareRoundedIcon className={ 'compartilhar' } />
            </div>

            {/* Desktop Version */}

            
            <div className="containerFilmeestaquedesk">
                    <div className="filmeDestak">
                        <div className="imgDestak">
                            <img src={`https://image.tmdb.org/t/p/original${filmeAleatorio.poster_path}`} alt={`Imagem de capa do filme ${filmeAleatorio.title}`} />
                            <div className={'btnsFilme'}>
                                <StarRoundedIcon className={'estrela'} />
                                <FavoriteIcon className={'coracao'} />
                                <ShareRoundedIcon className={'compartilhar'} />
                            </div>
                        </div>
                        <div className="infoEPlay">
                            <h3> {filmeAleatorio.title} </h3>
                            <p className={'ano'}> { new Date(filmeAleatorio.release_date).getFullYear() } </p>
                            <p className={'descricao'}> {filmeAleatorio.overview} </p>
                            <div className={'btnPlayDesk'}>
                                <PlayArrowIcon />
                                <p>Play</p>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="containerStar">
                                <div className="stars">
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star'} />
                                </div>
                                <p>Direção</p>
                            </div>
                            <div className="containerStar">
                                <div className="stars">
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star'} />
                                    <StarRateRoundedIcon className={'star'} />
                                </div>
                                <p>Dublagem</p>
                            </div>
                            <div className="containerStar">
                                <div className="stars">
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                    <StarRateRoundedIcon className={'star active'} />
                                </div>
                                <p>Elenco</p>
                            </div>
                        </div>
                    </div>
            </div>
            

        </div>
)
}