import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostList } from "../shared/PostList/PostList";
import { PostPage } from "../pages/PostPage/PostPage";
import { FavouritePosts } from "../pages/FavouritePostPage/FavouritePost";


export function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/posts" element={<PostList></PostList>}></Route>
            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
            <Route path="/favourite" element={<FavouritePosts></FavouritePosts>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    )
}