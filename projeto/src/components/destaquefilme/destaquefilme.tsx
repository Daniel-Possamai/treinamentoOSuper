import "./destaquefilme.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function Destaquefilme(){
    return <div className={ 'containerDestaqueFilme' }>
        <img className={ 'imgDestaque' } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTgrMzKEsApaDEI3IUlhVrjp-1PBHEm3WJA&s" alt="imagem da capa do filme dos vingadores" />
        <div className={ 'infoFilme' }>
            <h3>Avengers: Infinity War</h3>
            <p>2018</p>
        </div>
        <div className={ 'btnsFilme' }>
            <StarRoundedIcon className={ 'estrela' }/>
            <FavoriteIcon className={ 'coracao' }/>
            <ShareRoundedIcon className={ 'compartilhar' } />
        </div>
    </div>
}