import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_03";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"

const depts = [
  'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chiquimula', 'El Progreso',
  'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa', 'Jutiapa', 'Petén',
  'Quetzaltenango', 'Quiché', 'Retalhuleu', 'Sacatepéquez', 'San Marcos',
  'Santa Rosa', 'Sololá', 'Suchitepéquez', 'Totonicapán', 'Zacapa', 'Chimaltenango',
];

class Slide_03 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, handleChange, values} = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.typo_white} variant={"h4"} component={"h4"}>
          Evaluación de espacios públicos
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>
          <div className={classes.inner_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Lugar donde fue atendido:
            </Typography>
            <Select className={classes.selectEmpty} value={values.location} onChange={handleChange}
                    inputProps={{ name: 'location', id: 'location' }}>
              {depts.map(depts => (
                <MenuItem key={depts} value={depts}>
                  {depts}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className={classes.inner_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Su edad:
            </Typography>
            <TextField className={classes.text_field} name="age" type="number"
                       onChange={handleChange} value={values.age}/>
          </div>
        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Siguiente
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_03);