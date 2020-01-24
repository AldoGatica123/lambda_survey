import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
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
      <div className={classes.greenRoot}>
        <Typography className={classes.whiteTypo} variant={"h4"} component={"h4"}>
          Evaluación de espacios públicos
        </Typography>

        <Paper className={classes.paperS4} elevation={2} square={false}>

          <div className={classes.containerS4}>
            <Typography className={classes.tableTypo} variant={"h6"} component={"h6"}>
              Género:
            </Typography>

            <RadioGroup className={classes.containerToggle} name="gender" value={values.gender} onChange={handleChange}>
              <FormControlLabel value="man" control={<Radio />} label="Hombre" />
              <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
              <FormControlLabel value="trans_man" control={<Radio />} label="Hombre Transgénero" />
              <FormControlLabel value="trans_woman" control={<Radio />} label="Mujer Transgénero" />
            </RadioGroup>
          </div>

          <div className={classes.containerS4}>
            <Typography className={classes.tableTypo} variant={"h6"} component={"h6"}>
              Sexo:
            </Typography>

            <RadioGroup className={classes.containerToggle} name="sex" value={values.sex} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              <FormControlLabel value="female" control={<Radio />} label="Femenino" />
              <FormControlLabel value="intersexual" control={<Radio />} label="Intersexual" />
            </RadioGroup>
          </div>

          <div className={classes.containerS4}>
            <Typography className={classes.tableTypo} variant={"h6"} component={"h6"}>
              Orientación Sexual:
            </Typography>

            <RadioGroup className={classes.containerToggle} name="orientation" value={values.orientation} onChange={handleChange}>
              <FormControlLabel value="gay" control={<Radio />} label="Gay" />
              <FormControlLabel value="lesbian" control={<Radio />} label="Lesbiana" />
              <FormControlLabel value="bisexual" control={<Radio />} label="Bisexual" />
              <FormControlLabel value="straight" control={<Radio />} label="Heterosexual" />
            </RadioGroup>
          </div>

          <div className={classes.containerCheckbox}>
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

        <Fab className={classes.fabButton} onClick={this.continue} variant="extended" aria-label="add">
          Comenzar encuesta
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Slide_04);