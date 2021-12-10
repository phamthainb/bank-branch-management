import React, { useState } from 'react'
import { Modal } from 'antd';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { requestToken } from 'src/api/axios';

type RequiredMark = boolean | 'optional';

export default function CreateStaff() {
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
    const onSubmit = (data: any) => {
        console.log("data", data);

    }
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal
                visible={visible}
                title="Thêm mới nhân viên"
                width={700}
                footer={null}
            >
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size={"middle"}
                    onFinish={(data: any) => {
                        console.log("data", data);
                        requestToken({method: "POST", url: "/staff", data: {
                            ...data,
                            birthday: data.birthday.format("DD/MM/YYYY")
                        }}).then((res) => {

                        }).catch((err) =>{})
                    }}
                >

                    <Form.Item label="Tài khoản" name="username">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mật khẩu" name="password">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Họ và tên" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="CMT" name="card_id">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Ngày sinh" name="birthday">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item label="Số năm kinh nghiệm" name="exp_year">
                        <InputNumber />
                    </Form.Item>

                    <Form.Item label="Bậc nghề" name="rate">
                        <Select>
                            <Select.Option value="low">Thấp</Select.Option>
                            <Select.Option value="mid">Trung bình</Select.Option>
                            <Select.Option value="high">Cao</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Vị trí công việc" name="position">
                        <Input />
                    </Form.Item>

                    <Button key="back" onClick={handleCancel}>
                        Huỷ
                    </Button>
                    <Button key="submit" type="primary" htmlType="submit">
                        Tạo
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}

