import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/LandingStyle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import background from '../assets/img/landing_background.png';
import logo from '../assets/img/lamdba_logo.png';

class Landing extends Component {

  render() {
    const {classes} = this.props;
    return (

      <div className={classes.base}>
        <img className={classes.background} src={background} alt={background}/>
        <div className={classes.container}>
          <div>
            <img className={classes.logo} src={logo} alt={logo}/>
            <Typography variant={"h3"}> Encuesta de satisfacción de servicio</Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Landing);