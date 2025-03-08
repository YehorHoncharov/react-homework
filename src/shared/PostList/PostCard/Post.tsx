import "./Post.css";
import { Link } from "react-router-dom";
import { IPost } from "../../../hooks/usePosts";
import { FavButton } from "./FavouriteButton";
import { useState } from "react";


export function Post(props: IPost) {
    const [like] = useState(0);
  
    return (
      <div className="post">
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
          <FavButton
          id={props.id}
          name={props.name}
          description={props.description}
          src={props.src}
          author={props.author}
          date={props.date}
        />
          <p>Likes: {like}</p>
        </div>
      </div>
    );
  }
  
