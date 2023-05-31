// sidebar routes icons

import {
  MdOutlineHome,
  MdDomain,
  MdOutlineModeEdit,
  MdLockOutline,
} from "react-icons/md";
import {
  BsPersonExclamation,
  BsGraphUpArrow,
  BsPersonVcardFill,
} from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiOutlineLogout, AiOutlineUserAdd } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi";

// Side bar Routes

export const sidebarRoutes = [
  {
    id: 1,
    path: "/home/edit_profile",
    name: "Home",
    icon: <MdOutlineHome />,
  },
  {
    id: 2,
    path: "/peronal_detail",
    name: "Personal details",
    icon: <BsPersonExclamation />,
    exact: true,
  },
  {
    id: 3,
    path: "/company_detail",
    name: "Company details",
    icon: <MdDomain />,
    exact: true,
  },
  {
    id: 4,
    path: "/analytics",
    name: "Analytics",
    icon: <BsGraphUpArrow />,
    exact: true,
  },
  {
    id: 5,
    path: "/domain",
    name: "Domain",
    icon: <TbWorld />,
    exact: true,
  },
  {
    id: 6,
    path: "/logout",
    name: "Logout",
    icon: <AiOutlineLogout />,
    exact: true,
  },
];

//  Side Bar routes 

export const homeMenu = [
  {
    id: 1,
    path: "/home/edit_profile",
    name: "Edit profile",
    icon: <MdOutlineModeEdit />,
  },
  {
    id: 2,
    path: "/home/manage_users",
    name: "Manage users",
    icon: <AiOutlineUserAdd />,
    exact: true,
  },
  {
    id: 3,
    path: "/home/plan",
    name: "Plan and billing",
    icon: <HiOutlineCreditCard />,
    exact: true,
  },
  {
    id: 4,
    path: "/home/personal_signature",
    name: "Personal signature",
    icon: <BsPersonVcardFill />,
    exact: true,
  },
  {
    id: 5,
    path: "/home/company_signature",
    name: "Company signature",
    icon: <MdDomain />,
    exact: true,
  },
  {
    id: 7,
    path: "/home/support",
    name: "Support",
    icon: <RiCustomerService2Fill />,
    exact: true,
  },
  {
    id: 6,
    path: "/home/security",
    name: "Security",
    icon: <MdLockOutline />,
    exact: true,
  },
];
