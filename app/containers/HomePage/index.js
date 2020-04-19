/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import classNames from 'classnames';

import '../../styles/css/theme.css';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Header from '../../components/Header/Header';
import Button from '../../components/CustomButtons/Button';
import Parallax from '../../components/Parallax/Parallax';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
// import About from '../About';

import navbarsStyle from '../../styles/navbarsStyle';

const image = require('../../images/community.jpg');
const useStyles = makeStyles(navbarsStyle);
export default function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="In this Together UAE"
        color="dark"
        links={
          <List className={`${classes.list} ${classes.mlAuto}`}>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                About
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Buddy System
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Jobs
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                SMEs
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Homeschooling
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Support Us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                className={`${classes.navLink} ${classes.navLinkActive}`}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact
              </Button>
            </ListItem>
          </List>
        }
        fixed
      />
      <Parallax filter="dark" image={image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter,
              )}
            >
              <h1 className={classes.title}>UAE Buddy System</h1>
              <h2 className={classes.title}>
                We are #InThisTogetherUAE <br />
                <small className={classes.title}>
                  In This Together UAE is a grassroots initiative, working as a
                  CONNECTOR between people who NEED HELP with those who CAN HELP
                  during the Coronavirus pandemic and beyond.
                </small>
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <About /> */}
    </div>
  );
}
