import styleComponent from '../../shortPath/styleComponent';
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { Toaster } from 'react-hot-toast'
import RegisterAccount from './Authenticate/register';
import { useNavigate } from 'react-router-dom';
const {
    formStyle,
    formCenterStyle
} = styleComponent;

export default function LoginPage() {
    const router = useNavigate();
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [PassWord, setPassword] = useState("")

    
    const handleDirect = () => {
        router('/login')
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
                onFinish={() => {
                    RegisterAccount(UserName,Email, PassWord)
                }}
            // onFinishFailed={onFinishFailed}
            >
                <Toaster position='top-right' reverseOrder={false}></Toaster>
                <h1>Register</h1>
                <Form.Item
                    label="UserName"
                    name="UserName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your UserName!',
                        },
                    ]}
                >
                    <Input value={UserName} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </Form.Item>
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
                    <Button  onClick={handleDirect}>Login</Button>
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