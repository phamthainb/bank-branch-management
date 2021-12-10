import { Avatar, Button, Col, Divider, Drawer, Form, Input, List, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { requestToken } from "src/api/axios";
import WrapContent from "src/common/components/WrapContent";
import { ProfileContext } from "src/common/context/NavigatorContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "./styles";

export default function Salary() {
  const { toggleSidebar } = useContext(ToggleSidebarContext);
  const { theme } = useContext(ThemeContext);
  const { data } = useContext(ProfileContext);
  const [state, setstate] = useState<any>();

  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  console.log("firstDay: ", firstDay);
  console.log("lastDay: ", lastDay);

  useEffect(() => {
    if (data) {
      requestToken({
        method: "GET",
        url: "staff/salary",
        params: {
          start: firstDay,
          staffId: data?.id,
          end: firstDay,
        }
      }).then((res) => {
        // console.log(res.data.data);
        let resData = res.data.data;
        setstate({ data: resData.content })
      }).catch()
    }
  }, [])

  return (
    <WrapContent title="Bảng lương">
      <SInnerSidebar>
        <div className="top">
          <h3
            className="header"
            onClick={() => toggleSidebar && toggleSidebar(false)}
          >
            <FaChevronLeft color={theme.text.main} size={16} />
          </h3>
        </div>

        <Divider />
        <div className="search">
          <h3>Xem lương từ ngày - đến ngày</h3>
          <FormLayoutDemo />
        </div>
        <Divider />

        <div className="body">
          <h3>Danh sách</h3>

          <ListData data={state?.data ?? []} />
        </div>
      </SInnerSidebar>
    </WrapContent>
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
        <Button type="primary">Tìm kiếm</Button>
      </Form.Item>
    </Form>
  );
};

const ListData = ({ data }: any) => {
  const [state, setState] = useState({ visible: false })
  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const [account, setAccount] = useState<any>();

  const showDrawer = (id: any) => {
    requestToken({ method: "GET", url: `/account?id=${id}` }).then((res: any) => {
      setState({
        visible: true,
      });
      // console.log(res.data.data);
      setAccount(res.data.data);
    })
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
              <>
                <div className="detaik">
                  <Button onClick={() => showDrawer(item.id)} key={`a-${item.id}`}>
                    Xem chi tiết
                  </Button>
                </div>
              </>
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

      {account && <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}
      >
        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          Thông tin tài khoản
        </p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Mã tài khoản" content={account?.id} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Số tài khoản" content={account?.code} />
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={12}>
            <DescriptionItem title="Số dư" content={account?.balance} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Loại tài khoản" content={account?.apackage?.type === "saving" ? "Tiết kiệm" : "Tín dụng"} />
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={12}>
            <DescriptionItem title="Tên người dùng" content={account?.customer?.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Mã người dùng" content={account?.customer?.id} />
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col span={12}>
            <DescriptionItem title="Trạng thái" content={account?.status === true ? "Hoạt động" : "Khóa"} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Nhân viên quản lý" content={account?.staff?.name} />
          </Col>
        </Row>
      </Drawer>}
    </>
  );
}

const DescriptionItem = ({ title, content }: any) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
