import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface ExerciseDetailInterface {
  bodyPart: String;
  equipment: String;
  gifUrl: String;
  id: any;
  name: String;
  target: String;
}

export interface CounterState {
  exercisesList: Array<any>;
  searchedExercises: Array<any>;
  exerciseDetail: ExerciseDetailInterface;
  exerciseVideoDetail: Array<any>;
  similarExercises: Array<any>;
  similarEquipment: Array<any>;
  status: String;
}

const initialState: CounterState = {
  exercisesList: [],
  searchedExercises: [],
  exerciseDetail: {
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: 0,
    name: "",
    target: "",
  },
  exerciseVideoDetail: [],
  similarExercises: [],
  similarEquipment: [],
  status: "",
};

export const fetchExercises = createAsyncThunk(
  "exerices/fetchExercises",
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}`, {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    });
    return response.data;
  }
);

export const fetchExerciseForBodyPart = createAsyncThunk(
  "exerices/fetchExerciseForBodyPart",
  async (bodypart: String) => {
    const response = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}/bodyPart/${bodypart}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    return response.data;
  }
);

export const fetchExerciseDetails = createAsyncThunk(
  "exerices/fetchExerciseDetails",
  async (id: any) => {
    const response = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}/exercise/${id}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    return response.data;
  }
);

export const fetchExerciseVideo = createAsyncThunk(
  "exerices/fetchExerciseVideo",
  async (name: String) => {
    const response = await axios.get(
      encodeURI(`${process.env.REACT_APP_YOUTUBE_SEARCH_URL}/search?query=${name}`),
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      }
    );
    return response.data.contents;
  }
);

export const fetchSimilarExercises = createAsyncThunk(
  "exerices/fetchSimilarExercises",
  async (target: String) => {
    const response = await axios.get(
      encodeURI(`${process.env.REACT_APP_ENDPOINT}/exercises/target/${target}`),
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    console.log("TARGET => ", response.data);
    return response.data;
  }
);

export const fetchSimilarEquipments = createAsyncThunk(
  "exerices/fetchSimilarEquipments",
  async (equipment: String) => {
    const response = await axios.get(
     encodeURI( `${process.env.REACT_APP_ENDPOINT}/exercises/equipment/${equipment}`),
      {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );
    console.log("equipment => ", response.data);

    return response.data;
  }
);

export const exerciseSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setSearchedExercise: (state, action: PayloadAction<any>) => {
      state.searchedExercises = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // GET EXERCISE LIST
      .addCase(fetchExercises.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.status = "idle";
        state.exercisesList = action.payload;
      })
      .addCase(fetchExercises.rejected, (state) => {
        state.status = "failed";
      })

      // GET SELECTED EXERCISE LIST
      .addCase(fetchExerciseForBodyPart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExerciseForBodyPart.fulfilled, (state, action) => {
        state.status = "idle";
        state.searchedExercises = action.payload;
      })
      .addCase(fetchExerciseForBodyPart.rejected, (state) => {
        state.status = "failed";
      })

      // GET EXERCISE DETAILS
      .addCase(fetchExerciseDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExerciseDetails.fulfilled, (state, action) => {
        state.status = "idle";
        state.exerciseDetail = action.payload;
      })
      .addCase(fetchExerciseDetails.rejected, (state) => {
        state.status = "failed";
      })

      // GET EXERCISE VIDEO DETAILS
      .addCase(fetchExerciseVideo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExerciseVideo.fulfilled, (state, action) => {
        state.status = "idle";
        state.exerciseVideoDetail = action.payload;
      })
      .addCase(fetchExerciseVideo.rejected, (state) => {
        state.status = "failed";
      })

      // GET SIMILAR EXERCISES
      .addCase(fetchSimilarExercises.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSimilarExercises.fulfilled, (state, action) => {
        state.status = "idle";
        state.similarExercises = action.payload;
      })
      .addCase(fetchSimilarExercises.rejected, (state) => {
        state.status = "failed";
      })

      // GET SIMILAR EXERCISES WITH SAME EQUIPMENT
      .addCase(fetchSimilarEquipments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSimilarEquipments.fulfilled, (state, action) => {
        state.status = "idle";
        state.similarEquipment = action.payload;
      })
      .addCase(fetchSimilarEquipments.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchedExercise } = exerciseSlice.actions;

export const exercises = (state: RootState) => state.exercises.exercisesList;
export const searchedExercise = (state: RootState) => state.exercises.searchedExercises;
export const exerciseDetail = (state: RootState) => state.exercises.exerciseDetail;
export const exerciseVideoDetail = (state: RootState) => state.exercises.exerciseVideoDetail;
export const similarExercises = (state: RootState) => state.exercises.similarExercises;
export const similarEquipmentExercises = (state: RootState) => state.exercises.similarEquipment;

export const exerciseStatus = (state: RootState) => state.exercises.status;

export default exerciseSlice.reducer;
