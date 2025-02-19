import { useEffect, useState } from 'react' 

export interface IPost {
    id: number;
    name: string;
    description: string;
    src: string;
    author: string;
    date: string
}

// {
//     "status": "success",
//     "data": [
//       {
//         "id": 1,
//         "name": "New Post",
//         "description": "desc",
//         "src": "https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg",
//         "author": "Author",
//         "date": "14:30"
//       },
//       {
//         "id": 2,
//         "name": "New Post",
//         "description": "desc",
//         "src": "https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg",
//         "author": "Author",
//         "date": "14:30"
//       },
//       {
//         "id": 3,
//         "name": "New Post",
//         "description": "desc",
//         "src": "https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg",
//         "author": "Author",
//         "date": "14:30"
//       },
//       {
//         "id": 4,
//         "name": "New Post",
//         "description": "desc",
//         "src": "https://icf.listex.info/med/fc8729f1-8c87-5282-e6b2-70a8dc819984.jpg",
//         "author": "Author",
//         "date": "14:30"
//       }
//     ]
//   }


export function usePost(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
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