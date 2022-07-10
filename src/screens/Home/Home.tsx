import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Banner, Exercises, SearchExercises } from "../../components";
import { bodyPart, fetchBodyParts } from "../../redux/bodypart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  exercises,
  fetchExercises,
} from "../../redux/exercises";

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
