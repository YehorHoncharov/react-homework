import { useEffect, useState } from 'react' 

export interface IPost {
    id: number;
    name: string;
    description: string;
    src: string;
    author: string;
    date: string,
    // ICategory тут вместо string
    category?: string;
}

// usePosts
export function usePost(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        // продукты
        async function getProducts(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/post/all')
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
        
    },[])
    return {posts: posts, isLoading: isLoading, error: error}
}