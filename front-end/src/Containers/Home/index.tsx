import "antd/dist/antd.css";
import { Table } from "antd";
import { columns, dataSource } from "./data";

function Home() {
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}

export default Home;
