import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFeaturedCreators = createAsyncThunk("creators", async () => {
  try {
    const data = await axios.get(
      "http://boax.alshumaal.com/admin/admin/api/Creators/readFeaturedCreators.php"
    );
    console.log(data.data, "hello");
    return data.data.Creators;
  } catch (error) {
    console.log(error, "error");
  }
});
