import React from "react";
import outstanding from "../../../../assets/Icons/outstandings.svg";
import services from "../../../../assets/Icons/services-request.svg";
import deliver from "../../../../assets/Icons/delivery-parcel.svg";
import help from "../../../../assets/Icons/help.svg";
import circle from "../../../../assets/Icons/circle-svg.svg";
import Icon from "../../../../components/Icon";
import { useHistory } from "react-router-dom";

const CardSection = () => {
  const history = useHistory();
  const cardDetails = [
    {
      numb: "$ 1000.00",
      title: "Outstaning",
      icon: outstanding,
      viewAction: "View All",
      action: "Pay Now",
      path: "/charges",
      subPath: "/pay",
      bgLinear: "bg-red-linear",
    },
    {
      numb: "$ 1000.00",
      title: "Services Request",
      icon: services,
      viewAction: "View All",
      action: "New Request",
      path: "/services-request",
      subPath: "/create-service-request",
      bgLinear: "bg-green-linear",
    },
    {
      numb: "3",
      title: "Deliveries",
      icon: deliver,
      viewAction: "View All",
      action: "",
      path: "/deliveries",
      subPath: "/",
      bgLinear: "bg-blue-linear",
    },
    {
      numb: "(905) 456 456",
      title: "Need Help",
      icon: help,
      viewAction: "Send Email",
      action: "",
      bgLinear: "bg-orange-linear",
    },
  ];
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {cardDetails.map((item, i) => {
        return (
          <div
            key={i}
            className={`relative rounded-md p-5 shadow-light-gray ${item.bgLinear}`}
          >
            <div className="flex justify-between">
              <div className="">
                <div className="text-white text-xl font-bold">{item.numb}</div>
                <div className="text-white text-md font-normal">
                  {item.title}
                </div>
              </div>
              <div className="">
                <Icon src={item.icon} height="auto" />
              </div>
            </div>
            <div className="flex justify-between">
              <div
                className="text-white text-sm font-medium cursor-pointer z-50"
                onClick={() => history.push(`${item.path}`)}
              >
                {item.viewAction}
              </div>
              <div
                className="text-white text-sm font-medium cursor-pointer z-50"
                onClick={() => history.push(`${item.subPath}`)}
              >
                {item.action}
              </div>
            </div>
            <div className="absolute -right-5 -top-2">
              <Icon src={circle} height="auto" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
