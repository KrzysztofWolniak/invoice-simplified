import { createSlice } from "@reduxjs/toolkit";
interface invoiceState {
  value: number;
}

const initialState: invoiceState = {
  value: 0,
};
export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});
const {} =  invoiceSlice.actions
export default invoiceSlice.reducer