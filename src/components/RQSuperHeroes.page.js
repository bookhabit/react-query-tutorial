import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = ()=>{
    return axios.get("http://localhost:4000/superheroes")
}

export const RQSuperHeroesPage = () => {
    const {isLoading,data,isError,error} = useQuery('super-heroes',fetchSuperHeroes)
    if(isLoading){
        return <h2>로딩 중...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div>
                <h2>RQSuper Heroes Page</h2>
                {data?.data.map(hero=>{
                    return <div key={hero.name}>{hero.name}</div>
                })}
            </div>
        </>
    );
};