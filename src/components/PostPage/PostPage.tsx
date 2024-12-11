import { useParams } from "react-router-dom"
import "./PostPage.css"

export function PostPage(){
    const params = useParams();
    return (
        <div className="postpageid">
            <p>post id: {params.id}</p>
        </div>
    )
}