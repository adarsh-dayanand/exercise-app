import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import { COLORS } from '../constants/colors';

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent='space-around' sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/">
            <img src={Logo} alt="logo" style={styles.image} />
        </Link>
        <Stack direction={'row'} gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to="/" style={styles.home}>Home</Link>
            <a href='#exercises' style={styles.exercises}>Exercises</a>
        </Stack>
    </Stack>
  )
};


const styles = {
    image: {
        width: '30px',
        height: '30px',
        margin: '0 20px'
    },
    home: {
        textDecoration: 'none',
        color: COLORS.DARK_MAROON,
        borderBottom: '3px solid ' + COLORS.LIGHT_RED
    },
    exercises: {
        textDecoration: 'none',
        color: '#3a1212'
    },
};

export default Navbar