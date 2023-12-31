/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { CardExperiencesInterface } from '../../interfaces/cards/cardsExperiences.interface';

export default function CardExperiences({
  style,
  title,
  subtitle,
  location,
  date,
  company,
  picture,
  width,
  height,
  color,
  content,
  mission,
  result
}: CardExperiencesInterface) {
  const minWidth625 = useMediaQuery('(min-width:625px)');
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: width,
        minWidth: 350,
        height: minWidth625 ? height : undefined,
        style,
        borderRadius: 5,
        padding: 2,
        marginBottom: 3,
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
        color
      }}
    >
      <CardHeader
        sx={{
          marginTop: 2,
          textAlign: 'left'
        }}
        title={
          <Grid xs={12} justifyContent="left" display={'flex'} marginBottom={1}>
            <Grid xs={6} marginRight={1}>
              <Typography
                fontSize={20}
                whiteSpace={minWidth625 ? 'nowrap' : undefined}
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                {title}
                <Typography
                  fontSize={10}
                  fontStyle={'italic'}
                  sx={{ opacity: 0.6 }}
                  color={theme.palette.primary.main}
                  whiteSpace={'nowrap'}
                >
                  {subtitle}
                </Typography>
                <Typography
                  fontSize={14}
                  whiteSpace={'nowrap'}
                  color={theme.palette.primary.main}
                >
                  {date}
                </Typography>
              </Typography>
            </Grid>
            <Grid xs={6} marginRight={1} textAlign={'right'}>
              <Typography
                fontSize={20}
                whiteSpace={'nowrap'}
                color={theme.palette.secondary.main}
                fontWeight={500}
              >
                {company}
                <Typography
                  fontSize={10}
                  fontStyle={'italic'}
                  sx={{ opacity: 0.6 }}
                  color={theme.palette.primary.main}
                  whiteSpace={'nowrap'}
                >
                  {location}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <Divider />
      <CardContent sx={{ marginTop: 1 }}>
        <Typography
          fontWeight={500}
          fontSize={16}
          color={theme.palette.secondary.light}
          whiteSpace={'nowrap'}
        >
          Missions :
        </Typography>
        <Typography fontSize={16} color={theme.palette.primary.main}>
          {mission}
        </Typography>
        <br />
        <Typography
          fontWeight={500}
          fontSize={16}
          color={theme.palette.secondary.light}
          whiteSpace={'nowrap'}
        >
          Tâches :
        </Typography>
        <Grid>
          {content?.map((item, key) => (
            <ul>
              <li key={key}>
                <Typography fontSize={16} color={theme.palette.primary.main}>
                  {item?.label}
                </Typography>
              </li>
            </ul>
          ))}
        </Grid>
        {result && (
          <>
            <br />
            <Typography
              fontWeight={500}
              fontSize={16}
              color={theme.palette.secondary.light}
              whiteSpace={'nowrap'}
            >
              Résultats :
            </Typography>
            <Grid>
              <ul>
                <li>
                  <Typography fontSize={16} color={theme.palette.primary.main}>
                    {result}
                  </Typography>
                </li>
              </ul>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
}
