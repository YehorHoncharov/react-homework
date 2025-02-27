import { ReactNode } from "react"
import './Main.css'

interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        // main
        <div className="Main">
        {props.children}
        </div>
    )
}