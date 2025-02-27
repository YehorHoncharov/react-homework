import { useEffect, useState } from "react";
import { IPost } from "./usePosts"

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    // default - false
    const [isLoading, setIsLoading] = useState(true)
    // состояние error nety
    

    useEffect(() => {
        // if на id 
        // NaN -> number 
        // Boolean(NaN) -> false
        // if isNaN()
        // if (!id) return
        
        
        async function getPost() {
        // try catch finally
        // setLoading(true)
        // api старая
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
            setIsLoading(false)
        }
        getPost()
    }, [id])

    return {post: post, isLoading: isLoading}
}