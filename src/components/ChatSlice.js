import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state =
        state.messages.length <= 25
          ? state.messages.unshift(action.payload)
          : state.messages.splice(8, 15);
    },
  },
});

export default ChatSlice.reducer;
export const { addMessage } = ChatSlice.actions;
