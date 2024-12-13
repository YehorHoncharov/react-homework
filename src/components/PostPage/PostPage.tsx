import { useParams } from "react-router-dom"
import "./PostPage.css"
import { useEffect, useState } from "react";

export function PostPage(){
    const params = useParams();
    const [post, setPost ] = useState(
        {
        title: '',
        id: 0,
        cover_image: '',
        tags: [],
        body_markdown: ''
        })

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(`https://dev.to/api/articles/${params.id}`)
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`)
                }
                const post = await response.json()
                setPost(post)
            } catch (error) {
                console.error('Ошибка при загрузке поста:', error)
            }
        }
        getPost()
    }, [params.id])


    return (
        <div className="postpage">
           <h1>{post.title}</h1>
            {post.cover_image && <img src={post.cover_image} alt={post.title} />}
            <p>
                <strong>Теги:</strong> {post.tags.join(',')}
            </p>
            <article dangerouslySetInnerHTML={{ __html: post.body_markdown }} />
        </div>
    )
}