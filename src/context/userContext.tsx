import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { Response } from "../types/types"


interface IUser {
    username: string
    email: string
    role: string
}

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    login: (email: string, password: string) =>  Promise<boolean>
    register: (username: string, email: string, password: string) => void
    user: IUser | null
    isAuthenticated: () => boolean
    error: string | null
}

const initialValue: IUserContext = {
    login: async () => false,
    register: () => {},
    user: null,
    isAuthenticated: () => false,
    error: null
}


const UserContext = createContext<IUserContext>(initialValue)


export function useUserContext() {
    return useContext(UserContext)
}


export function UserContextProvider(props: IUserProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const [error, setError] = useState<string | null>(null)

    // function isAuthenticated() {
    //     return !!user || !!localStorage.getItem("token")
    // }

    async function getUser(token: string) {
        try {
            const response = await fetch("http://localhost:8000/api/user/me", {
                headers: { Authorization: `Bearer ${token}` },
            })
            const result: Response<IUser> = await response.json()

            if (result.status === "error") {
                setError(result.message)
                return
            }

            if (result.data) {
                setUser(result.data)
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
    }


    async function login(email: string, password: string): Promise<boolean> {
        try {
            const response = await fetch("http://localhost:8000/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
    
            const result: Response<string> = await response.json()
    
            if (result.status === "error") {
                setError(result.message || "An error occurred")
                return false
            }
    
            if (result.data) {
                localStorage.setItem("token", result.data)
                await getUser(result.data)
                return true
            }
    
            return false
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
                return false
            }
            return true
        }
    }


    async function register(username: string, email: string, password: string) {
        try {
            const response = await fetch("http://localhost:8000/api/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            })
            const result: Response<string> = await response.json()

            if (result.status === "error") {
                setError(result.message)
                return
            }

            if (result.data) {
                localStorage.setItem("token", result.data)
                await getUser(result.data)
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            getUser(token)
        }
    }, [])


    return <UserContext.Provider 
    value={{
        user,
        login,
        register,
        isAuthenticated: () =>  user ? true : localStorage.getItem("token") ? true : false,
        error,
    }}>

    {props.children}
    </UserContext.Provider> 
}
