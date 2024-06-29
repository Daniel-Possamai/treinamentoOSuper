
import "./home.scss"
import Btnplay from "../../components/btnplay/btnplay";
import Containerfilmes from "../../components/containerfilmes/containerfilmes";
import Destaquefilme from "../../components/destaquefilme/destaquefilme";
import Loaderall from "../../components/loaderall/loaderall";
import { useQuery } from "@apollo/client";
import { homeQuery } from "./queries";
import { HomeQuery } from "../../types/HomeQuery";




export default function Home(){

    const { data, loading, error } = useQuery<HomeQuery>(homeQuery)
    console.log(data)

    if (loading || !data || error) return <Loaderall/>

    const movies = data.movies
    console.log(movies)    
    
    

    return  <div className={ 'containter-home' }>

        <Destaquefilme filmes={ movies }/>
        <Btnplay/>
        
        
        
        <div className={ 'line1' }></div>

        <Containerfilmes filmes={ movies } title={ 'Trending' }/>
        <Containerfilmes filmes={ movies } title={ 'For You' }/>
        <Containerfilmes filmes={ movies } title={ 'Action' }/>
        
    </div>
}
