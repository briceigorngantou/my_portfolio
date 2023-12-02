import { Typography, CircularProgress, Backdrop } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { loadingInterface } from '../../interfaces/loading/loading.interface';

function Loading({ loadingMsg, isLoading }: loadingInterface) {
  const theme = useTheme();

  return (
    <Backdrop
      sx={{
        color: theme.palette.secondary.main,
        zIndex: (themes) => themes.zIndex.drawer + 100
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
      <Typography>{loadingMsg || 'Processing...'}</Typography>
    </Backdrop>
  );
}

export default Loading;
