import './header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Nav from '../nav/nav';


export default function Header(){
    return <div className="header-containter">
        <MenuIcon className={ 'menuIcon hiddenDesk' } />
        <img src="./images/logotest.svg" alt="imagem da logo" />
        <Nav/>
        <AccountCircleIcon className={ 'profileIcon' }/>
    </div>
}

