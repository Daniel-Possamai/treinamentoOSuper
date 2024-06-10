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

    return (
        <div className={ 'containerDestaqueFilme' }>
            { filmes.map((filmes, index) => 
            <div className="filmeDestacado" key={index}>
                    <img className={ 'imgDestaque' } src= { filmes.img } alt= {`Imagem de capa do filme ${ filmes.title }`} />
                <div className={ 'infoFilme' }>
                    <h3>{ filmes.title }</h3>
                    <p>{ filmes.year }</p>
                </div>
            </div> )}
            
            <div className={ 'btnsFilme' }>
                <StarRoundedIcon className={ 'estrela' }/>
                <FavoriteIcon className={ 'coracao' }/>
                <ShareRoundedIcon className={ 'compartilhar' } />
            </div>

            {/* Desktop Version */}

            
            <div className="containerFilmeestaquedesk">
                {filmes.map((filme, index) =>
                    <div key={index} className="filmeDestak">
                        <div className="imgDestak">
                            <img src={filme.img} alt={`Imagem de capa do filme ${filme.title}`} />
                            <div className={'btnsFilme'}>
                                <StarRoundedIcon className={'estrela'} />
                                <FavoriteIcon className={'coracao'} />
                                <ShareRoundedIcon className={'compartilhar'} />
                            </div>
                        </div>
                        <div className="infoEPlay">
                            <h3> {filme.title} </h3>
                            <p className={'ano'}> {filme.year} </p>
                            <p className={'descricao'}> {filme.description} </p>
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
                    </div>)}
            </div>
            

        </div>
)
}