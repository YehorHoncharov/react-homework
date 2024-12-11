import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
    return(
        <div className='header'>
            <Link to={"/"}>
                <img className='logoImgHeader' src="/static/img/logo.png" alt="" />
            </Link>
            
            <Link to={"/posts"}>
                <a className='allposts' href="/">ALL POSTS</a>
            </Link>
            
            <input className='input' type="text" placeholder='Пошук продуктів...' />
            
            <img className='profileImgHeader' src="/static/img/profile.png" alt="" />
        </div>
    )
}