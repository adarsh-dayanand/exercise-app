import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { COLORS } from "../constants/colors";

const ExerciseCard = ({ exercise }: any) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: COLORS.WHITE,
            backgroundColor: COLORS.LIGHT_ORANGE,
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: COLORS.WHITE,
            backgroundColor: COLORS.LIGHT_YELLOW,
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="22px" fontWeight="bold" fontSize="22px" mt="11px" pb="10px" color={COLORS.BLACK} textTransform="capitalize">{exercise.name}</Typography>
    </Link>
  );
};

export default ExerciseCard;
