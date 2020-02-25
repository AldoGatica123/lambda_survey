import React, {Component} from "react";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider"


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
                aria-labelledby="discrete-slider" valueLabelDisplay="none"/>
        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          <b>Deslice su dedo para indicar su calificación</b>
        </Typography>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" color="white" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  )

};


export {SLIDE_05}