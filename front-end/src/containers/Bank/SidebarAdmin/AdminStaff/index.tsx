import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "./styles";
import { Table, Tag, Space, Form, Input, Button, Radio } from 'antd';
import { requestToken } from "src/api/axios";
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';
import CreateStaff from "./CreateStaff";

export default function AdminStaff() {
  const { theme } = useContext(ThemeContext);
  const onSearch = (value: any) => {
    console.log(value);
  };

  const { toggleSidebar } = useContext(ToggleSidebarContext);


  // data 
  const [state, setstate] = useState<any>();

  useEffect(() => {
    requestToken({ method: "GET", url: "/staff/list" }).then((res) => {
      console.log(res.data.data);
      let resData = res.data.data;

      setstate({ data: resData.content })

    }).catch()
  }, [])

  return (
    <SInnerSidebar>
      <div className="top">
        <h3
          className="header"
          onClick={() => toggleSidebar && toggleSidebar(false)}
        >
          <FaChevronLeft color={theme.text.main} size={16} />
          Quản lý tài khoản Staff
        </h3>
      </div>
      <Divider />

      <div className="search">
        <h3>Tìm kiếm </h3>
        <FormLayoutDemo />
      </div>
      <Divider />

      <div className="handle">
        <Button type="primary">Thêm mới </Button>
        <CreateStaff />
      </div>
      <Divider />

      <div className="body">
        <h3>Bảng danh sách</h3>
        {/* <Table columns={columns} dataSource={state?.data ?? []} /> */}
        <ListData data={state?.data ?? []} />
      </div>
    </SInnerSidebar>
  );
}

const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');

  return (
    <Form
      layout={"inline"}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
    >
      <Form.Item label="Field A">
        <Input placeholder="Nhập..." />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="Nhập..." />
      </Form.Item>
      <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};


const DescriptionItem = ({ title, content }: any) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const ListData = ({ data }: any) => {
  const [state, setState] = useState({ visible: false })
  const [staff, setStaff] = useState<any>();

  const showDrawer = (id: any) => {
    requestToken({ method: "GET", url: `/staff?id=${id}` }).then((res: any) => {
      setState({
        visible: true,
      });
      console.log(res.data.data);
      setStaff(res.data.data);
    })

  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  return (
    <>
      <List
        dataSource={data.map((i: any) => ({ name: i.name, id: i.id, address: i.address }))}
        bordered
        renderItem={(item: any) => (
          <List.Item
            key={item.id}
            actions={[
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a onClick={() => showDrawer(item.id)} key={`a-${item.id}`}>
                Xem chi tiết
              </a>
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description={item.address}
            />
          </List.Item>
        )}
      />
      {staff && <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          Thông tin nhân viên
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Mã nhân viên" content={staff.id} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="CMT" content={staff.card_id} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <DescriptionItem title="Họ và Tên" content={staff.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Tên tài khoản" content={staff.user.username} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <DescriptionItem title="Địa chỉ" content={staff.address} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Ngày sinh" content={staff.birthday} />
          </Col> 
          </Row>
        <Divider />

        <Row>
          <Col span={12}>
            <DescriptionItem title="Bậc nghề" content={staff.rate} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Thâm niên" content={staff.expYear} />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <DescriptionItem title="Vị trí công việc" content={staff.position} />
          </Col>
          {/* <Col span={12}>
            <DescriptionItem title="Thâm niên" content={staff.birthday} />
          </Col> */}
        </Row>
        <Divider />

      </Drawer>}
    </>
  );
}
