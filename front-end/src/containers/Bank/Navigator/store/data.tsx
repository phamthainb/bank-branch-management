import { IconType } from "react-icons";
import { FaDollarSign, FaMoneyBillWave, FaMoneyCheckAlt, FaRegUser } from "react-icons/fa";
import { MdAssignmentInd, MdSupervisorAccount, MdSwapHoriz } from "react-icons/md";

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
    name: "Nạp tiền",
    icon: <FaDollarSign />,
  },
  {
    name: "Chuyển tiền",
    icon: <FaMoneyBillWave />,
  },
  {
    name: "Lịch sử giao dịch",
    icon: <MdSwapHoriz />,
  },
  {
    name: "Cập nhật thông tin",
    icon: <MdAssignmentInd />,
  },
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