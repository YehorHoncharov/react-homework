import { useEffect, useState } from 'react' 

export interface IPost {
    category?: string;
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    cover_image?: string;
    tags?: string[];
    body_markdown?: string;
}


export function usePost(){
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() =>{
        async function getPost(){
            const response = await fetch('https://fakestoreapi.com/products')
            const posts = await response.json()
            setPosts(posts)
        }
        getPost()

    },[])
    return {posts:posts}
}