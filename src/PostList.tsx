import { Post } from "./Post";
// import { App } from "./App";

export function PostList() {
    const posts = [
        {
          id: 0,
          title: 'Введение в React',
          description: 'Этот пост познакомит вас с основами React, его компонентной архитектурой и JSX.',
          image: 'https://ae04.alicdn.com/kf/Hb55cdf7f5b3c4ff698552dd48336f5d5l.jpg_640x640.jpg',
          author: 'Иван Иванов',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
        {
          id: 1,
          title: 'Как использовать хуки в React',
          description: 'Рассмотрим основные хуки React, такие как useState и useEffect, и их применение.',
          image: 'https://ae04.alicdn.com/kf/Hb55cdf7f5b3c4ff698552dd48336f5d5l.jpg_640x640.jpg',
          author: 'Мария Петрова',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
        {
          id: 2,
          title: 'TypeScript и React: что нужно знать',
          description: 'Этот пост поможет вам понять, как интегрировать TypeScript в ваш проект на React для типизации и улучшения кода.',
          image: 'https://ae04.alicdn.com/kf/Hb55cdf7f5b3c4ff698552dd48336f5d5l.jpg_640x640.jpg',
          author: 'Сергей Смирнов',
          imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
          imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
        },
      ];

      return (
        <div>
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