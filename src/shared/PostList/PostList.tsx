import { useEffect, useState } from "react";
import { Post } from "./PostCard/Post";
// import { App } from "./App";
import "./PostList.css";
import { usePost } from "../../hooks/usePosts";
// import { useTitle } from "../../hooks/useTitle";


export function PostList() {
  const { posts } = usePost();
  // const { title } = useTitle();

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => {
          return post.category === selectedCategory;
        })
      );
    }
    console.log(selectedCategory);
  }, [selectedCategory, posts]);


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
              like={post.like}
              dislike={post.dislike}
            />
          ))}
        </div>
      </div>
    </>
  );
}

