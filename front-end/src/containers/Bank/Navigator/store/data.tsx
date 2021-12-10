import { IconType } from "react-icons";
import { FaRegUser } from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import Accountmanagement from "../../SidebarStaff/Accountmanagement";

export const menu = [
  {
    title: "Profile",
    href: '/profile'
  },
];
export interface IRole {
  name: string,
  icon: any,
  route: string,
  component: any,
}

export const roleStaff: IRole[] = [
  {
    name: "Quản lý khách hàng",
    icon: <FaRegUser />,
    route: "/bank/staff/customer-management",
    component: <Accountmanagement />
  },
  {
    name: "Quản lý tài khoản",
    icon: <MdSupervisorAccount />,
    route: "/bank/staff/account-management",
    component: <Accountmanagement />
  }
]

export const roleCustomer: IRole[] = [
  {
    name: "Quản lý tài khoản",
    icon: <MdSupervisorAccount />,
    route: "/",
    component: <Accountmanagement />
  },
  {
    name: "Quản lý người dùng",
    icon: <MdSupervisorAccount />,
    route: "/",
    component: <Accountmanagement />
  }
]

export const roleAdmin: IRole[] = [
  {
    name: "Quản lý Admin",
    icon: <FaRegUser />,
    route: "/",
    component: <Accountmanagement />
  },
  {
    name: "Quản lý Admin",
    icon: <FaRegUser />,
    route: "/",
    component: <Accountmanagement />
  },
]