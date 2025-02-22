import { useForm } from "react-hook-form";
import "./Authorization.css"

export interface IForm{
    username: string;
    email: string;
    password: string | number;
}

export function Authorization(){
    const { register, handleSubmit, formState } = useForm<IForm>({
        mode: "onSubmit"
    })

    function onSubmit(data: IForm){
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">enter username</label>
                <input id="username" type="text" {...register('username', {
                    required: {value: true, message: "username field cannot be empty"},
                    minLength: {value:3, message: "username is too short"},
                    maxLength: {value:20, message: "username is too big"}
                })}/>
                <p>{formState.errors.username?.message}</p>

                <label htmlFor="email">enter email</label>
                <input id="email" type="email" {...register('email', {
                    required: {value: true, message: "email field cannot be empty"},
                    minLength: {value:3, message: "email is too short"},
                    maxLength: {value:20, message: "email is too big"}
                })}/>
                <p>{formState.errors.email?.message}</p>

                <label htmlFor="password">enter password</label>
                <input id="password" type="password" {...register('password', {
                    required: {value: true, message: "password field cannot be empty"},
                    minLength: {value:3, message: "password is too short"},
                    maxLength: {value:20, message: "password is too big"}
                })}/>
                <p>{formState.errors.password?.message}</p>

                <button type="submit">submit</button>
            </form>
        </div>
    )
}
