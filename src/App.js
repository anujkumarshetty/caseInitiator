import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './CSS/styles'
import CaseInitiatorCard from './Containers/container-case-initiator-card';

import FieldMappings from './Containers/container-Field-mappings';
import DisplayEditMappings from "./Containers/container-edit-process-mappinng-list";




class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div >

        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar variant="dense">
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                FireFly - Case Initiator
              </Typography>
            </Toolbar>
          </AppBar>
        </div>


        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <DisplayEditMappings />
          <div>
            <Card className={classes.card}>
              <CardContent>
                <h6>Case Initiator</h6>
                <hr />
                <div >
                  <CaseInitiatorCard />
                </div>
                <FieldMappings />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);