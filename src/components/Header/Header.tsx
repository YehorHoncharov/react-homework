import './Header.css'

export function Header() {
    return(
        <div className='header'>
            <img className='logoImgHeader' src="/static/img/logo.png" alt="" />
            <a className='allposts' href="/">ALL POSTS</a>
            <input className='input' type="text" placeholder='Пошук продуктів...' />
            <img className='profileImgHeader' src="/static/img/profile.png" alt="" />
        </div>
    )
}