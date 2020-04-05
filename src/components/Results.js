import React from "react";

import {Typography, Fab, Paper, Slider} from "@material-ui/core";


const marks = [
  { value: 1, label: 'Muy Malo'},
  { value: 2, label: 'Malo'},
  { value: 3, label: 'Regular'},
  { value: 4, label: 'Bueno'},
  { value: 5, label: 'Muy Bueno'},
];


const SLIDE_05 = (props) => {
  const {style, nextStep, handleChangeResults, values, question} = props;

  return (
    <div className={style.darkBlueRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <Paper className={style.paperTitle} elevation={2} square={false}>
          <Typography className={style.grayTypo} variant={"h5"} component={"h5"}>
            <b>Puntee del 1 (muy malo) a 5 (muy bueno) los siguientes aspectos del espacio seguro.</b>
          </Typography>
        </Paper>

        <Typography className={style.blackTypo} variant={"h5"} component={"h5"}>
          <b>{question.text}</b>
        </Typography>
        <Slider className={style.slider} value={values}
                onChange={handleChangeResults(question.id)} marks={marks} step={1} min={1} max={5}
                aria-labelledby="discrete-slider" valueLabelDisplay="auto"/>
        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          <b>Deslice su dedo para indicar su calificación</b>
        </Typography>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  )

};


export {SLIDE_05}