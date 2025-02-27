import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
    return(
        <div className='header'>
            <Link to={"/"}>
                <img className='logoImgHeader' src="/static/img/logo.png" alt="" />
            </Link>
            
            <Link to={"/posts"}>
            {/* menu-button / menu-link */}
                <a className='allposts' href="/">ALL POSTS</a>
            </Link>
            {/* продукты */}
            <input className='input' type="text" placeholder='Пошук продуктів...' />
            
            <Link to={"/favourite"}>
            <a className='allposts' href="/">FAVOURITE</a>
            </Link>

            <img className='profileImgHeader' src="/static/img/profile.png" alt="" />
        </div>
    )
}