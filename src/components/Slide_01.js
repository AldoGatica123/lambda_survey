import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_01";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";

class Slide_01 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant={"h4"} component={"h4"}>
          ASOCIACIÓN LAMBDA LE DA LA BIENVENIDA
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography className={classes.typo} variant={"h6"} component={"h6"}>
            <b>¿Sabe que es un espacio seguro?</b>
          </Typography>
          Un Espacio Seguro es un tipo de espacio físico o móvil donde grupos o personas pueden sentirse “seguras”, construir redes sociales, expresarse y entretenerse mientras reciben información y acceden a servicios de protección y asistencia de acuerdo con el enfoque de edad, género y diversidad, el enfoque centrado en la persona sobreviviente y el principio del interés superior de la niña o niño.
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_01);