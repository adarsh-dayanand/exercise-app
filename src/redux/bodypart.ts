import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface CounterState {
  bodyPartsList: Array<any>;
  bodyPart: String;
  status: String;
}

const initialState: CounterState = {
  bodyPartsList: [],
  bodyPart: 'all',
  status: ''
};

export const fetchBodyParts = createAsyncThunk(
  'exerices/fetchBodyParts',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/bodyPartList`, {
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || '',
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });
    return response.data;
  }
);

export const bodypartSlice = createSlice({
  name: 'bodypart',
  initialState,
  reducers: {
    setBodyPart: (state, action: PayloadAction<any>) => {
      state.bodyPart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBodyParts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBodyParts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.bodyPartsList = action.payload;
      })
      .addCase(fetchBodyParts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setBodyPart } = bodypartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const bodyPartsList = (state: RootState) => state.bodypart.bodyPartsList;
export const bodyPart = (state: RootState) => state.bodypart.bodyPart;
export const bodyPartStatus = (state: RootState) => state.bodypart.status;

export default bodypartSlice.reducer;
