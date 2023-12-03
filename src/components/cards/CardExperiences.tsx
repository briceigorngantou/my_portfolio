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
  bgcolor,
  listItems,
  content,
  mission
}: CardExperiencesInterface) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width,
        height,
        style,
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
                whiteSpace={'nowrap'}
                color={theme.palette.secondary.main}
                fontWeight={500}
              >
                {title}
                <Typography
                  fontSize={10}
                  fontStyle={'italic'}
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
          color={theme.palette.primary.main}
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
          color={theme.palette.primary.main}
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
      </CardContent>
    </Card>
  );
}
