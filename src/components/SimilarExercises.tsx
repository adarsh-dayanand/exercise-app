import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import { HorizontalScrollBar } from '.';
import { Loader } from '.';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }: any) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', textTransform: 'capitalize' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' }, textTransform: 'capitalize' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
  )
}

export default SimilarExercises