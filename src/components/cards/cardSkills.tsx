/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DialogProps } from '@mui/material/Dialog';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CardActionArea, CardActions, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CardSkillsInterface } from '../../interfaces/cards/cardsSkills.interface';
import DialogComponent from '../dialog/Dialog';
import PrimaryButton from '../forms/PrimaryButton';

export default function CardSkills({
  style,
  title,
  picture,
  text,
  textPreviewLength,
  width,
  height,
  pictureHeight,
  pictureWidth,
  color,
  bgcolor,
  noButton,
  href
}: CardSkillsInterface) {
  const navigate = useNavigate();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: width || 310,
          height: height || 520,
          margin: 3,
          cursor: 'pointer',
          style,
          ':hover': {
            color: color || theme.palette.primary.light,
            transition: 'all 0.1ms linear',
            width,
            height
          }
        }}
      >
        <CardActionArea sx={{ maxHeight: '90%' }}>
          <CardMedia
            component="img"
            height={pictureHeight || '250'}
            width={pictureWidth}
            image={picture}
            alt="services-news images"
            loading="lazy"
          />
          <CardContent>
            <Typography
              gutterBottom
              textAlign={'center'}
              variant="h6"
              color={theme.palette.primary.main}
            >
              {title}
            </Typography>
            {text ? (
              <Typography
                variant="body1"
                textAlign={'justify'}
                color="text.secondary"
              >
                {textPreviewLength && textPreviewLength < text.length
                  ? `${text.slice(0, textPreviewLength)}...`
                  : text}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ maxHeight: '10%' }}>
          {noButton ? null : (
            <PrimaryButton
              title="View More"
              variant="outlined"
              fontSize={14}
              fontWeight={500}
              startIcon={<VisibilityIcon />}
              onPress={() => {
                setOpen(true);
                setScroll('paper');
              }}
              style={{
                width: '100%',
                height: 40,
                borderRadius: 1,
                borderColor: theme.palette.primary.main,
                borderWidth: 0.1,
                color: color || theme.palette.primary.light,
                backgroundColor: bgcolor || theme.palette.secondary.dark,
                ':hover': {
                  color: color || theme.palette.secondary.dark,
                  backgroundColor: bgcolor || theme.palette.primary.light
                }
              }}
            />
          )}
        </CardActions>
      </Card>
      {open && (
        <DialogComponent
          text={text || 'No details found'}
          title={'Details'}
          action={() => navigate(href || '/contact')}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          scroll={scroll}
          setScroll={setScroll}
        />
      )}
    </>
  );
}
