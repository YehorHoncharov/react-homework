import { useEffect, useState } from "react";

export interface IPostWithComment {
    id: number;
    name: string;
    description: string;
    src: string;
    author: string;
    date: string,
    comment: string;
}



export function usePost(){
    const [posts, setPosts] = useState<IPostWithComment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getProducts(){
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                const result = await response.json()
                if (result.status === 'error') {
                    setError(result.message)
                } else {
                    setPosts(result.data)
                }
            }
            catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally{
                setIsLoading(false)
            }
            
        }
        getProducts()
        
    },[id])
    return {posts: posts, isLoading: isLoading, error: error}
}