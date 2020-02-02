import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import './styles/toggleButton.css';

class Slide_10 extends Component {

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
    internet: false,
    social_networks: false,
    kiosks: false,
    flyers: false,
    referal: false,
  };

  toggleInternet(){
    this.setState({
      internet: !this.state.internet
    });
  }
  toggleSocialNetworks(){
    this.setState({
      social_networks: !this.state.social_networks
    });
  }
  toggleKiosks(){
    this.setState({
      kiosks: !this.state.kiosks
    });
  }
  toggleFlyers(){
    this.setState({
      flyers: !this.state.flyers
    });
  }
  toggleReferal(){
    this.setState({
      referal: !this.state.referal
    });
  }

  render() {
    const {classes, handleChangeResults, values} = this.props;

    let internet = this.state.internet ? "selectedButton" : "unselectedButton";
    let social_networks = this.state.social_networks ? "selectedButton" : "unselectedButton";
    let kiosks = this.state.kiosks ? "selectedButton" : "unselectedButton";
    let flyers = this.state.flyers ? "selectedButton" : "unselectedButton";
    let referal = this.state.referal ? "selectedButton" : "unselectedButton";

    return (

      <div className={classes.greenRoot}>
        <div className={classes.space}/>

        <Paper className={classes.paperS2} elevation={2} square={false}>
          <Paper className={classes.paperTitle} elevation={2} square={false}>
            <Typography className={classes.grayTitle} variant={"h5"} component={"h5"}>
              <b>¿Cómo conoció del espacio seguro?</b>
            </Typography>
          </Paper>

          <button style={this.buttonStyle} className={internet} name={"internet"} value={"internet"} onClick={this.toggleInternet.bind(this)}>
            <br/>INTERNET
          </button>
          <button style={this.buttonStyle} className={social_networks} name={"social_networks"} value={"social_networks"} onClick={this.toggleSocialNetworks.bind(this)}>
            REDES<br/> SOCIALES
          </button>
          <button style={this.buttonStyle} className={kiosks} name={"kiosks"} value={"kiosks"} onClick={this.toggleKiosks.bind(this)}>
            FERIAS O <br/>KIOSKOS
          </button>
          <button style={this.buttonStyle} className={flyers} name={"flyers"} value={"flyers"} onClick={this.toggleFlyers.bind(this)}>
            <br/>FOLLETOS
          </button>
          <button style={this.buttonStyle} className={referal} name={"referal"} value={"referal"} onClick={this.toggleReferal.bind(this)}>
            <br/>REFERIDO
          </button>
          <div>
            <TextField className={classes.textFieldS7}  id="standard-basic" label="Otros:"/>
          </div>
        </Paper>

        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_10);