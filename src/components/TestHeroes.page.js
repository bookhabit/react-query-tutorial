import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const TestHeroesPage = () => {
    const onSuccess = (data)=>{
        console.log('Perform side effect after data fetching',data)
    }
    const onError = (error)=>{
        console.log('Perform side effect after encountering error',error)
    }
    const enabledState = false;

    const {isLoading,data,isError,error,isFetching,refetch} = useSuperHeroesData(onSuccess,onError,enabledState)
    

    if(isLoading||isFetching){
        return <h2>로딩 중...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div>
                <h2>Test Heroes Page</h2>
                <button onClick={refetch}>Fetch heroes</button>
                {data?
                    data.map(heroName=>{
                        return <div key={heroName}>{heroName}</div>
                    }):null
                }
            </div>
        </>
    );
};