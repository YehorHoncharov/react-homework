import { useEffect, useState } from "react"

export interface ICategory {
    id: number
    name: string
}

export function usePost(){
    const [categories, setCategories] = useState<ICategory[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getProducts(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/category/all')
                const result = await response.json()
                if (result.status === 'error') {
                    setError(result.message)
                } else {
                    setCategories(result.data)
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
    return {categories: categories, isLoading: isLoading, error: error}
}