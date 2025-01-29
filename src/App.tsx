import { PostList } from "./shared/PostList/PostList";
import { Layout } from "./shared/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "./pages/PostPage/PostPage";
import { IPost } from "./hooks/usePosts";
import { createContext, useState } from "react";
import { FavouritePosts } from "./pages/FavouritePostPage/FavouritePost";



interface IPostContext {
  favouritePosts: IPost[];
  addFavPost: (post: IPost) => void;
  deletePost: (id: number) => void;
  isPostLiked: (id: number) => boolean;
}

const initialValue: IPostContext = {
  favouritePosts: [],
  addFavPost: (post: IPost) => {},
  deletePost: (id: number) => {},
  isPostLiked: (id: number) => false
};

export const postContext = createContext<IPostContext>(initialValue);


export function App() {
  const [favouritePosts, setFavouritePosts] = useState<IPost[]>([])

  function addToFavPost(post: IPost){
      let array = [...favouritePosts, post]
      setFavouritePosts(array)
  }

  function deletePost(id: number) {
      const filterPosts = favouritePosts.filter((post)=>{
          return post.id !== id
          
      })
      setFavouritePosts(filterPosts)
  }

  function isPostLiked(id: number) {
    return favouritePosts.some((post) => post.id === id);
  }


  return (
    <div className="AppDiv">
      <postContext.Provider value={{favouritePosts: favouritePosts, addFavPost: addToFavPost, deletePost: deletePost, isPostLiked: isPostLiked}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/posts" element={<PostList></PostList>}></Route>
            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
            <Route path="/favourite" element={<FavouritePosts></FavouritePosts>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </postContext.Provider>
    </div>
  );
}
