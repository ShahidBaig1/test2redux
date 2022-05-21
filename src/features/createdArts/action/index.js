import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCreatedArts = createAsyncThunk(
  "createdArts",
  async (payload) => {
    try {
      const data = await axios.get(
        `http://boax.alshumaal.com/api/Creators/Profile?username=${payload}`
      );
      console.log(data.data, "hello");
      return data.data;
    } catch (error) {
      console.log(error, "error");
    }
  }
);
