import "./loaderall.scss"
import { TailSpin } from "react-loader-spinner"

export default function Loaderall(){
    return (
        <div className="spinner">
            <div>
                <TailSpin color="currentColor" width="100%" height="100%"/>
            </div>
        </div>
    )   
}