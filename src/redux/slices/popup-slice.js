import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    show: false,
    type: "",
    message: "",
  },
  reducers: {
    showPopup: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hidePopup: (state) => {
      state.show = false;
      state.type = "";
      state.message = "";
    },
  },
});

export default popupSlice.reducer;
export const popupReduxActions = popupSlice.actions;
