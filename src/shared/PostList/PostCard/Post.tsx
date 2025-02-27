import { useContext, useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { postContext } from "../../../context/cartContext";
import { IPost } from "../../../hooks/usePosts";
import { FavButton } from "../../FavouriteButton/FavouriteButton";

// interface IPostProps {
//   id: number;
//   title: string;
//   description: string;
//   img: string;
//   author: string;
// }

export function Post(props: IPost) {
    // не используется
  let [like, setLike] = useState(0);
  const {favouritePosts, addFavPost, deletePost, isPostLiked} = useContext(postContext);

//   не используется
    function handleLike(){
        if (isPostLiked(props.id)){
            setLike(like+1);
            deletePost(props.id);
            return;
        }
        addFavPost(props);
        setLike(like-1);
    }

    console.log(favouritePosts);

  return (
    <div className='post'>
        {/* табуляции */}
                <Link to={`/post/${props.id}`}>
                    <div className="img">
                        <img src={props.src} alt="" />
                    </div>
                    <div className="headlines">
                        <h2>{props.name.slice(0, 25)}...</h2>
                        <p>{props.author}</p>
                    </div>
                </Link>
                <div className="desc">
                    <p>{props.description.slice(0, 100)}...</p>
                    <FavButton id={props.id} name={props.name} description={props.description} src={props.src} author={props.author} date={props.date}></FavButton>
                </div>
            </div>
  );
}
