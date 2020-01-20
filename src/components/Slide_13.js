import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_13";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

class Slide_13 extends Component {

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
              <b>Anote sugerencias para mejorar los servicios prestados</b>
            </Typography>
          </Paper>

          <TextField className={classes.text_field} placeholder={"Agradecemos sus comentarios"} id="textarea" multiline rows="6" variant="outlined"/>

        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_13);