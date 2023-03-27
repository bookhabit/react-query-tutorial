import { useAddSuperHeroData, useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";

export const RQSuperHeroesPage = () => {
    const [name,setName] = useState('')
    const [alterEgo,setAlterEgo] = useState('')
    const onSuccess = (data)=>{
        console.log('Perform side effect after data fetching',data)
    }
    const onError = (error)=>{
        console.log('Perform side effect after encountering error',error)
    }
    const {isLoading,data,isError,error,isFetching,refetch} = useSuperHeroesData(onSuccess,onError)
    
    const {mutate:addHero} =useAddSuperHeroData()

    // 폼 제출 함수
    const handleAddHeroClick = ()=>{
        console.log({name,alterEgo})
        const hero = {name,alterEgo}
        addHero(hero)
    }

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
                <div className="form">
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" value={alterEgo}onChange={(e)=>setAlterEgo(e.target.value)} />
                    <button onClick={handleAddHeroClick}>Add Hero</button>
                </div>
                <button onClick={refetch}>Fetch heroes</button>
                {data?.data.map(hero=>{
                    return <div key={hero.id}>
                        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                    </div>
                })}
                {/* {
                    data.map(heroName=>{
                        return <div key={heroName}>{heroName}</div>
                    })
                } */}
            </div>
        </>
    );
};