import { useState } from "react";
import "./style.css";

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
        <h1 className="center-h1">Назва: {props.title}</h1>
        <p className="center-p">Опис: {props.description}</p>
        <img className="center-img" src={props.img} alt="" />
        <p className="center-p">Автор: {props.author}</p>
        <p>Likes: {like}</p>
        <p>Dislikes: {dislike}</p>
        <button disabled={isLiked} onClick={incrementLike}><img className="like" src={props.like} alt="" /></button>
        <button disabled={isDisliked} onClick={incrementDislike}><img className="dislike" src={props.dislike} alt="" /></button>
      </div>
    </div>
  );
}
