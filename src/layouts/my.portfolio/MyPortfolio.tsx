import { Grid } from '@mui/material';
import React from 'react';
import Title from '../../components/title/Title';
import { imageHome } from '../../constants/data';
import PictureMobileStepper from '../pictureMobileStepper/PictureMobileStepper';

export default function MyPortfolio() {
  return (
    <Grid container xs={12} alignItems={'center'} justifyContent={'center'}>
      <Grid sx={{ width: '40%' }} margin={5}>
        <Title title="MON PORTFOLIO" />
      </Grid>
      <Grid>
        <PictureMobileStepper pictures={imageHome} />
      </Grid>
    </Grid>
  );
}
