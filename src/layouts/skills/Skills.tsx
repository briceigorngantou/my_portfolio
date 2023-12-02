/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import Title from '../../components/title/Title';
import CardSkills from '../../components/cards/cardSkills';

const image = require('../../assets/logo_dark.png');

export default function Skills() {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{ width: '100%', justifyContent: 'center' }}
      id="service"
    >
      <Grid
        sx={{ px: { xs: 2, md: 5 }, pb: { xs: 2, md: 3 } }}
        container
        marginTop={10}
        justifyContent="center"
      >
        <Title title="MES COMPÉTENCES" />
      </Grid>
      <Grid
        sx={{ px: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}
        container
        p={2}
        justifyContent="center"
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'Mobile applications'}
            text={
              'HandLit also offers mobile app development for iOS and Android platforms.' +
              'Whether you need an app to promote your business, offer services to your customers or' +
              ' provide specific functionality we can design and develop a custom mobile app to meet your needs.'
            }
            style={undefined}
            picture={image}
            textPreviewLength={180}
            width={undefined}
            height={undefined}
            pictureHeight={undefined}
            pictureWidth={undefined}
            color={undefined}
            noHover={undefined}
            noButton={undefined}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'SEA, paid search'}
            text={
              'Search Engine Advertising (SEA), also known as paid search, ' +
              'is an online marketing strategy where you pay to display promotional ads in the search results ' +
              'of search engines such as Google. HandLit offers to manage your SEA campaigns, choosing the right keywords, ' +
              'creating attractive ads and optimizing your advertising budget to get the best return on investment.'
            }
            style={undefined}
            picture={image}
            textPreviewLength={180}
            width={undefined}
            height={undefined}
            pictureHeight={undefined}
            pictureWidth={undefined}
            color={undefined}
            noHover={undefined}
            noButton={undefined}
          />
        </Grid>
        <Grid sx={{ margin: 1 }}>
          <CardSkills
            title={'SEO (Search Engine Optimization)'}
            text={
              "Search Engine Optimization (SEO) is a set of techniques designed to improve your website's visibility " +
              'and ranking in organic search results. HandLit offers SEO services to help your site rank higher in search engines. ' +
              'This includes keyword optimization, quality content creation, site structure improvement and other technical factors to ' +
              "improve your company's online visibility."
            }
            style={undefined}
            picture={image}
            textPreviewLength={180}
            width={undefined}
            height={undefined}
            pictureHeight={undefined}
            pictureWidth={undefined}
            color={undefined}
            noHover={undefined}
            noButton={undefined}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
