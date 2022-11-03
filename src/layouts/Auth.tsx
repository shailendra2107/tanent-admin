import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Switch } from 'react-router-dom';
import ButtonWrapper from "../components/Form/Buttons/ButtonWrapper";
import InputWrapper from "../components/Form/Inputs/InputWrapper";
import Switch from "../components/Form/Switch/Switch";
import { IUserProps } from "../models/interface";
import { setIsAuth, setLogin } from "../store/auth";
import { useAppDispatch } from "../store/hook";

const Auth: React.FC<any> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IUserProps>({});
  const dispatch = useAppDispatch();

  const onHandleChange = (e: any) => {
    const { name, value, checked } = e.target;
    if (name === "rememberMe") {
      setUserInfo((preVal) => ({
        ...preVal,
        [name]: checked,
      }));
    } else {
      setUserInfo((preVal) => ({
        ...preVal,
        [name]: value,
      }));
    }
  };

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setLogin(userInfo));
    dispatch(setIsAuth(true));
    // let body = {
    //   UserPrincipal: userInfo.email,
    // };

    // axios
    //   .post(
    //     "https://mntb2blogindemobackend.azurewebsites.net/api/v1/AuthDemo/VerifyEmail",

    //     { EmailId: userInfo.email },

    //   )
    //   .then((res) => alert(res.data)).catch(err => console.log('err >> ', err));
  };

  return (
    <div className="min-h-screen flex h-full bg-no-repeat bg-cover w-full flex-1 bg-login-image items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2  h-screen w-full ">
        <div className="hidden md:block"></div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-dark text-3xl font-bold my-2">
            Log In to Dashboard
          </h3>
          <p className="text-sm text-light my-2">
            Enter your email and password below
          </p>
          <form onSubmit={onHandleSubmit}>
            <div className="w-96  flex flex-col mt-5">
              <div className="my-4">
                <InputWrapper
                  type="text"
                  name="email"
                  placeholder="email"
                  value={userInfo.email}
                  onHandleChange={onHandleChange}
                />
              </div>
              <div className="my-4">
                <InputWrapper
                  type="password"
                  name="password"
                  placeholder="password"
                  value={userInfo.password}
                  onHandleChange={onHandleChange}
                />
              </div>
              <div className="flex justify-between my-4">
                <div className="">
                  <Switch
                    name="rememberMe"
                    value={userInfo.rememberMe}
                    onHandleChange={onHandleChange}
                    label="Remember me "
                  />
                </div>
                <div className="">
                  <Link to={"/"}>
                    <label className="text-xs text-light-blue cursor-pointer">
                      Forgot password?
                    </label>
                  </Link>
                </div>
              </div>
              <div className="my-4">
                <ButtonWrapper
                  classNames="bg-purple rounded-lg text-white shadow-light-purple w-full"
                  type="submit"
                  text="Log In"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
