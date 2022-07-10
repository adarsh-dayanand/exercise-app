import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchExerciseDetails,
  exerciseDetail,
  exerciseVideoDetail,
  fetchExerciseVideo,
  fetchSimilarExercises,
  fetchSimilarEquipments,
  similarExercises,
  similarEquipmentExercises,
} from "../../redux/exercises";

import { Details, ExerciseVideos, SimilarExercises } from "../../components";

const ExerciseDetail = () => {
  const dispatch = useAppDispatch();
  const exerciseDetails = useAppSelector(exerciseDetail);
  const exerciseVideoDetails = useAppSelector(exerciseVideoDetail);
  const similarExercise = useAppSelector(similarExercises);
  const similarEquipmentExercise = useAppSelector(similarEquipmentExercises);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchExerciseDetails(id));
    dispatch(fetchExerciseVideo(exerciseDetails.name));
    dispatch(fetchSimilarExercises(exerciseDetails.target));
    dispatch(fetchSimilarEquipments(exerciseDetails.equipment));
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetails} />
      {exerciseDetails.id === id && (
        <ExerciseVideos
          exerciseVideos={exerciseVideoDetails}
          name={exerciseDetails.name}
        />
      )}
      {exerciseDetails.id === id && (
        <SimilarExercises
          targetMuscleExercises={similarExercise}
          equipmentExercises={similarEquipmentExercise}
        />
      )}
    </Box>
  );
};

export default ExerciseDetail;
