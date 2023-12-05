/* eslint-disable no-unused-vars */
import { Grid, useTheme } from '@mui/material';
import React from 'react';
import Title from '../../components/title/Title';
import CardPortfolio from '../../components/cards/CardPortfolio';
import {
  contentLSU,
  contentHandIt,
  contentAvocat,
  contentAfrik,
  contentKclub,
  contentReward
} from '../../constants/portfolio.data';
import {
  picturesHandIT,
  playStoreLinkHandIT,
  websiteLinkHandIT
} from '../../constants/handit/pictures';
import { picturesAvocat, websiteAvocat } from '../../constants/avocat/pictures';
import { lsuWebsite, picturesLSU } from '../../constants/lsu/pictures';
import {
  kclubApp,
  kclubWebsite,
  picturesKCLUB
} from '../../constants/kclub/pictures';
import {
  picturesReward,
  rewardApp,
  rewardWebsite
} from '../../constants/reward/pictures';
import {
  afrikApp,
  afrikWebsite,
  picturesAfrik
} from '../../constants/afrikAlliance/pictures';

const playStoreImg = require('../../assets/google-play-badge-logo-svgrepo-com.png');

export default function MyPortfolio() {
  const theme = useTheme();
  const { light, main } = theme.palette.primary;
  return (
    <Grid
      container
      sx={{
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <Grid
        sx={{ px: { xs: 2, md: 5 }, pb: { xs: 2, md: 3 } }}
        container
        marginTop={15}
        marginBottom={3}
        justifyContent="center"
      >
        <Title title="MON PORTFOLIO" />
      </Grid>
      <Grid
        sx={{ px: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}
        container
        p={2}
        justifyContent="center"
      >
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'HANDIT APP'}
            company={'LSU TECH'}
            googlePlayLink={playStoreLinkHandIT}
            googlePlayImage={playStoreImg}
            website={websiteLinkHandIT}
            pictures={picturesHandIT}
            width={600}
            height={400}
            color={main}
            content={contentHandIt}
          />
        </Grid>
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'SITE WEB AVOCAT JEAN FAUSTIN KAMDEM'}
            company={'LSU TECH'}
            style={undefined}
            pictures={picturesAvocat}
            width={600}
            website={websiteAvocat}
            height={400}
            color={main}
            content={contentAvocat}
          />
        </Grid>
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'KCLUB MEMBERSHIP APP'}
            content={contentKclub}
            pictures={picturesKCLUB}
            width={600}
            height={400}
            company={'ST DIGITAL'}
            googlePlayLink={kclubApp}
            googlePlayImage={playStoreImg}
            website={kclubWebsite}
            bgcolor={light}
            color={main}
          />
        </Grid>
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'SITE WEB LetServU'}
            company={'LSU TECH'}
            style={undefined}
            website={lsuWebsite}
            pictures={picturesLSU}
            width={600}
            height={400}
            color={main}
            content={contentLSU}
          />
        </Grid>
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'THE REWARD SOCIETY APP'}
            company={'ST DIGITAL'}
            style={undefined}
            pictures={picturesReward}
            width={600}
            googlePlayLink={rewardApp}
            googlePlayImage={playStoreImg}
            website={rewardWebsite}
            height={400}
            color={main}
            content={contentReward}
          />
        </Grid>
        <Grid sx={{ margin: 2 }}>
          <CardPortfolio
            title={'AFRIK-ALLIANCE APP'}
            style={undefined}
            content={contentAfrik}
            pictures={picturesAfrik}
            width={600}
            height={400}
            company={'ST DIGITAL'}
            googlePlayLink={afrikApp}
            googlePlayImage={playStoreImg}
            website={afrikWebsite}
            bgcolor={light}
            color={main}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
