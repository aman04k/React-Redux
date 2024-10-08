import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

console.log("userList:", userList);  // Check if this logs the correct data

const userSlice = createSlice({
    name: "user",
    initialState: userList,
    reducers: { }
})

export default userSlice.reducer;
