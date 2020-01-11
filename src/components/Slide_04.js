import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_03";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class Slide_04 extends Component {
  state = {
    alignment: 'left'
  };

  handleAlignment = (event, alignment) => this.setState({ alignment });

  render() {
    const {classes} = this.props;
    const { alignment } = this.state;

    return (

      <div className={classes.root}>
        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          Esta encuesta tiene como objetivo generar los mecanismos para tener evaluación del espacio seguro, del trabajo del gestor y los prestadores de servicio de la Red de Protección con el fin de mejorar los servicios pertinentes y que dentro de la atención y los servicios sean respetados los derechos humanos de las personas de interés.
        </Typography>

        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          <b>La encuesta se hace de manera anónima.</b>
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>
          <div className={classes.inner_container}>
            <div className={classes.toggle_container}>
              <ToggleButtonGroup size="medium" exclusive value={alignment} onChange={this.handleAlignment} >
                <ToggleButton value="left" aria-label="left aligned">
                  Hombre
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  Mujer
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  Otro
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </Paper>

        <Fab variant="extended" color="white" aria-label="add" className={classes.button}>
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_04);