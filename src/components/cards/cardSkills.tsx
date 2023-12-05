/* eslint-disable react/jsx-key */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import {
  Badge,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material';
import { CardSkillsInterface } from '../../interfaces/cards/cardsSkills.interface';
import LabelIcon from '../labelIcon/LabelIcon';

export default function CardSkills({
  style,
  title,
  picture,
  width,
  height,
  color,
  bgcolor,
  listItems,
  certificate
}: CardSkillsInterface) {
  const theme = useTheme();
  const minWidth550 = useMediaQuery('(min-width:550px)');

  return (
    <>
      <Badge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        badgeContent={
          minWidth550 && (
            <img
              src={picture}
              alt="icon"
              loading="lazy"
              style={{
                width: 80,
                borderRadius: 20,
                position: 'absolute',
                left: width / 2,
                translate: '-50%'
              }}
            />
          )
        }
        sx={{ margin: 3 }}
      >
        <Card
          sx={{
            width: minWidth550 ? 550 : 330,
            height,
            borderRadius: 5,
            paddingBottom: !minWidth550 ? 2 : 0,
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
              marginTop: 5,
              textAlign: 'left'
            }}
            title={
              <Typography
                fontSize={20}
                whiteSpace={minWidth550 ? 'nowrap' : undefined}
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                {title}
              </Typography>
            }
          />
          <Divider />
          {certificate ? (
            <CardContent sx={{ marginTop: 1, textAlign: 'left' }}>
              <Grid
                xs={12}
                justifyContent="left"
                marginBottom={1}
                marginRight={1}
              >
                {listItems?.map((item, key) => (
                  <LabelIcon
                    key={key}
                    iconImage={item?.pic}
                    mode={theme.palette.mode}
                    color={theme.palette.primary.main}
                    label={item?.label}
                    uri={item?.link}
                    whiteSpace={false}
                    marginLeft={2}
                    uriDisable={false}
                  />
                ))}
              </Grid>
            </CardContent>
          ) : (
            <CardContent sx={{ marginTop: 1 }}>
              {listItems?.map((_, key) => (
                <Grid
                  xs={12}
                  justifyContent="left"
                  display={'flex'}
                  marginBottom={1}
                >
                  <Grid xs={6} marginRight={1}>
                    {key % 2 === 0 && key < listItems.length && (
                      <LabelIcon
                        iconImage={listItems[key]?.picture}
                        mode={theme.palette.mode}
                        color={theme.palette.primary.main}
                        label={listItems[key]?.label}
                      />
                    )}
                  </Grid>
                  <Grid xs={6} marginLeft={1}>
                    {(key + 1) % 2 !== 0 && key + 1 < listItems.length && (
                      <LabelIcon
                        iconImage={listItems[key + 1]?.picture}
                        mode={theme.palette.mode}
                        color={theme.palette.primary.main}
                        label={listItems[key + 1]?.label}
                      />
                    )}
                  </Grid>
                </Grid>
              ))}
            </CardContent>
          )}
        </Card>
      </Badge>
    </>
  );
}
