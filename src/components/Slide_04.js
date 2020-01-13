import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_04";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class Slide_04 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  state = {
    toggle_one: '',
    toggle_two: '',
  };

  handleAlignmentOne = (event, toggle_one) => this.setState({ toggle_one });
  handleAlignmentTwo = (event, toggle_two) => this.setState({ toggle_two });

  render() {
    const {classes} = this.props;
    const { toggle_one, toggle_two } = this.state;

    return (

      <div className={classes.root}>
        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          Esta encuesta tiene como objetivo generar los mecanismos para tener evaluación del espacio seguro, del trabajo del gestor y los prestadores de servicio de la Red de Protección con el fin de mejorar los servicios pertinentes y que dentro de la atención y los servicios sean respetados los derechos humanos de las personas de interés.
        </Typography>

        <Typography className={classes.typo_white} variant={"h6"} component={"h6"}>
          <b>La encuesta se hace de manera anónima.</b>
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>

          <div className={classes.row_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Género:
            </Typography>

            <ToggleButtonGroup className={classes.toggle_group} size="medium" exclusive value={toggle_one} onChange={this.handleAlignmentOne} >
              <ToggleButton className={classes.toggle_button} key={1} value="male" >
                Hombre
              </ToggleButton>
              <ToggleButton className={classes.toggle_button} key={2} value="woman" >
                Mujer
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={classes.row_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Orientación Sexual:
            </Typography>

            <ToggleButtonGroup className={classes.toggle_group} size="medium" exclusive value={toggle_two} onChange={this.handleAlignmentTwo} >
              <ToggleButton className={classes.toggle_button} key={1}  value="gay">
                Gay
              </ToggleButton>
              <ToggleButton className={classes.toggle_button} key={2}  value="lesbian">
                Lesbiana
              </ToggleButton>
              <ToggleButton className={classes.toggle_button} key={3}  value="bisexual">
                Bisexual
              </ToggleButton>
              <ToggleButton className={classes.toggle_button} key={4}  value="trans">
                Trans
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_04);