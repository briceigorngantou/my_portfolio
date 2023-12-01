/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, useTheme } from '@mui/material';

import {
  email,
  linkedin,
  github,
  citation,
  auteur,
  phoneNumber,
  address
} from '../../constants/data';
import './style.css';
import LabelIcon from '../../components/labelIcon/LabelIcon';

const logo_light = require('../../assets/logo_light.png');
const logo_dark = require('../../assets/logo_dark.png');
const phoneIcon = require('../../assets/phone-calling-svgrepo-com.png');
const addressIcon = require('../../assets/address-svgrepo-com.png');
const address_dark = require('../../assets/address_dark.png');
const emailIcon = require('../../assets/email-mail-svgrepo-com.png');
const linkedinIcon = require('../../assets/linkedin-svgrepo-com.png');
const githubIcon = require('../../assets/github-color-svgrepo-com.png');

export default function Footer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { dark, main, light } = theme.palette.primary;

  return (
    <Fragment>
      <Container
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bottom: 1,
          padding: 5,
          maxWidth: 2000,
          backgroundColor: theme.palette.mode === 'light' ? light : dark
        }}
        className="footer"
      >
        <Grid container xs={12} spacing={3}>
          <Grid xs={6}>
            <Grid
              item
              sx={{
                cursor: 'pointer',
                color: main,
                textAlign: 'center',
                width: '80%'
              }}
            >
              <img
                src={theme.palette.mode === 'light' ? logo_light : logo_dark}
                alt="logo"
                onClick={() => navigate('/')}
                style={{ width: '20%' }}
              />
            </Grid>
            <Typography
              sx={{
                color: main,
                textAlign: 'center',
                width: '80%'
              }}
            >
              {citation}
              <Typography fontWeight={'bold'}>{auteur}</Typography>
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Grid
              item
              sx={{
                color: main,
                textAlign: 'left',
                marginBottom: 3
              }}
            >
              <Typography fontWeight={'bold'} fontSize={20}>
                Mes contacts
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                color: main,
                justifyContent: 'center',
                marginBottom: 3
              }}
            >
              <LabelIcon
                iconImage={phoneIcon}
                mode={theme.palette.mode}
                label={phoneNumber}
                uri={`tel: ${phoneNumber}`}
              />
              <LabelIcon
                iconImage={emailIcon}
                mode={theme.palette.mode}
                label={email}
                uri={`mailTo: ${email}`}
              />
              <LabelIcon
                iconImage={
                  theme.palette.mode === 'light' ? addressIcon : address_dark
                }
                mode={theme.palette.mode}
                label={address}
              />
            </Grid>
          </Grid>
          <Grid xs={3}>
            <Grid
              item
              sx={{
                color: main,
                textAlign: 'left',
                marginBottom: 3
              }}
            >
              <Typography fontWeight={'bold'} fontSize={20}>
                Mes réseaux
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                color: main,
                textAlign: 'left',
                marginBottom: 3,
                flexDirection: 'row',
                display: 'flex'
              }}
            >
              <LabelIcon
                iconImage={linkedinIcon}
                mode={theme.palette.mode}
                uri={linkedin}
              />
              <LabelIcon
                iconImage={githubIcon}
                mode={theme.palette.mode}
                uri={github}
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" width={'90%'}>
            <Typography variant="body1" align="center" color={main}>
              &copy;{new Date().getFullYear()} Tout droit reservé à &nbsp;Brice
              NGANTOU
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
