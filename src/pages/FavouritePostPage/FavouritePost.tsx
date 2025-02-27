// нет смысла так делать есть useFavPostContext
import { useContext } from "react";
import { postContext } from "../../context/cartContext";

export function FavouritePosts(){
    // 
    const {favouritePosts, deletePost} = useContext(postContext)
    // const {favouritePosts, deletePost} = useFavPostContext()
    return (
        <div>
            {/* Стилей */}
        {favouritePosts.map(post =>{
            return <div>
                <h1>{post.name}</h1>
                <p>{post.description}</p>
                <img src={post.src} alt="" />
                <button onClick={()=>{deletePost(post.id)}}>Delete</button>
            </div>
        })}
    </div>)
}