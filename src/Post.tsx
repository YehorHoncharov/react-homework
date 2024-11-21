import './style.css'

interface IPostProps {
    title: string,
    description: string,
    img: string,
    author: string,
}

export function Post(props: IPostProps){
    return(
        <div className='main-div'>
            <div className='div'>
                <h1 className='center-h1'>Назва: {props.title}</h1>
                <p className='center-p'>Опис: {props.description}</p>
                <img className='center-img' src={props.img} alt="" />
                <p className='center-p'>Автор: {props.author}</p>
            </div>
        </div>
    )
}
// https://ae04.alicdn.com/kf/Hb55cdf7f5b3c4ff698552dd48336f5d5l.jpg_640x640.jpg