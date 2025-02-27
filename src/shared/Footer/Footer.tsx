import './Footer.css'

export function Footer(){
    return(
        <div className="footer">
            <img className="logoImgFooter" src="/static/img/logo.png" alt="" />
            {/* footer-link  / footer-button */}
            {/* / -> # */}
            <a className="a" href="/">ALL POSTS</a>
            <a className="a" href="/">SMTH</a>
            <a className="a" href="/">SMTH</a>
        </div>
    )
}