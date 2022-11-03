import { createSlice } from "@reduxjs/toolkit";

export interface IUserInfo {
  email: string;
  password: string;
  remeberMe: boolean;
}

export interface AuthState {
  userInfo: IUserInfo;
  isAuth: boolean;
}
let localStore: any = localStorage.getItem("userInfo");
let localAuth: any = localStorage.getItem("isAuth");
const initialState: AuthState = {
  userInfo: {
    email: JSON.parse(localStore) ? JSON.parse(localStore)?.email : "",
    password: JSON.parse(localStore) ? JSON.parse(localStore)?.password : "",
    remeberMe: JSON.parse(localStore)
      ? JSON.parse(localStore)?.remeberMe
      : false,
  },
  isAuth: JSON.parse(localAuth) ? JSON.parse(localAuth) : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => (state = initialState),
    setLogin: (state: AuthState, action) => {
      state.userInfo = action.payload;
    },
    setIsAuth: (state: AuthState, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", JSON.stringify(action.payload));
    },
  },
});

export const { setIsAuth, setLogin } = authSlice.actions;
export const getUserInfo = (state: any) => state.auth?.userInfo;
export const getAuth = (state: any) => state.auth?.isAuth;
export default authSlice;
