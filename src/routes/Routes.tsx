import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostPage } from "../pages/PostPage/PostPage";
import { FavouritePosts } from "../pages/FavouritePostPage/FavouritePost";
import { Authorization } from "../pages/AuthorizationPage/Authorization";
import { Registration } from "../pages/RegistarationPage/RegistarationPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import ProfilePage from "../pages/UserProfilePage/UserProfilePage";


export function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
            <Route path="/favourite" element={<FavouritePosts></FavouritePosts>}></Route>
            <Route path="/auth" element={<Authorization></Authorization>}></Route>
            <Route path="/reg" element={<Registration></Registration>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    )
}