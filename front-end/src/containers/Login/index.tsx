import React, { useContext } from "react";
import { SLogin } from "./styles";
import { Button, Divider, Form, Input } from "antd";
import Title from "antd/lib/typography/Title";
import { Link, useHistory } from "react-router-dom";
import { SLogo } from "../Signup/styles";
import { AiTwotoneBank } from "react-icons/ai";
import { request, requestToken } from "../../api/axios"
import API_URL from "src/api/url";
import { ProfileContext } from "src/common/context/NavigatorContext";
import { Alert } from "src/common/components/Alert";

export default function Login() {
  const history = useHistory();
  const { data, setData } = useContext(ProfileContext)

  const onFinish = (values: any) => {
    request({
      method: "POST",
      url: API_URL.AUTH.LOGIN,
      data: values,
    }).then((res) => {
      localStorage.setItem("token", res?.data?.data)

      // get profile
      if (res?.data) {
        Alert({
          name: `${res?.data?.message}`,
          icon: res?.data?.data ? "success" : "error",
        });

        if (res?.data?.data) {
          requestToken({
            method: "GET",
            url: API_URL.AUTH.PROFILE
          }).then((res) => {
            setData(res?.data?.data)
            const role = data?.user?.role;
            history.push(`bank/${role?.toLowerCase()}`)
          })
        }
      }
    }).catch((err) => {
      console.log("err: ", err);
    })
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
