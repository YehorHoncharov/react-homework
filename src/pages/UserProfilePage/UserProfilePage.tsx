import { useNavigate } from "react-router-dom"
import { useUserContext } from "../../context/userContext"
import { useEffect } from "react"

export default function ProfilePage() {
    const { user, isAuthenticated } = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
        </div>
    )
}