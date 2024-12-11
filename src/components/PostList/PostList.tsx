import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
// import { App } from "./App";
import './PostList.css'

const posts = [
  {
    id: 0,
    category: 'cats',
    title: 'Введение в React',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://ru.legacy.reactjs.org/logo-og.png',
    author: 'Иван Иванов',
    imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
    imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
  },
  {
    id: 1,
    category: 'bobik',
    title: 'Введение в React',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://ru.legacy.reactjs.org/logo-og.png',
    author: 'Мария Петрова',
    imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
    imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
  },
  {
    id: 2,
    category: 'dogs',
    title: 'Введение в React',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://ru.legacy.reactjs.org/logo-og.png',
    author: 'Сергей Смирнов',
    imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
    imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
  },
  {
    id: 4,
    category: 'chebureki',
    title: 'Введение в React',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://ru.legacy.reactjs.org/logo-og.png',
    author: 'Сергей Смирнов',
    imgLike: "https://cdn3.emoji.gg/emojis/8750-like.png",
    imgDislike: "https://img1.picmix.com/output/stamp/thumb/9/7/4/2/2622479_884dc.png"
  },
];

export function PostList() {
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.category === selectedCategory
            }))
        }
    }, [selectedCategory])

    useEffect(()=>{
      async function getPosts(){
          // const response = await fetch('https://dummyjson.com/posts')
          const response = await fetch('https://fakestoreapi.com/products')
          const posts = await response.json()
          setFilteredPosts(posts)
      }
      getPosts()
  },[])

    return (
      <>
        
        <div className="postList">
          <div className="selectedCategory">
          <select
            onChange={(event) => {
              setSelectedCategory(event.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="cats">Cats</option>
            <option value="bobik">Chat-Bot</option>
            <option value="dogs">Dogs</option>
            <option value="chebureki">Chebureki</option>
          </select>
          </div>
    
        <div className="posts">
          {filteredPosts.map((post) => (
            <Post
              id={post.id}
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
        </div>
      </>
    );
}

// https://cdn3.emoji.gg/emojis/8750-like.png