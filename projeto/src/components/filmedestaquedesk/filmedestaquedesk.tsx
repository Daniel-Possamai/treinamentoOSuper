import { Filme } from "../../pages/home/home"
import "./filmedestaquedesk.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

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
            </div> )}
        </div>
    )
}