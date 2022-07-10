import axios from "axios";

export const fetchExerices = async (route: string) => {
  const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}`, {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || '',
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
  return response.data;
};
