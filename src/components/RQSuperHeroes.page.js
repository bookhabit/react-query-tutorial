import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
    const onSuccess = (data)=>{
        console.log('Perform side effect after data fetching',data)
    }
    const onError = (error)=>{
        console.log('Perform side effect after encountering error',error)
    }

    const {isLoading,data,isError,error,isFetching,refetch} = useSuperHeroesData(onSuccess,onError)
    

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
                {/* {data?.data.map(hero=>{
                    return <div key={hero.name}>{hero.name}</div>
                })} */}
                {
                    data.map(heroName=>{
                        return <div key={heroName}>{heroName}</div>
                    })
                }
            </div>
        </>
    );
};