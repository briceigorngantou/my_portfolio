/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './styles.css';
import ButtonIcon from '../../components/forms/ButtonIcon';
import { PictureMobileStepperInterface } from '../../interfaces/pictureMobileStepper/pictureMobileStepper.interface';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function PictureMobileStepper({ pictures }: PictureMobileStepperInterface) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = pictures.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '20%', flexGrow: 1 }} className="picture">
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {pictures.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 600,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%'
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
            <Typography
              fontSize={38}
              fontWeight={'bold'}
              sx={{
                position: 'absolute',
                top: '30%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                opacity: 0.9,
                justifyContent: 'center',
                height: 90,
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.dark
              }}
            >
              {pictures[activeStep].label}
            </Typography>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: theme.palette.primary.dark }}
        nextButton={
          <ButtonIcon
            size="small"
            onPress={handleNext}
            disabled={activeStep === maxSteps - 1}
            icon={
              theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )
            }
            style={{ color: theme.palette.primary.main }}
          />
        }
        backButton={
          <ButtonIcon
            size="small"
            style={{ color: theme.palette.primary.main }}
            onPress={handleBack}
            disabled={activeStep === 0}
            icon={
              theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )
            }
          />
        }
      />
    </Box>
  );
}

export default PictureMobileStepper;
