/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { cv, ecole_it_link } from '../../constants/data';
import './style.css';

const profil_light = require('../../assets/profil_light.png');
const profil_dark = require('../../assets/profil_dark.png');
const downloadImage = require('../../assets/download-svgrepo-com.png');
const downloadImageDark = require('../../assets/download-svgrepo-com (2).png');

export default function Header() {
  const matches = useMediaQuery('(min-width:900px)');
  const theme = useTheme();
  const navigate = useNavigate();
  const { dark, main, light } = theme.palette.primary;
  return (
    <Grid container sx={{ width: '100%', justifyContent: 'center' }}>
      <Grid
        container
        xs={12}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
        justifyContent="center"
        alignItems={'center'}
      >
        {matches && (
          <Grid item xs={6} sm={4} md={4} sx={{ textAlign: 'right' }}>
            {theme.palette.mode === 'dark' ? (
              <img
                src={profil_dark}
                alt="profil image"
                loading="lazy"
                style={{ width: '70%' }}
              />
            ) : (
              <img
                src={profil_light}
                alt="profil image"
                loading="lazy"
                style={{ width: '70%' }}
              />
            )}
          </Grid>
        )}
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          sx={{ marginTop: 20, textAlign: 'left', width: '72%', marginLeft: 5 }}
        >
          <Typography fontSize={24} fontWeight={400} color={main}>
            Salut !
          </Typography>
          <Typography fontSize={24} fontWeight={400} color={main}>
            Moi c&apos;est{' '}
            <strong style={{ color: theme.palette.secondary.light }}>
              Brice Ngantou
            </strong>
          </Typography>
          <br />
          <Typography fontSize={16} fontWeight={400} color={main}>
            Étudiant en 4ième année d&apos;ingénierie des systèmes
            informatiques, option Intelligence Artificielle à&nbsp;
            <a
              href={ecole_it_link}
              target="blank"
              style={{ textDecoration: 'none' }}
            >
              l&apos;ECOLE-IT
            </a>
            &nbsp;à Orléans. Passionné par le developpement logiciel, je suis à
            la recherche d&apos;un stage ou d&apos;une alternance en
            développement web & mobile.
          </Typography>
          <br />
          <Typography fontSize={16} fontWeight={400} color={main}>
            Dynamique, je suis doté d&apos;un esprit analytique et créatif, ce
            qui me permet d&apos;apporter des solutions innovantes aux problèmes
            complexes.
          </Typography>
          <Grid
            sx={{
              textAlign: 'left',
              display: 'flex',
              marginTop: 3,
              width: '80%',
              height: 150,
              marginBottom: '20%'
            }}
          >
            <a href={cv} target="blank" style={{ textDecorationLine: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  height: 40,
                  borderRadius: 1,
                  color: light,
                  backgroundColor: theme.palette.secondary.dark,
                  ':hover': {
                    color: theme.palette.secondary.dark,
                    backgroundColor: light
                  }
                }}
              >
                <img
                  src={
                    theme.palette.mode === 'light'
                      ? downloadImage
                      : downloadImageDark
                  }
                  alt="icon"
                  style={{ width: '28px', height: '28px', marginRight: 8 }}
                />
                Télécharger mon CV
              </Button>
            </a>
            <Button
              variant="outlined"
              onClick={() => navigate('/contact')}
              sx={{
                height: 40,
                width: 100,
                borderRadius: 1,
                color: theme.palette.secondary.dark,
                marginLeft: 2,
                backgroundColor: light,
                ':hover': {
                  color: light,
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
