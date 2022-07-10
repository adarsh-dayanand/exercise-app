import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { bodyPart, setBodyPart } from "../redux/bodypart";
import { fetchExerciseForBodyPart } from "../redux/exercises";
import { COLORS } from "../constants/colors";

const BodyPart = ({ item }: any) => {
  const bodypart = useAppSelector(bodyPart);
  const dispatch = useAppDispatch();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodypart === item ? "4px solid" + COLORS.LIGHT_RED : '',
        backgroundColor: COLORS.WHITE,
        borderBottomLeftRadius: "20px",
        width: {xl: "270px", xs: "170px"},
        height: {xl: "280px", xs: "180px"},
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        dispatch(setBodyPart(item));
        dispatch(fetchExerciseForBodyPart(item));
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color={COLORS.DARK_MAROON} textTransform="capitalize"> {item}</Typography>
    </Stack>
  );
};

export default BodyPart;
