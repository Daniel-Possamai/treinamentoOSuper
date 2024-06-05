import "./containerfilmes.scss"
import { Filme } from "../../pages/home/home"

interface propsContainerFilmes {
    filmes: Filme[]
    title: string
}

export default function Containerfilmes(props: propsContainerFilmes){
    const { filmes, title } = props 
    return (<div className={ 'containerFilmes' }>
        <h2>{ title }</h2>
        <div className="organizadorFilmes">
            { filmes.slice(0,2).map((filme, index) => 
                <div key={index} className={ 'filmes' }>
                    <img src={ filme.img } alt= {`Imagem da capa do filme ${filme.title}`} />
                </div>)} 
        </div>
        
    </div>
)
}