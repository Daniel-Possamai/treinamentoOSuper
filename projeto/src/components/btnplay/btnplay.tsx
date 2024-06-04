import "./btnplay.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Btnplay(){
    return <div className={ 'btnPlay' }>
        <PlayArrowIcon/> 
        <p>Play</p>
    </div>
}