import { useState } from "react";
import { useFavPostContext } from "../../context/cartContext";
import { IPost } from "../../hooks/usePosts";


export function FavButton(props: IPost){
    let [likes, setLikes] = useState(0);
    const {favouritePosts, addFavPost, deletePost, isPostLiked} = useFavPostContext()

    function handleLike(){
        if (isPostLiked(props.id)){
            setLikes(likes-1);
        deletePost(props.id);
            return;
        }
        addFavPost(props);
        setLikes(likes+1);
    }
    console.log(favouritePosts);
    
    return (
        <div className="button-box">
            <button onClick={handleLike}>Like</button>
            <p>{likes}</p>
        </div>
    )
}