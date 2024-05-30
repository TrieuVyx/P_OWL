import styleComponent from '../../shortPath/styleComponent';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import toast, { Toaster } from 'react-hot-toast'
import Authenticate from './Authenticate/authenticate';
import { useNavigate } from 'react-router-dom';
const {
    formStyle,
    formCenterStyle
} = styleComponent;

export default  function LoginPage() {
    const router = useNavigate();
    const [Email, setEmail] = useState("")
    const [PassWord, setPassword] = useState("")

    const handleDirect = () => {
        router('/register')
    }
    const loginHanle = async () => {
        const bool = await Authenticate(Email, PassWord);
        if (bool) {
            router('/');
            toast.success("Login successfully");
        } else {
            router('/login');
            toast.error("Email or Password Incorrectly");
        }
    }
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={formStyle}
                initialValues={{
                    remember: true,
                }}
                method='POST'
                onFinish={() => loginHanle()}
            // onFinishFailed={onFinishFailed}
            >
                <Toaster position='top-right' reverseOrder={false}></Toaster>
                <h1>Login</h1>
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input value={Email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="PassWord"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your passWord!',
                        }
                    ]}
                >
                    <Input.Password name="PassWord" value={PassWord} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    style={formCenterStyle}
                    wrapperCol={{
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                    <Button onClick={handleDirect}>Register</Button>
                </Form.Item>

                <Form.Item
                    style={formCenterStyle}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}