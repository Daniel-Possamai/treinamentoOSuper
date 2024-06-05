import "./nav.scss"

export default function Nav(){
    return <div className={'containerNav hiddenMob'}>
        <nav>
            <ul>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Documentários</a></li>
            </ul>
        </nav>
    </div>
}