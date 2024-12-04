import { useState } from "react";
import "./Post.css";

interface IPostProps {
  title: string;
  description: string;
  img: string;
  author: string;
  like: string;
  dislike: string;
}

export function Post(props: IPostProps) {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  function incrementLike() {
    if (!isLiked) {
      setLike(like+1);
      setIsLiked(true);


      if (isDisliked) {
        setDislike(dislike-1);
        setIsDisliked(false);
      }
    }
  }

  function incrementDislike() {
    if (!isDisliked) {
      setDislike(dislike+1);
      setIsDisliked(true);

      
      if (isLiked) {
        setLike(like-1);
        setIsLiked(false);
      }
    }
  }

  return (
    <div className="main-div">
      <div className="div">
        <h1 className="center-h1">{props.title}</h1>
        <img className="center-img" src={props.img} alt="" />
        <p className="center-p">{props.description}</p>
        <p className="center-p">-{props.author}</p>
        <div className="result">
          <p><img className="like" src={props.like} alt="" />{like}</p>
          <p ><img className="dislike" src={props.dislike} alt="" />{dislike}</p>
        </div>
        <div className="reaction">
          <button disabled={isLiked} onClick={incrementLike}><img className="like" src={props.like} alt="" /></button>
          <button disabled={isDisliked} onClick={incrementDislike}><img className="dislike" src={props.dislike} alt="" /></button>
        </div>
      </div>
    </div>
  );
}
