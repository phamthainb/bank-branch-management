import { Button, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { requestToken } from "src/api/axios";
import { CustomerContext } from "src/common/context/CustomerContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import AddPackage from "./AddPackage";
import ModalCancelPackage from "./ModalCancelPackage";
import ModalTakeInterest from "./ModalTakeInterest";
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
  const { customer, setCustomer } = useContext(CustomerContext);
  const [dataSource, setDataSource] = useState<ITable[]>([]);

  // modal
  const [currentAccount, setCurrentAccount] = useState();
  const [modalDkPackage, setModalDK] = useState(false);
  const [modalCancelPackage, setModalCancelPackage] = useState(false);
  const [modalTakeInterest, setModalTakeInterest] = useState(false);

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
      title: "Gói tài khoản",
      dataIndex: "package",
      key: "package",
      render: (text: string, record: any) => {
        //console.log("record", record);
        return record?.apackage?.name ?? "Chưa đăng ký gói tài khoản.";
      },
    },
    {
      title: "Số dư tiết kiệm",
      dataIndex: "saving",
      key: "saving",
    },
    {
      title: "Tiền lãi tiết kiệm",
      dataIndex: "balance_interest",
      key: "balance_interest",
      render: (text: string, record: any) => {
        //console.log("record", record);
        return record?.balance_interest ?? "0";
      },
    },
    {
      title: "Chức năng",
      dataIndex: "handle",
      key: "hanlde",
      render: (text: string, record: any) => {
        return (
          <>
            {record.apackage ? (
              <>
                <Button
                  onClick={() => {
                    setCurrentAccount(record);
                    setModalCancelPackage(true);
                  }}
                >
                  Huỷ gói{" "}
                </Button>
                <Button
                  onClick={() => {
                    setCurrentAccount(record);
                    setModalTakeInterest(true);
                  }}
                >
                  Rút lãi{" "}
                </Button>
                <Button>Nạp thêm tiền tiết kiệm </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setCurrentAccount(record);
                  setModalDK(true);
                }}
              >
                Đăng ký gói{" "}
              </Button>
            )}
          </>
        );
      },
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
                ...item,
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
      {modalDkPackage && (
        <AddPackage
          open={modalDkPackage}
          setOpen={setModalDK}
          callback={() => {}}
        />
      )}
      {modalCancelPackage && (
        <ModalCancelPackage
          currentAccount={currentAccount}
          open={modalCancelPackage}
          setOpen={setModalCancelPackage}
          callback={() => {}}
        />
      )}
      {modalTakeInterest && (
        <ModalTakeInterest
          currentAccount={currentAccount}
          open={modalTakeInterest}
          setOpen={setModalTakeInterest}
          callback={() => {}}
        />
      )}
    </SInnerSidebar>
  );
}
