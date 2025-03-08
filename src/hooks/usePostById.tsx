import { useEffect, useState } from "react";
import { IPost } from "./usePosts"

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const [error, setError] = useState<string>()
    

    useEffect(() => {
        if (isNaN(id)) {
            setError("Invalid post ID")
            return
        }

        if (!id){
            setError('id not found')
            return
        }
        async function getPost() {
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                const result = await response.json()
                if (result.status === 'error'){
                    setError(result.message)
                } else {
                    setPost(result.data)
                }
            } catch(error) {
                    const err = error instanceof Error ? error.message : undefined
                    setError(`${err}`)
            } finally {
                setIsLoading(false)
            }
            }
            getPost()
        }, [id])

    return {post: post, isLoading: isLoading, error: error}
}