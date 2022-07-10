import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { COLORS } from '../constants/colors';

const Footer = () => {
  return (
   <Box mt="80px" bgcolor={COLORS.FOOTER} width="100%">
    <Stack gap="40px" alignItems="center" pt="24px" px="40px">
      <img src={Logo} alt="logo" width="100px" height="50px" color={COLORS.WHITE}/>
      <Typography variant="h4" pb="30px" mt="10px" textAlign="center" textTransform="capitalize" fontFamily="revert" fontSize="18px" color={COLORS.WHITE}>
        Made with ❤️ by Adarsh D
      </Typography> 
    </Stack>
   </Box>
  )
}

export default Footer