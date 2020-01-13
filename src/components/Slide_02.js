import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_02";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField"

class Slide_02 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, handleChange, values} = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          Esta encuesta tiene como objetivo la obtención de una evaluación de los ususarios/as del espacio seguro que proporciona Lambda con el fin de poder mejorar los servicios, la atención y las instalaciones que nosotros ofrecemos.
        </Typography>

        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          La encuesta se hace de manera anónima. Si usted desea dejar sus datos personales, puede hacerlo al final de la encuesta indicandonos su nombre, correo electrónico o teléfono.
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>

          <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
            Fecha de la encuesta:
          </Typography>

          <TextField name="survey_date" defaultValue="2020-12-31"
                     className={classes.datePicker} type="date" onChange={handleChange} value={values.survey_date}
                     InputLabelProps={{shrink: true,}}/>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_02);