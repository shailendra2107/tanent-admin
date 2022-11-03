import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../components/Icon";
import { routes } from "../../router/routes";

const Navigate = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" bg-dark-purple p-2 shadow-purple">
      <ul className=" hidden lg:flex lg:h-fit  justify-around">
        {routes.map((item, i) => {
          return (
            <li
              key={i}
              className={`${
                location.pathname === item.path ? "bg-white" : "bg-transparent"
              } font-medium px-4 py-1 rounded-md`}
            >
              <Link to={item.path}>
                <div className="flex">
                  <div className="mr-1">
                    <Icon
                      src={
                        location.pathname !== item.path
                          ? item.icon
                          : item.activeIcon
                      }
                      height="auto"
                    />
                  </div>
                  <div
                    className={`${
                      location.pathname === item.path
                        ? "text-dark-purple"
                        : "text-white"
                    }`}
                  >
                    {t(item.title)}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <section className="MOBILE-MENU relative  lg:hidden">
        <div
          className="text-white w-10 h-10 relative focus:outline-none "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div className="block w-5 absolute right-1 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isNavOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isNavOpen && "opacity-0"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isNavOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>

        <div
          className={
            isNavOpen
              ? "    flex flex-col items-start justify-evenly z-10"
              : "hidden"
          }
        >
          <ul className="flex flex-col w-full justify-around">
            {routes.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    location.pathname === item.path
                      ? "bg-white"
                      : "bg-transparent"
                  } font-medium px-4 py-1 rounded-md`}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <div className="flex">
                      <div className="">
                        <Icon
                          src={
                            location.pathname !== item.path
                              ? item.icon
                              : item.activeIcon
                          }
                          height="auto"
                        />
                      </div>
                      <div
                        className={`${
                          location.pathname === item.path
                            ? "text-dark-purple"
                            : "text-white"
                        }`}
                      >
                        {t(item.title)}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navigate;
