import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_05";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider"

class Slide_05 extends Component {

  render() {
    const {classes, handleChange, values} = this.props;

    function valuetext(value) {
      return `${value}`;
    }

    const marks = [
      {
        value: 0,
        label: '0',
      },
      {
        value: 5,
        label: '5',
      },
    ];

    return (

      <div className={classes.base}>
        <div className={classes.container}>
          <div className={classes.background}>
            <div className={classes.space}>
            </div>

            <Paper className={classes.paper} elevation={2} square={false}>
              <Paper className={classes.innerPaper} elevation={2} square={false}>
                <Typography className={classes.typo_gray} variant={"h5"} component={"h5"}>
                  <b>Puntee del 1 (muy malo) a 5 (muy bueno) los siguientes aspectos del espacio seguro.</b>
                </Typography>
              </Paper>

              <Typography className={classes.typo_black} variant={"h5"} component={"h5"}>
                <b>Estado de las instalaciones del espacio seguro</b>
              </Typography>
              <Slider
                className={classes.slider}
                defaultValue={5}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                marks={marks}
                step={1}
                min={0}
                max={5}
              />
              <Typography className={classes.typo_gray} variant={"h6"} component={"h6"}>
                <b>Deslice su dedo para indicar su calificación</b>
              </Typography>

            </Paper>

            <Fab variant="extended" color="white" aria-label="add" className={classes.button}>
              Siguiente
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_05);