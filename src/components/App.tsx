// import "./App.css"
import { PostList } from './PostList/PostList';
// import { Header }   from './Header/Header'
import { Layout } from './Layout/Layout'
// import { Footer } from './Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostPage } from './PostPage/PostPage';
// import { Main } from './Main/Main';
// создаем компонент App
export function App(){
        return(
            <div className="AppDiv">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout></Layout>}>
                            <Route path='/posts' element={<PostList></PostList>} ></Route>
                            <Route path='/post/:id' element={<PostPage></PostPage>} ></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
}

