import React from "react";
import {Typography, Fab, Paper} from "@material-ui/core";
import {BiSwitch, ToggleButtonGroup} from "./ToggleButtonGroup";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";

const marks = [
  { value: 1, label: 'Muy Malo'},
  { value: 2, label: 'Malo'},
  { value: 3, label: 'Regular'},
  { value: 4, label: 'Bueno'},
  { value: 5, label: 'Muy Bueno'},
];

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

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};


const SLIDE_08 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.blueRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <Paper className={style.paperTitle} elevation={2} square={false}>
          <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
            <b>¿Se le refirió con otro socio de la Red Nacional de Protección para cubrir necesidades?</b>
          </Typography>
        </Paper>

        <BiSwitch style={style} values={values.referred_to_partner}/>

        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          Si su respuesta es SI, por favor indicarnos la calidad del servicio del socio
        </Typography>

        <Slider className={style.slider} value={values.partner_service}
                onChange={handleChange("partner_service")}
                marks={marks} step={1} min={1} max={5}
                aria-labelledby="discrete-slider" valueLabelDisplay="auto"/>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};


const SLIDE_09 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.goldRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <Paper className={style.paperTitle} elevation={2} square={false}>
          <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
            <b>¿Ha tenido algún problema o incidente durante su estancia en el espacio seguro ofrecido por Lambda?</b>
          </Typography>
        </Paper>

        <BiSwitch style={style} values={values.had_problems}/>

        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          ¿En caso afirmativo, puede escribir el incidente o problema?
        </Typography>

        <TextField className={style.textFieldS7} name="problems_encountered" multiline rows="2" type="text"
                   variant="outlined" onChange={handleChange} value={values.problems_encountered}/>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};






export {SLIDE_06, SLIDE_07, SLIDE_08, SLIDE_09}