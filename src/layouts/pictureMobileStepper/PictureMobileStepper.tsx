/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ButtonIcon from '../../components/forms/ButtonIcon';
import { PictureMobileStepperInterface } from '../../interfaces/pictureMobileStepper/pictureMobileStepper.interface';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function PictureMobileStepper({
  width,
  height,
  pictures
}: PictureMobileStepperInterface) {
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
    <Box width={width} justifyContent={'center'} alignItems={'center'}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {pictures.map((step, index) => (
          <div
            key={index}
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                src={step.pic}
                alt="portfolio image"
                loading="lazy"
                style={{
                  width,
                  height: height || 400,
                  textAlign: 'center'
                }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: theme.palette.background.paper }}
        nextButton={
          <ButtonIcon
            size="medium"
            onPress={handleNext}
            disabled={activeStep === maxSteps - 1}
            icon={
              theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )
            }
            style={{ color: theme.palette.primary.dark }}
          />
        }
        backButton={
          <ButtonIcon
            size="medium"
            style={{ color: theme.palette.primary.dark }}
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
