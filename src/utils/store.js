import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "../components/ChatSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:ChatSlice
    }
})

export default store