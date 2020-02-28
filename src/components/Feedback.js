import React from "react";
import {Typography, Fab, Paper} from "@material-ui/core";
import {ToggleButtonGroup} from "./ToggleButtonGroup";


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

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add">
        Siguiente
      </Fab>
    </div>
  );
};

const ToggleButtons = (props) => {
  const {style, values, clickButton} = props;
  const toggle_button_list = values.map((key, value) =>
    <button style={style} className={key} name={value} value={value} onClick={clickButton}>{value}</button>
  );

  return (
    toggle_button_list
  )

};


export {SLIDE_06}