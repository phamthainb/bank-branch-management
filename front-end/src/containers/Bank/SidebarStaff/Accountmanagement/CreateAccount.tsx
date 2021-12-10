import React, { useState } from 'react'
import { Modal } from 'antd';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { requestToken } from 'src/api/axios';

export default function CreateAccount() {
  const [state, setState] = useState<any>({
    loading: false,
    visible: false,
  })
  const { visible } = state;

  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
    setState({ visible: false });
  };

  const showModal = () => {
    setState({ ...state, visible: true });
  }

  const onFinish = (values: any) => {
    requestToken({
      method: "POST",
      url: "account",
      data: {
        ...values,
      },
    }).then((res) => {
      console.log("res: ", res);
      setState({ visible: false });
    }).catch((err) => {
      console.log("err: ", err);
    })
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Tạo tài khoản
      </Button>

      <Modal
        visible={visible}
        title="Tạo tài khoản"
        width={700}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ remember: true }}
          size={"middle"}
          onFinish={onFinish}
        >
          <Form.Item
            label="Số tài khoản"
            style={{ marginBottom: "15px" }}
            name="code"
            rules={[{ required: true, message: "Please input your code!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mã khách hàng"
            style={{ marginBottom: "15px" }}
            name="id_customer"
            rules={[{ required: true, message: "Please input your id_customer!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="">
            <Button htmlType="submit">Tạo</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

