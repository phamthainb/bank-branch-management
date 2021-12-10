import { IconType } from "react-icons";
import { FaDollarSign, FaMoneyBillWave, FaMoneyCheckAlt, FaRegUser } from "react-icons/fa";
import { MdAssignmentInd, MdSupervisorAccount, MdSwapHoriz } from "react-icons/md";
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
    name: "Nạp tiền",
    route: "/",
    icon: <FaDollarSign />,
    component: <Accountmanagement />
  },
  {
    name: "Chuyển tiền",
    route: "/",
    icon: <FaMoneyBillWave />,
    component: <Accountmanagement />
  },
  {
    name: "Lịch sử giao dịch",
    route: "/",
    icon: <MdSwapHoriz />,
    component: <Accountmanagement />
  },
  {
    name: "Cập nhật thông tin",
    route: "/",
    icon: <MdAssignmentInd />,
    component: <Accountmanagement />
  },
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