import "./destaquefilme.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { HomeQuery_movies } from "../../types/HomeQuery";


interface propsFilmeDestacado{
    filmes: HomeQuery_movies[]
}

export default function Destaquefilme(props: propsFilmeDestacado){

    const { filmes } = props
    const filmeAleatorio = filmes[Math.floor(Math.random() * filmes.length)]

    return (
        <div className={ 'containerDestaqueFilme' }>
            <div className="filmeDestacado">
                    <img className={ 'imgDestaque' } src= { filmeAleatorio.image?.url} alt= {`Imagem de capa do filme ${ filmeAleatorio.title }`} />
                <div className={ 'infoFilme' }>
                    <h3>{ filmeAleatorio.title }</h3>
                    <p>{ filmeAleatorio.year }</p>
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
                            <img src={filmeAleatorio.image?.url} alt={`Imagem de capa do filme ${filmeAleatorio.title}`} />
                            <div className={'btnsFilme'}>
                                <StarRoundedIcon className={'estrela'} />
                                <FavoriteIcon className={'coracao'} />
                                <ShareRoundedIcon className={'compartilhar'} />
                            </div>
                        </div>
                        <div className="infoEPlay">
                            <h3> {filmeAleatorio.title} </h3>
                            <p className={'ano'}> {filmeAleatorio.year} </p>
                            <p className={'descricao'}> {filmeAleatorio.description} </p>
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