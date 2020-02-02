import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

class Slide_12 extends Component {

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

      <div className={classes.purpleRoot}>
        <div className={classes.space}/>

        <Paper className={classes.paperS2} elevation={2} square={false}>
          <Paper className={classes.paperTitle} elevation={2} square={false}>
            <Typography className={classes.grayTitle} variant={"h5"} component={"h5"}>
              <b>¿Considera que sus datos personales u otra información personal ha sido tratada de manera confidencial?</b>
            </Typography>
          </Paper>

          <button style={this.leftButton} className={yes} name={"yes"} value={"yes"} onClick={this.toggleButton.bind(this)}>
            SI
          </button>
          <button style={this.rightButton} className={no} name={"no"} value={"no"} onClick={this.toggleButton.bind(this)}>
            NO
          </button>


          <Typography className={classes.grayTypo} variant={"h6"} component={"h6"}>
            Si su respuesta fue NO, por favor indicarnos por qué
          </Typography>

          <TextField className={classes.textFieldS7} id="textarea" multiline rows="3" variant="outlined"/>

        </Paper>

        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_12);