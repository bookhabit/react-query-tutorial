import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors=(pageNumber)=>{
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedQueriesPage = ()=>{
    const [pageNumber,setPageNumber] = useState(1)
    const {isLoading,isError,error,data,isFetching}=useQuery(['colors',pageNumber],()=>fetchColors(pageNumber),
    {
        keepPreviousData:true,
    })
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

    return(
        <>
            <div>
                {data?.data.map((color)=>{
                    return(
                        <div key={color.id}>
                            <h2>
                                {color.id} - {color.label}
                            </h2>
                        </div>
                    )
                })}
                <button onClick={()=>setPageNumber((prev)=>prev-1)} disabled={pageNumber===1}>이전</button>
                <button onClick={()=>setPageNumber((prev)=>prev+1)} disabled={pageNumber===4}>다음</button>
            </div>
            {isFetching&&'Loading'}
        </>
    )
}