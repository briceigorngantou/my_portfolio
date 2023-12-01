/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, useTheme, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { cv, ecole_it_link } from '../../constants/data';

const profil_light = require('../../assets/profil_light.png');
const profil_dark = require('../../assets/profil_dark.png');

export default function Header() {
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
        <Grid
          item
          xs={6}
          sm={4}
          md={4}
          sx={{ marginTop: 20, textAlign: 'left', width: '70%' }}
        >
          <Typography fontSize={24} fontWeight={400} color={main}>
            Salut !
          </Typography>
          <Typography fontSize={24} fontWeight={400} color={main}>
            Moi c&apos;est <strong>Brice Ngantou</strong>
          </Typography>
          <br />
          <Typography fontSize={16} fontWeight={400} color={main}>
            Étudiant en master 1 systèmes d&apos;informations à&nbsp;
            <a
              href={ecole_it_link}
              target="blank"
              style={{ textDecoration: 'none' }}
            >
              l&apos;ECOLE-IT
            </a>
            , je suis actuellement à la recherche d&apos;un stage ou d&apos;une
            alternance en développement web & mobile.
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
                  height: 50,
                  borderRadius: 1,
                  color: light,
                  backgroundColor: dark,
                  ':hover': {
                    color: dark,
                    backgroundColor: light
                  }
                }}
              >
                <CloudDownloadIcon
                  sx={{
                    fontSize: '22px',
                    marginRight: 1
                  }}
                />
                Télécharger mon CV
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
