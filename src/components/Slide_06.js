import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_06";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import './styles/toggleButton.css';

class Slide_06 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  buttonStyle = {
    minWidth: '120px',
    height: '200px',
    margin: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
  };

  state = {
    legal: false,
    psychological: false,
    economical: false,
    medical: false,
    refuge: false,
  };

  toggleLegal(){
    this.setState({
      legal: !this.state.legal
    });
  }
  togglePsychological(){
    this.setState({
      psychological: !this.state.psychological
    });
  }
  toggleEconomical(){
    this.setState({
      economical: !this.state.economical
    });
  }
  toggleMedical(){
    this.setState({
      medical: !this.state.medical
    });
  }
  toggleRefuge(){
    this.setState({
      refuge: !this.state.refuge
    });
  }

  render() {
    const {classes, handleChangeResults, values} = this.props;

    let legal = this.state.legal ? "selectedButton" : "unselectedButton";
    let psychological = this.state.psychological ? "selectedButton" : "unselectedButton";
    let economical = this.state.economical ? "selectedButton" : "unselectedButton";
    let medical = this.state.medical ? "selectedButton" : "unselectedButton";
    let refuge = this.state.refuge ? "selectedButton" : "unselectedButton";

    return (

      <div className={classes.root}>
        <div className={classes.space}>
        </div>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Paper className={classes.innerPaper} elevation={2} square={false}>
            <Typography className={classes.title} variant={"h5"} component={"h5"}>
              <b>Servicio prestado en el espacio seguro</b>
            </Typography>
          </Paper>

          <button style={this.buttonStyle} className={legal} name={"legal"} value={"legal"} onClick={this.toggleLegal.bind(this)}>
            LEGAL
          </button>
          <button style={this.buttonStyle} className={psychological} name={"psychological"} value={"psychological"} onClick={this.togglePsychological.bind(this)}>
            PSICOLÓGICO
          </button>
          <button style={this.buttonStyle} className={economical} name={"economical"} value={"economical"} onClick={this.toggleEconomical.bind(this)}>
            ECONÓMICO
          </button>
          <button style={this.buttonStyle} className={medical} name={"medical"} value={"medical"} onClick={this.toggleMedical.bind(this)}>
            MÉDICO
          </button>
          <button style={this.buttonStyle} className={refuge} name={"refuge"} value={"refuge"} onClick={this.toggleRefuge.bind(this)}>
            ALBERGUE
          </button>

          <Typography className={classes.typo_gray} variant={"h5"} component={"h5"}>
            Si se le brindó más de un servicio por favor márquelo
          </Typography>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_06);