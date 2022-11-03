import type { RouteProps } from "react-router-dom";

import Dashboard_Blue from "../assets/Icons/menuIcon/bar_chart.svg";
import Dashboard_White from "../assets/Icons/menuIcon/bar_white.svg";
import BankIcon from "../assets/Icons/menuIcon/bank-setup.svg";
import Bank_Blue from "../assets/Icons/menuIcon/bank_blue.svg";
import DeliveryIcon from "../assets/Icons/menuIcon/delivery-parcel.svg";
import Delivery_Blue from "../assets/Icons/menuIcon/deliveries_blue.svg";
import Charges_White from "../assets/Icons/menuIcon/charges.svg";
import Charges_Blue from "../assets/Icons/menuIcon/charges_blue.svg";
import DocumentIcon from "../assets/Icons/menuIcon/document.svg";
import Document_Blue from "../assets/Icons/menuIcon/document_blue.svg";
import HelpIcon from "../assets/Icons/menuIcon/help.svg";
import Help_Blue from "../assets/Icons/menuIcon/help_blue.svg";
import RenewalIcon from "../assets/Icons/menuIcon/lease-renewal.svg";
import Renewal_Blue from "../assets/Icons/menuIcon/lease_blue.svg";
import ServicesIcon from "../assets/Icons/menuIcon/services-request.svg";
import Services_Blue from "../assets/Icons/menuIcon/service_blue.svg";
import Charges from "../pages/Charges";
import Dashboard from "../pages/Dashboard";
import BankSetup from "../pages/BankSetup";
import Deliveries from "../pages/Deliveries";
import Document from "../pages/Document";
import Help from "../pages/Help";
import LeaseRenewal from "../pages/LeaseRenewal";
import ServiceRequest from "../pages/ServiceRequest";

export interface IRoute extends Omit<RouteProps, "component"> {
  path: string;
  title: string;
  component: string;
  icon: string;
}

export const routes = [
  {
    path: "/",
    exact: true,
    title: "dashboard",
    component: Dashboard,
    icon: Dashboard_White,
    activeIcon: Dashboard_Blue,
  },
  {
    path: "/deliveries",
    exact: true,
    title: "deliveries",
    component: Deliveries,
    icon: DeliveryIcon,
    activeIcon: Delivery_Blue,
  },
  {
    path: "/charges",
    exact: true,
    title: "charges",
    component: Charges,
    icon: Charges_White,
    activeIcon: Charges_Blue,
  },
  {
    path: "/services-request",
    exact: false,
    title: "services_request",
    component: ServiceRequest,
    icon: ServicesIcon,
    activeIcon: Services_Blue,
  },
  {
    path: "/lease-renewal",
    exact: true,
    title: "lease_renewal",
    component: LeaseRenewal,
    icon: RenewalIcon,
    activeIcon: Renewal_Blue,
  },
  {
    path: "/document",
    exact: true,
    title: "documents",
    component: Document,
    icon: DocumentIcon,
    activeIcon: Document_Blue,
  },
  {
    path: "/bank-setup",
    exact: true,
    title: "bank_setup",
    component: BankSetup,
    icon: BankIcon,
    activeIcon: Bank_Blue,
  },
  {
    path: "/help",
    exact: true,
    title: "help",
    component: Help,
    icon: HelpIcon,
    activeIcon: Help_Blue,
  },
];
