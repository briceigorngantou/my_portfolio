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
  Typography
} from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { Pages } from '../../constants/data';
import './navbar.css';
import { setMode } from '../../state';

const logo = require('../../assets/logo_light.png');

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { dark } = theme.palette.secondary;

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
          opacity: 0.8,
          top: 5,
          maxWidth: 2000,
          backgroundColor: theme.palette.secondary.light,
          position: 'fixed'
        }}
        className="navbar"
      >
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.primary.main }}
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
              {Pages.map((page, index) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    handlePageSelected(page.link);
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        currentPage === index
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main
                    }}
                    textAlign="center"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                key={'companyLogin'}
                onClick={() => {
                  navigate('/login');
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    // textDecoration: 'underline',
                    cursor: 'pointer',
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                  textAlign="center"
                >
                  Mon CV
                </Typography>
              </MenuItem>
              <MenuItem key={'theme'}>
                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{ fontSize: '26px' }}
                >
                  {theme.palette.mode === 'dark' ? (
                    <DarkMode sx={{ fontSize: '26px' }} />
                  ) : (
                    <LightMode sx={{ color: dark, fontSize: '26px' }} />
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
              color: theme.palette.primary.main,
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
              color: theme.palette.primary.main
            }}
          >
            <img
              src={logo}
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
                  color: theme.palette.primary.main,
                  borderBottomColor:
                    currentPage === index
                      ? {
                          '--Grid-borderWidth': '3px',
                          borderBottom: 'var(--Grid-borderWidth) solid',
                          borderColor: theme.palette.primary.main
                        }
                      : undefined,
                  display: 'block',
                  fontSize: 16,
                  marginX: 2,
                  fontWeight: 'bold',
                  ':hover': {
                    color: theme.palette.primary.main,
                    '--Grid-borderWidth': '3px',
                    borderColor: theme.palette.primary.main
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              key={'company_login'}
              onClick={() => {
                navigate('/login');
              }}
              sx={{
                my: 2,
                color: theme.palette.primary.main,
                display: 'block',
                fontSize: 16,
                marginX: 2,
                fontWeight: 'bold',
                '&:hover': {
                  color: theme.palette.primary.main,
                  '--Grid-borderWidth': '3px',
                  borderColor: theme.palette.primary.main
                },
                cursor: 'pointer'
              }}
            >
              Mon CV
            </Button>
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: '26px' }}
            >
              {theme.palette.mode === 'dark' ? (
                <DarkMode sx={{ fontSize: '26px' }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: '26px' }} />
              )}
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </Fragment>
  );
}
