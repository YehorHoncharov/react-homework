import { useContext } from "react";
import { postContext } from "../../context/cartContext";

export function FavouritePosts(){
    const {favouritePosts, deletePost} = useContext(postContext)
    return (<div>
        {favouritePosts.map(post =>{
            return <div>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <img src={post.image} alt="" />
                <button onClick={()=>{deletePost(post.id)}}>Delete</button>
            </div>
        })}
    </div>)
}