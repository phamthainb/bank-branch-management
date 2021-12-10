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
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal
                visible={visible}
                title="Thêm mới nhân viên"
                width={700}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Huỷ 
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Tạo 
                    </Button>,

                ]}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // initialValues={{ size: componentSize }}
                    //onValuesChange={onFormLayoutChange}
                    size={"middle"}
                >
                    
                    <Form.Item label="Tên">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Switch" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Button">
                        <Button>Button</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

