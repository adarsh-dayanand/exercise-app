import { useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";

import { useAppSelector } from "../redux/hooks";
import { searchedExercise } from "../redux/exercises";
import { ExerciseCard } from ".";

const Exercises = () => {
  const searchExercise = useAppSelector(searchedExercise);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = searchExercise.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e: any, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      {currentExercises.length !== 0 && (
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
      )}
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises &&
          currentExercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {searchExercise.length > 9 && (
          <Pagination
            color="standard"
            shape="circular"
            defaultPage={1}
            count={Math.ceil(searchExercise.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
