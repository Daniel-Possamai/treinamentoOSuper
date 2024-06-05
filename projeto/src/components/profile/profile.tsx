import { Profileinf } from "../header/header"
import "./profile.scss"

interface infosProfile {
    infos: Profileinf[]
}  
export default function Profile(props: infosProfile){
    const { infos } = props
    return (
        <div className="containerProfile">
            { infos.map((inf, index) => <div key={index} className="imgDePerfil">
                <p> { inf.nome } </p>
                <img src={inf.img} alt={ `Imagem de perfil do ${inf.nome}` } />
            </div> )}
            
        </div>
    )
}