import React, { useState } from "react";
import Icon from "../../components/Icon";
import notification from "../../assets/Icons/notifications.svg";
import Profile from "../../assets/Icons/menuIcon/profile.svg";
import LogOut from "../../assets/Icons/menuIcon/log-out.svg";
import Search from "../../assets/Icons/menuIcon/searchIcon.svg";
import Logo from "../../assets/images/logo.png";
import { Popover, SelectBox } from "devextreme-react";
import InputWrapper from "../../components/Form/Inputs/InputWrapper";
import { searchData } from "../../CustomData";
import { MdClose, MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrayStore from "devextreme/data/array_store";
import { FaSearch } from "react-icons/fa";

const NavHeader = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [data, setData] = useState<any>(searchData);
  const [search, setSearch] = useState<string>("");
  const items = [
    {
      Name: "English",
      // Id: "en",
      ID: "English",
    },
    {
      Name: "Spanish",
      // Id: "es",
      ID: "Spanish",
    },
  ];
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    let newArr = data?.filter((val: any) => {
      if (e.target.value === "") {
        return val;
      } else if (
        val.text.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return val;
      }
      return false;
    });
    if (!newArr.length) {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  const handleChangeLan = (e: any) => {
    i18n.changeLanguage(e.value);
  };

  let datas = new ArrayStore({
    data: items,
    key: "ID",
  });
  return (
    <>
      <div className="bg-white px-4 py-2 relative">
        <div className="w-full flex justify-between">
          <div className="">
            <img src={Logo} alt="logo" className="h-10" />
          </div>
          {location.pathname === "/" && (
            <>
              <div className=" mt-1 mx-3 hidden sm:block sm:w-[60%] relative">
                <InputWrapper
                  icon={Search}
                  placeholder="What are you looking for..."
                  name="search"
                  value={search}
                  onHandleChange={(e) => handleChange(e)}
                />
                <div className={search && !hide ? "block" : "hidden"}>
                  <div
                    className={`w-full rounded-md shadow-light-gray p-2 absolute top-10 bg-white z-50`}
                  >
                    {data
                      ?.filter((val: any) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.text.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                        return false;
                      })
                      .map((name: any) => (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium p-1">
                            {name.text}
                          </span>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              let newData = data.filter(
                                (val: any) => val.text !== name.text
                              );
                              setData(newData);
                            }}
                          >
                            <MdClose fontSize={15} color="gray" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="flex items-center justify-end ">
            <div className="header">
              <SelectBox
                dataSource={datas}
                displayExpr="Name"
                className="w-20 sm:w-32"
                valueExpr="ID"
                defaultValue={items[0].Name}
                onValueChanged={handleChangeLan}
              />
              {/* <Select
                items={items}
                defaultValue={items[0].ID}
                mode="hidden"
                classNames="w-32"
                displayExpr="name"
                valueExpr="Id"
                onHandleChange={handleChangeLan}
              /> */}
            </div>
            {location.pathname === "/" && (
              <>
                <div className="flex sm:hidden mx-2">
                  <MdSearch
                    color="#1b52b1"
                    fontSize={25}
                    className="cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>
                {toggle && (
                  <div className="block sm:hidden p-3 absolute top-14 left-0 right-0 bg-white z-50 w-full">
                    <div className="relative">
                      <InputWrapper
                        icon={Search}
                        placeholder="What are you looking for..."
                        name="search"
                        value={search}
                        onHandleChange={(e) => handleChange(e)}
                      />
                      <div className={search && !hide ? "block" : "hidden"}>
                        <div
                          className={`w-full rounded-md shadow-light-gray p-2 absolute top-10 bg-white z-50`}
                        >
                          {data
                            ?.filter((val: any) => {
                              if (search === "") {
                                return val;
                              } else if (
                                val.text
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                              ) {
                                return val;
                              }
                              return false;
                            })
                            .map((name: any) => (
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium p-1">
                                  {name.text}
                                </span>
                                <div
                                  className="cursor-pointer"
                                  onClick={() => {
                                    let newData = data.filter(
                                      (val: any) => val.text !== name.text
                                    );
                                    setData(newData);
                                  }}
                                >
                                  <MdClose fontSize={15} color="gray" />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="mx-2 flex items-center">
              <Icon src={notification} height="auto" />
            </div>
            <div className="relative ">
              <span
                id="link1"
                className="rounded-full bg-slate-300 w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => setShow(!show)}
              >
                JD
              </span>
            </div>
            <Popover
              width={200}
              height={250}
              position="top"
              target="#link1"
              visible={show}
              onHiding={() => setShow(false)}
              contentRender={() => (
                <>
                  <div className="border-b p-3">
                    <div className="font-normal text-sm text-light-black my-1">
                      John Doe
                    </div>
                    <div className="font-normal text-[12px] text-black-opacity my-1">
                      johndoe@gmail.com
                    </div>
                  </div>
                  <div className="border-b p-3 flex items-center active:scale-95 transition duration-150 group hover:shadow-blue cursor-pointer">
                    <div className="font-normal text-sm text-light-black mr-3">
                      <Icon src={Profile} height="auto" />
                    </div>
                    <div className="font-normal text-sm text-light-black group-hover:text-purple group-hover:font-medium">
                      Profile
                    </div>
                  </div>
                  <div className="p-3 flex items-center active:scale-95 transition duration-150 group hover:shadow-blue cursor-pointer">
                    <div className="font-normal text-sm text-light-black mr-3 group-hover:text-purple">
                      <Icon src={LogOut} height="auto" />
                    </div>
                    <div className="font-normal text-sm text-light-black group-hover:text-purple group-hover:font-medium">
                      Sign Out
                    </div>
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
