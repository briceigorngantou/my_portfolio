/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useLayoutEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { cv, Pages } from '../../constants/data';
import './style.css';
import { setMode } from '../../state';

const logo_light = require('../../assets/logo_light.png');
const logo_dark = require('../../assets/logo_dark.png');
const downloadImage = require('../../assets/download-svgrepo-com.png');

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { dark, main, light } = theme.palette.primary;

  const dispatch = useDispatch();
  // Use context
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageSelected = (redirectTo: any) => {
    navigate(redirectTo);
  };
  const matches = useMediaQuery('(min-width:900px)');

  // Get the current page
  useLayoutEffect(() => {
    const pathName = window.location.pathname;
    const filter = Pages.findIndex((page) => page.link === pathName);
    setcurrentPage(filter);
  });

  return (
    <Fragment>
      <Container
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          zIndex: 10,
          opacity: 0.7,
          top: 5,
          maxWidth: 2000,
          backgroundColor: theme.palette.mode === 'light' ? light : dark,
          position: 'fixed'
        }}
        className="navbar"
      >
        {/* MOBILE SCREEN */}
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: main }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {Pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    handlePageSelected(page.link);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                key={'cv'}
                onClick={() => {
                  navigate(cv);
                }}
              >
                <a
                  href={cv}
                  target="blank"
                  style={{ textDecorationLine: 'none' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={downloadImage}
                      alt="icon"
                      style={{ width: '26px', height: '26px', marginRight: 8 }}
                    />
                    <Typography
                      sx={{
                        color: theme.palette.mode === 'light' ? main : light,
                        cursor: 'pointer',
                        '&:hover': {
                          color: theme.palette.mode === 'light' ? main : light
                        }
                      }}
                      textAlign="center"
                    >
                      Mon CV
                    </Typography>
                  </Box>
                </a>
              </MenuItem>
              <MenuItem key={'theme'}>
                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{ fontSize: '22px' }}
                >
                  {theme.palette.mode === 'dark' ? (
                    <DarkMode sx={{ color: light, fontSize: '22px' }} />
                  ) : (
                    <LightMode sx={{ color: main, fontSize: '22px' }} />
                  )}
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: main,
              display: { xs: 'flex', md: 'none' },
              textAlign: 'left'
            }}
          >
            {Pages[currentPage]?.name}
          </Typography>
          <Grid
            item
            sx={{
              cursor: 'pointer',
              color: main
            }}
          >
            <img
              src={theme.palette.mode === 'light' ? logo_light : logo_dark}
              alt="logo"
              onClick={() => navigate('/')}
              style={{ width: '40%' }}
            />
          </Grid>
          <Grid
            container
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              borderWidth: 2
            }}
          >
            {Pages.map((page, index) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  handlePageSelected(page.link);
                }}
                sx={{
                  my: 2,
                  color: main,
                  borderBottomColor:
                    currentPage === index
                      ? {
                          '--Grid-borderWidth': '3px',
                          borderBottom: 'var(--Grid-borderWidth) solid',
                          borderColor: main
                        }
                      : undefined,
                  display: 'block',
                  fontSize: 14,
                  marginX: 2,
                  fontWeight: 'bold',
                  ':hover': {
                    color: main,
                    '--Grid-borderWidth': '3px',
                    borderColor: main
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
            <a href={cv} target="blank" style={{ textDecorationLine: 'none' }}>
              <Button
                key={'cv'}
                sx={{
                  my: 2,
                  color: main,
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: 16,
                  marginX: 2,
                  fontWeight: 'bold',
                  '&:hover': {
                    color: main,
                    '--Grid-borderWidth': '3px',
                    borderColor: main
                  },
                  cursor: 'pointer'
                }}
              >
                <img
                  src={downloadImage}
                  alt="icon"
                  style={{ width: '26px', height: '26px', marginRight: 8 }}
                />
                Mon CV
              </Button>
            </a>
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: '22px' }}
            >
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ color: light, fontSize: '22px' }} />
              ) : (
                <LightMode sx={{ color: main, fontSize: '22px' }} />
              )}
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </Fragment>
  );
}
