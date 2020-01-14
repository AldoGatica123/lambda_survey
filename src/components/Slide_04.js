import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_04";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

class Slide_04 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { classes, handleChange, values } = this.props;

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

            <RadioGroup className={classes.toggle_group} name="gender" value={values.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Hombre" />
              <FormControlLabel value="female" control={<Radio />} label="Mujer" />
            </RadioGroup>
          </div>

          <div className={classes.row_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Orientación Sexual:
            </Typography>

            <RadioGroup className={classes.toggle_group} name="orientation" value={values.orientation} onChange={handleChange}>
              <FormControlLabel value="gay" control={<Radio />} label="Gay" />
              <FormControlLabel value="lesbian" control={<Radio />} label="Lesbiana" />
              <FormControlLabel value="bisexual" control={<Radio />} label="Bisexual" />
              <FormControlLabel value="trans" control={<Radio />} label="Trans" />
            </RadioGroup>

          </div>

          <div className={classes.checkbox_container}>
            <FormControlLabel
              control={<Checkbox  checked={values.indigenous} onChange={handleChange} value="indigenous"/>}
              label="Persona indígena" labelPlacement="start"/>
          </div>

          <div >
            <FormControlLabel
              control={<Checkbox checked={values.disability} onChange={handleChange} value="disability"/>}
              label="Persona con discapacidad" labelPlacement="start"/>
          </div>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Comenzar encuesta
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_04);