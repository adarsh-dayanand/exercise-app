import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Banner, Exercises, SearchExercises } from "../../components";
import { fetchBodyParts } from "../../redux/bodypart";
import { useAppDispatch } from "../../redux/hooks";
import { fetchExercises } from "../../redux/exercises";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
    dispatch(fetchExercises());
  }, []);

  return (
    <Box>
      <Banner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
