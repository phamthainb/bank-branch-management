import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SPayment } from "./styles";
import { CustomerContext } from "src/common/context/CustomerContext";
import { requestToken } from "src/api/axios";
import { Form, Select, Button, Input } from "antd";
import { FormInstance } from "antd/es/form";
export default function Payment() {
  const { theme } = useContext(ThemeContext);
  const formRef = React.createRef<FormInstance>();
  const { setCustomer } = useContext(CustomerContext);
  const [listAccount, setListAccount] = useState<any[]>([]);
  const [accountTarget, setAccountTarget] = useState<any>(null);
  useEffect(() => {
    requestToken({
      method: "GET",
      url: "/auth/profile",
      // data: values,
    })
      .then((res: any) => {
        setCustomer(res.data.data);
        requestToken({
          method: "GET",
          url: "/customer/account",
          params: { customerId: res.data.data.id },
        }).then((res: any) => {
          if (res.data.data.content.length > 0) {
            setListAccount(res.data.data.content);
          }
        });
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  }, [setCustomer]);
  const { toggleSidebar } = useContext(ToggleSidebarContext);
  const { Option } = Select;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  // const onGenderChange = (value: string) => {
  // };
  const onFinish = (values: any) => {
    if (accountTarget !== null) {
      requestToken({
        method: "POST",
        url: "/account/pay",
        data: { 
          accountIn:{
            id: accountTarget?.id,
          },
          accountOut:{
            id: values.fromId
          },
          amount: values.amount,
          type: "",
         },
      })
        .then((res: any) => {
          alert("Chuyển tiền thành công");
        })
        .catch((err: any) => {
          console.log("err: ", err);
          formRef.current!.resetFields();
        });
    } else {
      alert("not account");
    }
  };
  const findAccountByCode = (code: any) => {
    requestToken({
      method: "GET",
      url: "/account/check-account",
      params: { code },
    })
      .then((res: any) => {
        if (res.data.status === "OK") {
          setAccountTarget(res.data.data);
        } else setAccountTarget(null);
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  };
  return (
    <SPayment>
      <div className="top">
        <h3
          className="header"
          onClick={() => toggleSidebar && toggleSidebar(false)}
        >
          <FaChevronLeft color={theme.text.main} size={16} />
          Chuyển tiền
        </h3>
      </div>
      <div className="form-container">
        <Form {...layout} ref={formRef} name="control-ref" onFinish={onFinish}>
          <Form.Item
            name="fromId"
            label="Từ tài khoản"
            rules={[{ required: true, message: "Cannot be empty!" }]}
          >
            <Select
              placeholder="Select a option and change input text above"
              // onChange={onGenderChange}
              allowClear
            >
              {listAccount.map((item, index) => {
                return (
                  <Option key={index} value={item.id}>
                    {item.code}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="type"
            label="Loại"
            rules={[{ required: true, message: "Cannot be empty!" }]}
          >
            <Select
              placeholder="Select a type"
              // onChange={onGenderChange}
              allowClear
            >
              <Option value="MONEY">Số dư tín dụng</Option>
              <Option value="SAVING">Số dư tiết kiệm</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="targetId"
            label="Đến tài khoản"
            rules={[
              { required: true, message: "Cannot be empty!" },
              { pattern: /^[0-9]*$/, message: "Only number!" },
            ]}
          >
            <Input onChange={(e) => findAccountByCode(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="amount"
            label="Số tiền"
            rules={[
              { required: true, message: "Cannot be empty!" },
              { pattern: /^[0-9]*$/, message: "Only number!" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            name="note"
            label="Nội dung"
            rules={[{ required: true, message: "Cannot be empty!" }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
    </SPayment>
  );
}
