import React from "react";
import {Typography, Fab, Paper} from "@material-ui/core";
import {BiSwitch, ToggleButtonGroup} from "./ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";


const SLIDE_06 = (props) => {
  const {style, nextStep, values} = props;

  return (
    <div className={style.purpleRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <Paper className={style.paperTitle} elevation={2} square={false}>
          <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
            <b>Servicio prestado en el espacio seguro</b>
          </Typography>
        </Paper>
        <ToggleButtonGroup style={style} values={values.services_given}/>

        <Typography className={style.grayTypo} variant={"h5"} component={"h5"}>
          Si se le brindó más de un servicio por favor márquelo
        </Typography>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};


const SLIDE_07 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.orangeRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <Paper className={style.paperTitle} elevation={2} square={false}>
          <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
            <b>¿Se le dió respuesta a sus necesidades?</b>
          </Typography>
        </Paper>

        <BiSwitch style={style} values={values.needs_met}/>

        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          Si su respuesta fue NO, por favor indicarnos por qué
        </Typography>

        <TextField className={style.textFieldS7} name="needs_feedback" multiline rows="2" type="text"
                   variant="outlined" onChange={handleChange} value={values.needs_feedback}/>

      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" color="white" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};






export {SLIDE_06, SLIDE_07}