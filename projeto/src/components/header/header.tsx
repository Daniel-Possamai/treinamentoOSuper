import './header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Header(){
    return <div className="header-containter">
        <MenuIcon className={ 'menuIcon' } />
        <img src="./images/logotest.svg" alt="imagem da logo" />
        <AccountCircleIcon className={ 'profileIcon' }/>
    </div>
}

