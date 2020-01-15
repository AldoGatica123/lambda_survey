import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_06";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import './styles/toggleButton.css';

class Slide_05 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  state = {
    legal: false,
    psychological: false,
    economical: false,
    medical: false,
    refuge: false,
    black: true,
  };

  changeColor(){
    this.setState({
      black: !this.state.black
    });
  }

  render() {
    const {classes, handleChangeResults, values} = this.props;

    let btn_class = this.state.black ? "selectedButton" : "unselectedButton";


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

          <button className={btn_class} name={"legal"} value={"legal"} onClick={this.changeColor.bind(this)}>
            LEGAL
          </button>
          <button className={btn_class} name={"psychological"} value={"psychological"} onClick={this.changeColor.bind(this)}>
            PSICOLÓGICO
          </button>
          <button className={btn_class} name={"economical"} value={"economical"} onClick={this.changeColor.bind(this)}>
            ECONÓMICO
          </button>
          <button className={btn_class} name={"medical"} value={"medical"} onClick={this.changeColor.bind(this)}>
            MÉDICO
          </button>
          <button className={btn_class} name={"refuge"} value={"refuge"} onClick={this.changeColor.bind(this)}>
            ALBERGUE
          </button>

        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_05);