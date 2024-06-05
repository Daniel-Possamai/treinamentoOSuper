import "./destaquefilme.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
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
        </div>
)
}