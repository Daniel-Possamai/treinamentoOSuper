import './header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from '../nav/nav';
import Profile from '../profile/profile';
import { infoProfile } from '../../utils/filmes';

export interface Profileinf{
    nome: string
    img: string
}


export default function Header(){
    return <div className="header-containter">
        <MenuIcon className={ 'menuIcon hiddenDesk' } />
        <img src="./images/logotest.svg" alt="imagem da logo" />
        <Nav/>
        <Profile infos={ infoProfile }/>
        <AccountCircleIcon className={ 'profileIcon hiddenDesk' }/>
    </div>
}

