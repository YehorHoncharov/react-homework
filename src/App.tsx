import { PostList } from "./shared/PostList/PostList";
import { Layout } from "./shared/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "./pages/PostPage/PostPage";
import { IPost } from "./hooks/usePosts";
import { createContext, useState } from "react";

// interface IPostContext{
//   favouritePosts: IPost[];
//   addFavPost: (post: IPost) => void
// }

// const initialValue: IPost = {favouritePosts: [], addFavPost: (post: IPost) => {}}
// const postContext = createContext< IPostContext >(initialValue)

interface IPostContext {
  favouritePosts: IPost[];
  addFavPost: (post: IPost) => void;
}

const initialValue: IPostContext = {
  favouritePosts: [],
  addFavPost: (post: IPost) => {}
};

export const postContext = createContext<IPostContext>(initialValue);


export function App() {
  const [favouritePosts, setFavouritePosts] = useState<IPost[]>([])

  function addToFavPost(post: IPost){
      let array = [...favouritePosts, post]
      setFavouritePosts(array)
  }

  return (
    <div className="AppDiv">
      <postContext.Provider value={{favouritePosts: favouritePosts, addFavPost: addToFavPost}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/posts" element={<PostList></PostList>}></Route>
            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </postContext.Provider>
    </div>
  );
}
