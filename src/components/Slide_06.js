import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_05";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider"

class Slide_05 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, handleChangeResults, values, question} = this.props;

    function valuetext(value) {
      return `${value}`;
    }


    return (
      <div className={classes.root}>
        <div className={classes.space}>
        </div>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Paper className={classes.innerPaper} elevation={2} square={false}>
            <Typography className={classes.typo_gray} variant={"h5"} component={"h5"}>
              Servicio prestado en el espacio seguro
            </Typography>
          </Paper>

          <Typography className={classes.typo_black} variant={"h5"} component={"h5"}>
            <b>Whatevs</b>
          </Typography>


        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_05);