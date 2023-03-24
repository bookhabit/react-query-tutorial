import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = ()=>{
    return axios.get("http://localhost:4000/superheroes")
}

export const RQSuperHeroesPage = () => {

    const {isLoading,data,isError,error,isFetching,refetch} = useQuery('super-heroes',fetchSuperHeroes,
    {
        enabled:false,
    })
    console.log(isLoading,isFetching)

    if(isLoading||isFetching){
        return <h2>로딩 중...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div>
                <h2>RQSuper Heroes Page</h2>
                <button onClick={refetch}>Fetch heroes</button>
                {data?.data.map(hero=>{
                    return <div key={hero.name}>{hero.name}</div>
                })}
            </div>
        </>
    );
};