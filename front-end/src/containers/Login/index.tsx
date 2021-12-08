import React from "react";
import { SLogin } from "./styles";
import { Button, Divider, Form, Input } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { SLogo } from "../Signup/styles";
import { AiTwotoneBank } from "react-icons/ai";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SLogin>
      <div className="wrapper">
        <SLogo>
          <AiTwotoneBank
            size={25}
            color="white"
          />
        </SLogo>
        <Title level={4}>Login</Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginBottom: "15px" }}
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "15px" }}
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ marginBottom: "10px" }}>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>

          <Divider plain>
            or <Link to="/signup"><span style={{ fontWeight: 600 }}>Register</span></Link>
          </Divider>
        </Form>
      </div>
    </SLogin>
  );
}
