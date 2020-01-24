import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import logo from '../assets/img/lamdba_logo.png';

class Landing extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.blackRoot}>
        <img className={classes.landingLogo} src={logo} alt={logo}/>
        <Typography className={classes.whiteTypo} variant={"h4"} component={"h4"}> Encuesta de satisfacción de servicio</Typography>
        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Inicia
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);