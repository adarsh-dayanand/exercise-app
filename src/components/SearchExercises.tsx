import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { COLORS } from '../constants/colors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { exercises, setSearchedExercise } from '../redux/exercises';

import { HorizontalScrollBar } from '.';
import { bodyPartsList } from '../redux/bodypart';

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const exercisesData = useAppSelector(exercises);
  const bodyParts = useAppSelector(bodyPartsList);

  const handleSearch = async () => {
    if(search){
      const searchedExercises = exercisesData && exercisesData.filter((exc: any) => 
        exc.name.toLocaleLowerCase().includes(search) ||
        exc.target.toLocaleLowerCase().includes(search) || 
        exc.bodyPart.toLocaleLowerCase().includes(search) || 
        exc.equipment.toLocaleLowerCase().includes(search) 
      );
      // setSearch('');
      dispatch(setSearchedExercise(searchedExercises));
    }
    else if(search === ''){
      dispatch(setSearchedExercise([]));
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent={'center'} p='20px'>
      <Typography 
        fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '30px'}}}
        mb="50px"
        textAlign='center'
      >
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '5px'
            },
            width: {lg: '900px', xs: '350px'},
            backgroundColor: COLORS.WHITE,
            borderRadius: '5px'
          }}
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}
          placeholder="Search Exercises"
          type='text'
          variant='outlined'
        />
        <Button 
          className='search-btn'
          sx={{
            bgcolor: COLORS.LIGHT_RED,
            color: COLORS.WHITE,
            height: '56px',
            textTransform: 'capitalize',
            width: {lg: '130px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >SEARCH</Button>
      </Box>
      <Box
        sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollBar data={bodyParts} isBodyParts={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises