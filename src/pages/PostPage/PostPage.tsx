import { useParams } from "react-router-dom"
import "./PostPage.css"
import { usePostById } from "../../hooks/usePostById";
import { useTitle } from "../../hooks/useTitle";

export function PostPage(){
    const params = useParams();
    const { post } = usePostById(Number(params.id)) 
    const { title } = useTitle()

    
    // if (!post) {
    //     return <div>Пост не найден</div>;
    // }
    console.log("post:", post)
    console.log("params.id:", params.id)
    console.log("Number(params.id):", Number(params.id))

    return (
            <div className="postpage">
                <h1>{params.id}</h1>
                <h1>{title}</h1>
                <img src={post?.cover_image} alt={title} />
                <p>
                    <strong>Теги:</strong> {post?.tags?.join(',')}
                </p>
                <article dangerouslySetInnerHTML={{ __html: post?.body_markdown || " "}} />
            </div>
        )

}