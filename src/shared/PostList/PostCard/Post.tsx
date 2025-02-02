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
  let [like, setLike] = useState(0);
  const {favouritePosts, addFavPost, deletePost, isPostLiked} = useContext(postContext);

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
                <Link to={`/post/${props.id}`}>
                    <div className="img">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="headlines">
                        <h2>{props.title.slice(0, 25)}...</h2>
                        <p>{props.author}</p>
                    </div>
                </Link>
                <div className="desc">
                    <p>{props.description.slice(0, 100)}...</p>
                    <FavButton id={props.id} title={props.title} description={props.description} image={props.image} author={props.author}></FavButton>
                </div>
            </div>
  );
}
