import { createSlice } from "@reduxjs/toolkit";

export interface IValidateProps {
  open: boolean;
}
const initialState: IValidateProps = {
  open: false,
};

const ValidationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setOpen: (state: IValidateProps, action) => {
      const { payload } = action;
      state.open = payload;
    },
  },
});

export const { setOpen } = ValidationSlice.actions;
export const getOpen = (state: any) => state.validation?.open;
export default ValidationSlice;
