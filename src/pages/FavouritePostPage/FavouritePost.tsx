import { useFavPostContext } from "../../context/cartContext";

export function FavouritePosts() {
  const { favouritePosts, deletePost } = useFavPostContext();

  return (
    <div>
      {favouritePosts.map((post) => (
        <div key={post.id}>
          <h1>{post.name}</h1>
          <p>{post.description}</p>
          <img src={post.src} alt={post.name} />
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
