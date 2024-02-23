import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  loginState: false,
  isLoading: false,
  user:null
};
//async thunk api
export const getAllUsers = createAsyncThunk(
  "general/getAllUsers",
  async (_, thunkApi) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {}
    console.log(error);
  }
);

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    //(state,action)
    increment: (state, action) => {
      console.log(action);
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter === 0 ? 0 : state.counter - 1;
    },
    reset: (state, action) => {
      const { resetValue, name } = action.payload;
      console.log("my name is ", name);
      state.counter = resetValue;
    },
    login: (state, action) => {
      state.loginState = true;
    },
    logout: (state, action) => {
      state.loginState = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, action) => {
        state.isLoading=true; 
        state.user=null;


      })
    
      .addCase(getAllUsers.fulfilled, (state, action) => {
        console.log(action.payload); 
        state.isLoading=false;
        state.user=action.payload;
        // Access action payload here
        // Update state based on the fulfilled action if needed
      })
    
      .addCase(getAllUsers.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading=false;
        state.user=null;
         // Access action payload here
        // Update state based on the fulfilled action if needed
      })
    }
  
//   extraReducers: {
//     [getAllUsers.pending]: (state, action) => {
//       state.isLoading=true;
//       console.log(action);
//     },
//     [getAllUsers.fulfilled]: (state, action) => {
//       console.log(action);
//     },
//     [getAllUsers.rejected]: (state, action) => {
//       console.log(action);
//     },
//   },
});

export const { increment, decrement, reset, login, logout } =
  generalSlice.actions;
export default generalSlice.reducer;
