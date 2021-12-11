import { Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { requestToken } from "src/api/axios";
import { CustomerContext } from "src/common/context/CustomerContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "./styles";

interface ITable {
  key: any;
  code: any;
  balance: any;
  saving: any;
}

export default function Accountmanagement() {
  const { theme } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(ToggleSidebarContext);
  const { setCustomer } = useContext(CustomerContext);
  const [dataSource, setDataSource] = useState<ITable[]>([]);
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];

  const columns = [
    {
      title: "Số tài khoản",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Số dư",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Số dư tiết kiệm",
      dataIndex: "saving",
      key: "saving",
    },
  ];
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
            const tempList: ITable[] = [];
            res.data.data.content.map((item: any, key: any) => {
              let rowItem = {
                key: key,
                code: item.code,
                balance: item.balance,
                saving: "Không có",
              };
              if (item.apackage !== null) {
                rowItem = {
                  ...rowItem,
                  saving: item.balance_saving + "",
                };
              }

              tempList.push(rowItem);
            });
            setDataSource(tempList);
          }
        });
      })
      .catch((err: any) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <SInnerSidebar>
      <div className="top">
        <h3
          className="header"
          onClick={() => toggleSidebar && toggleSidebar(false)}
        >
          <FaChevronLeft color={theme.text.main} size={16} />
          Quản lý tài khoản
        </h3>
      </div>
      <div className="table-container">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </SInnerSidebar>
  );
}
