import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_11";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import './styles/toggleButton.css';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class Slide_11 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, handleChangeResults, values} = this.props;

    return (

      <div className={classes.root}>
        <div className={classes.space}>
        </div>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Paper className={classes.innerPaper} elevation={2} square={false}>
            <Typography className={classes.title} variant={"h5"} component={"h5"}>
              <b>¿Cuál es su valoración global sobre el espacio seguro que ofrece lambda?</b>
            </Typography>
          </Paper>

          <div className={classes.row_container}>
            <RadioGroup className={classes.toggle_group} name="orientation" value={values.service} onChange={handleChangeResults}>
              <FormControlLabel value="very_good" control={<Radio />} label="Muy Buena" />
              <FormControlLabel value="good" control={<Radio />} label="Buena" />
              <FormControlLabel value="regular" control={<Radio />} label="Regular" />
              <FormControlLabel value="bad" control={<Radio />} label="Mala" />
              <FormControlLabel value="very_bad" control={<Radio />} label="Muy Mala" />
            </RadioGroup>
          </div>

        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_11);