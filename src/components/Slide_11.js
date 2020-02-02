import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
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

      <div className={classes.greenRoot}>
        <div className={classes.space}/>

        <Paper className={classes.paperS2} elevation={2} square={false}>
          <Paper className={classes.paperTitle} elevation={2} square={false}>
            <Typography className={classes.grayTitle} variant={"h5"} component={"h5"}>
              <b>¿Cuál es su valoración global sobre el espacio seguro que ofrece Lambda?</b>
            </Typography>
          </Paper>

          <div className={classes.containerS11}>
            <RadioGroup className={classes.containerToggleS11} name="orientation" value={values.service} onChange={handleChangeResults}>
              <FormControlLabel value="very_good" control={<Radio />} label="Muy Buena" />
              <FormControlLabel value="good" control={<Radio />} label="Buena" />
              <FormControlLabel value="regular" control={<Radio />} label="Regular" />
              <FormControlLabel value="bad" control={<Radio />} label="Mala" />
              <FormControlLabel value="very_bad" control={<Radio />} label="Muy Mala" />
            </RadioGroup>
          </div>

        </Paper>

        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_11);