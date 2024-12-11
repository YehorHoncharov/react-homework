import { ReactNode } from "react"
import './Layout.css'
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
// import { PostList } from "../PostList/PostList"



interface ILayoutProps {
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return (
        <div className="layout">
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}