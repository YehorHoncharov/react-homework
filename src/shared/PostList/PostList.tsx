import { useEffect, useState } from "react";
import { Post } from "./PostCard/Post";
import "./PostList.css";
import { usePosts } from "../../hooks/usePosts";
import { Vortex } from "react-loader-spinner";


export function PostList() {
  const { posts, isLoading, error} = usePosts();
  // const { title } = useTitle();
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category?.name === selectedCategory)
      );
    }
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
            <option value = 'All'>All</option>
            {posts.map(category => {
                return <option value={category.name}>{category.name}</option>
            })}
            </select>
        </div>

        <div className="posts">
        {isLoading ? (
            <div className="vortex">
              <Vortex
                visible={true}
                height="200"
                width="200"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
              />
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            filteredPosts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                name={post.name}
                description={post.description}
                src={post.src}
                author={post.author}
                date={post.date}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

