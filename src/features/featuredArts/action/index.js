import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFeaturedArts = createAsyncThunk("arts", async () => {
  try {
    const data = await axios.get("http://boax.alshumaal.com/admin/admin/api/nfts/readFeaturedArt.php");
    console.log(data.data, "hello");
    return data.data;
  } catch (error) {
    console.log(error, "error");
  }
});