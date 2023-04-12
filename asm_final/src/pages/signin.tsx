import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { signin } from '../api/auth'
import { Form, useNavigate } from 'react-router-dom'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
type Inputt = {
    email: string,
    password: string | number,
}

const Signin = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputt>()
    const onHandleSubmit = async (inputValue: any) => {
        const { data } = await signin(inputValue)
        localStorage.setItem("user", JSON.stringify(data))
        navigate('/admin/product')
    }

    return (
        <div style={{ fontSize: "20px" }}>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <div>Email</div>
                <div><input type="email"  {...register("email", { required: true })} /></div>
                {errors.email && <div style={{ color: "red" }}>Truong email la bat buoc</div>}
                <div>Mật khẩu</div>
                <div><input type="password"  {...register("password", { required: true })} /></div>
                {errors.password && <div style={{ color: "red" }}>Truong password la bat buoc</div>}
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Signin