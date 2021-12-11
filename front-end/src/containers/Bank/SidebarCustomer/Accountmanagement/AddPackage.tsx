import { Modal } from 'antd';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import { useEffect, useState } from 'react';
import { requestToken } from 'src/api/axios';
import { Alert } from 'src/common/components/Alert';

export default function AddPackage({ open, setOpen, callback }: any) {

    const handleCancel = () => {
        setOpen(false)
    };

    const [packeage, setPackage] = useState([]);
    const [packeageCurent, setPackageCurent] = useState();

    useEffect(() => {
        if (open) {
            requestToken({ method: "GET", url: `/package` }).then(res => {
                setPackage(res.data.data);
            }).catch(err => { })
        }
    }, [open])

    return (
        <div>
            <Modal
                onCancel={handleCancel}
                visible={open}
                title="Đăng ký gói gửi tiền tiết kiệm"
                width={700}
                footer={null}
            >
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    size={"middle"}
                    onFinish={(data: any) => {
                        //console.log("data", data);
                        requestToken({
                            method: "POST", url: "/staff", data: {
                                ...data,
                                birthday: data.birthday.format("DD/MM/YYYY")
                            }
                        }).then((res) => {
                            if (res.data.status === "CREATED") {
                                Alert({ name: res.data.message, icon: "success" })
                            } else {
                                Alert({ name: res.data.message, icon: "info" })
                            }
                            callback();
                        }).catch((err) => {
                            Alert({ name: err?.data?.message ?? "Có lỗi xảy ra.", icon: "error" })
                        })
                    }}
                >

                    <Form.Item label="Tài khoản" name="code">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Gói tài khoản" name="rate">
                        <Select onChange={(val) => {
                            console.log(val);
                            
                        }} >
                            {packeage.map((item: any, index: any) => <Select.Option key={index} value={item.id}>{item.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Số tiền muốn nạp" name="amount">
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

