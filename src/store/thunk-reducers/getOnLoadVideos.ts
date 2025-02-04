import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API } from "../../constants/youtubeconfig";
import axios from "axios";

export const getOnLoadVideos = createAsyncThunk(
  "youtube/getOnLoadVideos",
  async () => {
    try {
      // gettign most populat videos in india
      const response = await axios.get(`${YOUTUBE_API}`);
      return response.data;
    } catch (error: any) {
      console.log(error?.response?.data?.error?.message);
      return error;
    }
  }
);
