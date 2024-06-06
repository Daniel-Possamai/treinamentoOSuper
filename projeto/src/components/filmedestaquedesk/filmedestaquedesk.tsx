import { Filme } from "../../pages/home/home"
import "./filmedestaquedesk.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

interface propsFilmeDestacado{
    filme: Filme[]
}

export default function Filmedestaquedesk(props: propsFilmeDestacado){
    const { filme } = props
    return (
        <div className="containerFilmeestaquedesk">
            { filme.map((filme, index) => 
            <div key={index} className="filmeDestak">
                <div className="imgDestak">
                    <img src={ filme.img } alt={ `Imagem de capa do filme ${filme.title}` } />
                    <div className={ 'btnsFilme' }>
                        <StarRoundedIcon className={ 'estrela' }/>
                        <FavoriteIcon className={ 'coracao' }/>
                        <ShareRoundedIcon className={ 'compartilhar' } />
                    </div>
                </div>
                <div className="infoEPlay">
                    <h3> { filme.title } </h3>
                    <p className={ 'ano' }> { filme.year } </p>
                    <p className={ 'descricao' }> { filme.description } </p>
                    <div className={ 'btnPlayDesk' }>
                       <PlayArrowIcon/> 
                        <p>Play</p>
                    </div>
                </div>
                <div className="rating">
                    <div className="containerStar">
                        <div className="stars">
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star' }/> 
                        </div>
                        <p>Direção</p>
                    </div>
                    <div className="containerStar">
                        <div className="stars">
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star' }/>
                            <StarRateRoundedIcon className={ 'star' }/>
                        </div>
                        <p>Dublagem</p>
                    </div>
                    <div className="containerStar">
                        <div className="stars">
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                            <StarRateRoundedIcon className={ 'star active' }/>
                        </div>
                        <p>Elenco</p>
                    </div>
                </div>
            </div> )}
        </div>
    )
}