import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle_14";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Slide_14 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { classes, handleChange,  handleCheckboxChange, values } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.space}>
        </div>

        <Paper className={classes.paper} elevation={2} square={false}>

          <Paper className={classes.innerPaper} elevation={2} square={false}>
            <Typography className={classes.title} variant={"h5"} component={"h5"}>
              <b>Deseo enviar la encuesta de las siguiente manera:</b>
            </Typography>
          </Paper>

          <RadioGroup className={classes.toggle_group} name="anonymity" value={values.anonymity} onChange={handleChange}>
            <FormControlLabel value="anonymous" control={<Radio />} label="de forma anónima" />
            <FormControlLabel value="non_anon" control={<Radio />} label="deseo añadir mis datos personales" />
          </RadioGroup>

          <TextField name="first_name" label="Nombre" type="text"
                     className={classes.text_field} onChange={handleChange} value={values.first_name}/>
          <TextField name="last_name" label="Apellidos" type="text"
                     className={classes.text_field} onChange={handleChange} value={values.last_name}/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={classes.text_field} onChange={handleChange} value={values.email}/>
          <TextField name="phone_number" label="Número de Teléfono" type="number"
                     className={classes.text_field} onChange={handleChange} value={values.phone_number}/>

        </Paper>

        <Fab className={classes.button} onClick={this.continue} variant="extended" color="white" aria-label="add">
          Finalizar encuesta
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_14);