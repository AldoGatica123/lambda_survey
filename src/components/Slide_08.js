import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_08";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";

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

class Slide_08 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  leftButton = {
    minWidth: '280px',
    height: '52px',
    borderRadius: '18px 0px 0px 18px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
  };
  rightButton = {
    minWidth: '280px',
    height: '52px',
    borderRadius: '0px 18px 18px 0px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
  };

  state = {
    yes: true,
    no: false,
  };

  toggleButton(){
    this.setState({
      yes: !this.state.yes,
      no: !this.state.no
    });
  }

  render() {
    const {classes, handleChangeResults, values} = this.props;

    let yes = this.state.yes ? "selectedButton" : "unselectedButton";
    let no = this.state.no ? "selectedButton" : "unselectedButton";

    return (

      <div className={classes.root}>
        <div className={classes.space}>
        </div>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Paper className={classes.innerPaper} elevation={2} square={false}>
            <Typography className={classes.title} variant={"h5"} component={"h5"}>
              <b>¿Se le refirió con otro socio de la Red Nacional de Protección para cubrir necesidades?</b>
            </Typography>
          </Paper>

          <button style={this.leftButton} className={yes} name={"yes"} value={"yes"} onClick={this.toggleButton.bind(this)}>
            SI
          </button>
          <button style={this.rightButton} className={no} name={"no"} value={"no"} onClick={this.toggleButton.bind(this)}>
            NO
          </button>


          <Typography className={classes.typo_gray} variant={"h6"} component={"h6"}>
            Si su respuesta es SI, por favor indicarnos la calidad del servicio del socio
          </Typography>

          <Slider className={classes.slider} value={values.slider}
                  onChange={handleChangeResults}
                   marks={marks} step={1} min={1} max={5}
                  aria-labelledby="discrete-slider" valueLabelDisplay="auto"/>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_08);