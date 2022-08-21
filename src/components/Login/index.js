import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (datas) => {
        console.log("Successfully submited", datas);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{
                "textAlign": "center",
            }}>
                <h1>Login Page</h1>
                <label htmlFor="user-id">User Id </label>
                <input
                    style={{
                        "width": "50%",
                        "padding": "12px 20px",
                        "margin": "8px 0",
                        "display": "inline - block",
                        "border": "1px solid #ccc",
                        "box- sizing": "border-box",
                    }}
                    placeholder="Enter your email"
                    id="user-id"
                    {...register("userid", { required: true })} /><br/>
                {/* Error will display if the field is empty */}
                {errors.userid && <span>Please enter your email id</span>}
                <label htmlFor="password">Password </label>
                <input
                    style={{
                        "width": "50%",
                        "padding": "12px 20px",
                        "margin": "8px 0",
                        "display": "inline - block",
                        "border": "1px solid #ccc",
                        "box- sizing": "border-box",
                    }}
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    {...register("password", { required: true })} /><br/>
                {/* Error will display if the field is empty */}
                {errors.password && <span>Please enter your password</span>}
                <button style={{
                     "background-color": "#04AA6D",
                     "color": "white",
                     "padding": "14px 20px",
                     "margin": "8px 0",
                     "border": "none",
                     "cursor": "pointer",
                     "width": "50%",
                }}>Submit</button>
            </div>
        </form>
    );
}

export default Login;
