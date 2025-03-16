import { useState } from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/userContext"
import { IComment } from "../../hooks/usePostWithComments"


interface CommentsProps {
    comments: IComment[]
    onAddComment: (text: string) => void
}

export function CommentsSection(props: CommentsProps) {
    const { isAuthenticated } = useUserContext()
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (newComment.trim()) {
            props.onAddComment(newComment)
            setNewComment("")
        }
    }

    return (
        <div>
            <h3>Comments</h3>
            {props.comments.length > 0 ? (
                <div>
                    {props.comments.map((comment) => (
                        <div key={comment.id}>
                            <p>{comment.userId}:</p> {comment.body}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No comments yet</p>
            )}

            {isAuthenticated() ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={newComment}
                        onChange={(event) => setNewComment(event.target.value)}
                        placeholder="Write a comment..."
                    />
                    <button type="submit">Add Comment</button>
                </form>
            ) : (
                <p>
                    To leave a comment, please <Link to="/login">log in</Link>
                </p>
            )}
        </div>
    );
}