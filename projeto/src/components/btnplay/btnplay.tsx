import { Filme } from "../../pages/home/home";
import "./btnplay.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface propsFilmeDestacado{
    filmes: Filme[]
}


export default function Btnplay(props: propsFilmeDestacado){

    // const { filme } = props

    const handClick = () => {
        window.open('https://youtube.com', '_blank');
    }

    return <div className={ 'btnPlay' } onClick={ handClick }>
        <PlayArrowIcon/> 
        <p>Play</p>
    </div>
}