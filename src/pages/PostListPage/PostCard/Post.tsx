import { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

interface IPostProps {
  id: number;
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
    <Link className="main-div" to={`/post/${props.id}`} >
    {/* <div className="main-div"> */}
      <div className="post">
        <h1>{props.title.slice(0,40)}...</h1>
        {/* <h1 className="center-h1">{props.title}</h1> */}
        <img className="center-img" src={props.img} alt="" />
        <h1>{props.description.slice(0,25)}...</h1>
        {/* <p className="center-p">{props.description}</p> */}
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
        </Link>
      // </div>
    
  );
}
