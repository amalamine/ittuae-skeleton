import React from 'react';
import PostAdd from '@material-ui/icons/PostAdd';
import Email from '@material-ui/icons/Email';
import Notifications from '@material-ui/icons/Notifications';
import People from '@material-ui/icons/People';
import Block from '@material-ui/icons/Block';

import '../../styles/css/theme.css';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import InfoArea from '../../components/InfoArea/InfoArea';

import featuresStyle from '../../styles/featuresStyle';

const image = require('../../images/charity.jpg');
const useStyles = makeStyles(featuresStyle);
export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.features3}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.phoneContainer}>
              <img src={image} alt="..." />
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h2 className={classes.title}>Your life will be much easier</h2>
            <InfoArea
              className={classes.infoArea}
              icon={PostAdd}
              title="Hundreds of Components"
              description="The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={Notifications}
              title="Easy to Use"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={Email}
              title="Fast Prototyping"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={People}
              title="Fast Prototyping"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={Block}
              title="Fast Prototyping"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              iconColor="primary"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
