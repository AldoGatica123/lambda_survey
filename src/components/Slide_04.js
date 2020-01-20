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

class Slide_04 extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { classes, handleChange,  handleCheckboxChange, values } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.typo_white} variant={"h4"} component={"h4"}>
          Evaluación de espacios públicos
        </Typography>

        <Paper className={classes.paper} elevation={2} square={false}>

          <div className={classes.row_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Género:
            </Typography>

            <RadioGroup className={classes.toggle_group} name="gender" value={values.gender} onChange={handleChange}>
              <FormControlLabel value="man" control={<Radio />} label="Hombre" />
              <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
              <FormControlLabel value="trans_man" control={<Radio />} label="Hombre Transgénero" />
              <FormControlLabel value="trans_woman" control={<Radio />} label="Mujer Transgénero" />
            </RadioGroup>
          </div>

          <div className={classes.row_container}>
            <Typography className={classes.typo_black} variant={"h6"} component={"h6"}>
              Sexo:
            </Typography>

            <RadioGroup className={classes.toggle_group} name="sex" value={values.sex} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              <FormControlLabel value="female" control={<Radio />} label="Femenino" />
              <FormControlLabel value="intersexual" control={<Radio />} label="Intersexual" />
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
              <FormControlLabel value="straight" control={<Radio />} label="Heterosexual" />
            </RadioGroup>
          </div>

          <div className={classes.checkbox_container}>
            <FormControlLabel
              control={<Checkbox checked={values.indigenous} onChange={handleCheckboxChange('indigenous')} value="indigenous"/>}
              label="Persona indígena" labelPlacement="start"/>
          </div>

          <div >
            <FormControlLabel
              control={<Checkbox checked={values.disability} onChange={handleCheckboxChange('disability')} value="disability"/>}
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