import { IconType } from "react-icons";
import { FaRegUser } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";

export const menu = [
  {
    title: "Profile",
    href: '/profile'
  },
];

export interface IRole {
  name: string,
  icon: any,
}

export const roleStaff: IRole[] = [
  {
    name: "Quản lý khách hàng",
    icon: <FaRegUser />,
  },
  {
    name: "Quản lý tài khoản",
    icon: <MdSupervisorAccount />,
  }
]
export const roleCustomer: IRole[] = [
  {
    name: "Quản lý tài khoản",
    icon: <MdSupervisorAccount />,
  },
  {
    name: "Quản lý người dùng",
    icon: <MdSupervisorAccount />,
  }
]
export const roleAdmin: IRole[] = [
  {
    name: "Quản lý Admin",
    icon: <FaRegUser />,
  },
  {
    name: "Quản lý Admin",
    icon: <FaRegUser />,
  },
]