import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider"


const marks = [
  { value: 1, label: '1'},
  { value: 5, label: '5'},
];

class Slide_05 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {classes, handleChangeResults, values, question} = this.props;

    function valuetext(value) {
      return `${value}`;
    }

    return (
      <div className={classes.darkBlueRoot}>
        <div className={classes.space}/>

        <Paper className={classes.paperS2} elevation={2} square={false}>
          <Paper className={classes.paperTitle} elevation={2} square={false}>
            <Typography className={classes.grayTypo} variant={"h5"} component={"h5"}>
              <b>Puntee del 1 (muy malo) a 5 (muy bueno) los siguientes aspectos del espacio seguro.</b>
            </Typography>
          </Paper>

          <Typography className={classes.blackTypo} variant={"h5"} component={"h5"}>
            <b>{question.text}</b>
          </Typography>
          <Slider className={classes.slider} value={values.slider}
            onChange={handleChangeResults(question.id)}
            getAriaValueText={valuetext} marks={marks} step={1} min={1} max={5}
            aria-labelledby="discrete-slider" valueLabelDisplay="auto"/>
          <Typography className={classes.grayTypo} variant={"h6"} component={"h6"}>
            <b>Deslice su dedo para indicar su calificación</b>
          </Typography>
        </Paper>

        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_05);