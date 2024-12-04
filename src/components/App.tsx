import { PostList } from './PostList/PostList';
import { Header }   from './Header/Header'
import { Layout } from './Layout/Layout'
import { Footer } from './Footer/Footer'
// создаем компонент App
export function App(){
        return(
            <div>
                <Layout>
                    <Header />
                    <PostList />
                    <Footer />
                </Layout>
            </div>
        )
}

