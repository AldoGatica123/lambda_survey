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
    const {classes, handleChangeResults, values} = this.props;

    function valuetext(value) {
      return `${value}`;
    }

    const marks = [
      {
        value: 1,
        label: '1',
      },
      {
        value: 5,
        label: '5',
      },
    ];

    return (
      <div className={classes.root}>
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
            value={values.slider}
            onChange={handleChangeResults("result_01")}
            step={1}
            min={1}
            max={5}
          />
          <Typography className={classes.typo_gray} variant={"h6"} component={"h6"}>
            <b>Deslice su dedo para indicar su calificación</b>
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