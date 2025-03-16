import { Link } from "react-router-dom"
import { useUserContext } from "../../context/userContext"

export function MainPage(){
    const {isAuthenticated} = useUserContext()
    return (
        <div>
            <h1>MainPage</h1>
            {isAuthenticated() ? (
                <Link to="/profile">Go to Profile</Link>
            ) : (
                <div>
                    <Link to="/auth">Log in</Link> | <Link to="/reg">Register</Link>
                </div>
            )}
    </div>
    )
}