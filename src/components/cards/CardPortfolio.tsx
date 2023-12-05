/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { CardPortfolioInterface } from '../../interfaces/cards/cardsPortfolio.interface';
import PictureMobileStepper from '../../layouts/pictureMobileStepper/PictureMobileStepper';

export default function CardPortfolio({
  style,
  title,
  company,
  pictures,
  width,
  height,
  color,
  bgcolor,
  content,
  googlePlayLink,
  googlePlayImage,
  website
}: CardPortfolioInterface) {
  const theme = useTheme();
  const minWidth600 = useMediaQuery('(min-width:600px)');
  return (
    <Card
      sx={{
        width: minWidth600 ? width : 350,
        // height,
        style,
        padding: 2,
        borderRadius: 5,
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
        color
      }}
    >
      <PictureMobileStepper
        pictures={pictures}
        width={minWidth600 ? width : 350}
        height={minWidth600 ? height : 300}
      />
      <Divider />
      <CardHeader
        sx={{
          marginTop: 2,
          textAlign: 'left'
        }}
        title={
          <Grid xs={12} justifyContent="left" display={'flex'}>
            <Grid xs={6}>
              <Typography
                fontSize={18}
                whiteSpace={minWidth600 ? 'nowrap' : undefined}
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                {title}
              </Typography>
            </Grid>
            <Grid xs={6} textAlign={'right'}>
              <Typography
                fontSize={18}
                whiteSpace={'nowrap'}
                color={theme.palette.secondary.main}
                fontWeight={400}
                sx={{ opacity: 0.8 }}
              >
                {company}
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        <Grid container xs={12}>
          <Typography
            fontSize={16}
            color={theme.palette.secondary.main}
            textAlign={'justify'}
          >
            {content}
          </Typography>
        </Grid>
        <Grid xs={12} justifyContent="left" display={'flex'} marginTop={3}>
          {googlePlayImage && (
            <Grid xs={6} marginRight={1}>
              <a
                href={googlePlayLink}
                target="blank"
                style={{ textDecorationLine: 'none' }}
              >
                <img src={googlePlayImage} alt="icon" style={{ width: 150 }} />
              </a>
            </Grid>
          )}
          <Grid xs={6} marginRight={1} marginTop={1} textAlign={'right'}>
            <a
              href={website}
              target="blank"
              style={{ cursor: 'pointer', textDecorationLine: 'none' }}
            >
              <Typography
                fontSize={16}
                whiteSpace={'nowrap'}
                color={theme.palette.secondary.light}
              >
                Voir le site
              </Typography>
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
