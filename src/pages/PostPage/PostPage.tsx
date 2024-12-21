import { useParams } from "react-router-dom";
import "./PostPage.css";
import { usePostById } from "../../hooks/usePostById";
import { useTitle } from "../../hooks/useTitle";
import { Oval } from 'react-loader-spinner';
import { useEffect } from "react";

export function PostPage() {
    const params = useParams();
    const { post, isLoading } = usePostById(Number(params.id));
    const { setTitle } = useTitle("title");

    useEffect(() => {
        if (post) {
            setTitle(post.title || "Пост не найден");
        }
    }, [post, setTitle]);

    console.log("post:", post);
    console.log("params.id:", params.id);

    if (!post) {
        return <div>Пост не найден</div>;
    }

    return (
        <div className="postpage">
            {isLoading === true ? (
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="blue"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            ) : (
                <>
                    <h1>ID Поста: {params.id}</h1>
                    <h1>Заголовок: {post.title}</h1>
                    <img
                        src={post.cover_image}
                        alt={post.title || "Изображение поста"}
                    />
                    <p>
                        <strong>Теги:</strong> {post.tags?.join(", ")}
                    </p>
                    <article
                        dangerouslySetInnerHTML={{
                            __html: post.body_markdown || " ",
                        }}
                    />
                </>
            )}
        </div>
    );
}
