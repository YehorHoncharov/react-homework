import { Post } from "../Post/Post";
// import { App } from "./App";
import './PostList.css'

export function PostList() {
    const posts = [
        {
          id: 0,
          title: 'Введение в React',
          description: 'lorem ipsum dolor sit amet',
          image: 'https://ru.legacy.reactjs.org/logo-og.png',
          author: 'Иван Иванов',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
        {
          id: 1,
          title: 'Введение в React',
          description: 'lorem ipsum dolor sit amet',
          image: 'https://ru.legacy.reactjs.org/logo-og.png',
          author: 'Мария Петрова',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
        {
          id: 2,
          title: 'Введение в React',
          description: 'lorem ipsum dolor sit amet',
          image: 'https://ru.legacy.reactjs.org/logo-og.png',
          author: 'Сергей Смирнов',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
      ];

      return (
        <div className="postList">
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              img={post.image}
              author={post.author}
              like={post.imgLike}
              dislike={post.imgDislike}
            />
          ))}
        </div>
      );
}

// https://cdn3.emoji.gg/emojis/8750-like.png