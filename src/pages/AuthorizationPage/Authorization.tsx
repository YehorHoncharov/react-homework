import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./Authorization.css"
import { useUserContext } from "../../context/userContext"

export interface IForm {
    email: string
    password: string
}

export function Authorization() {
    const { register, handleSubmit, formState } = useForm<IForm>({
        mode: "onSubmit",
    })
    const { login, error } = useUserContext()
    const navigate = useNavigate()

    async function onSubmit(data: IForm) {
        const { email, password } = data
        const success = await login(email, password)

        if (success) {
            navigate("/profile")
        }
    }

    return (
        <div>
            <h1>Authorization</h1>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Enter email</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: { value: true, message: "Email field cannot be empty" },
                        minLength: { value: 3, message: "Email is too short" },
                        maxLength: { value: 50, message: "Email is too long" }
                    })}
                />
                <p>{formState.errors.email?.message}</p>

                <label htmlFor="password">Enter password</label>
                <input
                    id="password"
                    type="password"
                    {...register("password", {
                        required: { value: true, message: "Password field cannot be empty" },
                        minLength: { value: 3, message: "Password is too short" },
                        maxLength: { value: 20, message: "Password is too long" },
                    })}
                />
                <p>{formState.errors.password?.message}</p>

                <button type="submit">Log in</button>
            </form>
        </div>
    );
}