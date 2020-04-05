import React from "react";
import {Typography, Fab, Paper, MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import {BiSwitch, ToggleButtonGroup} from "./ToggleButtonGroup";
import {TextField, Slider, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";

const marks = [
  { value: 1, label: 'Muy Malo'},
  { value: 2, label: 'Malo'},
  { value: 3, label: 'Regular'},
  { value: 4, label: 'Bueno'},
  { value: 5, label: 'Muy Bueno'},
];

const theme = createMuiTheme({
  palette: {
    primary: { main: '#119b5f' },
    secondary: { main: '#11cb5f' },
  },
});


const PaperTitle = (props) => {
  const {style, title} = props;

  return (
    <Paper className={style.paperTitle} elevation={2} square={false}>
      <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
        <b>{title}</b>
      </Typography>
    </Paper>
  )
};



const SLIDE_06 = (props) => {
  const {style, nextStep, values} = props;

  return (
    <div className={style.purpleRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <PaperTitle style={style} title={"Servicio prestado en el espacio seguro"}/>

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
        <PaperTitle style={style} title={"¿Se le dió respuesta a sus necesidades?"}/>

        <BiSwitch style={style} values={values.needs_met} toggleClick={handleChange}/>

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
        <PaperTitle style={style} title={"¿Se le refirió con otro socio de la Red Nacional de Protección para cubrir necesidades?"}/>

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
        <PaperTitle style={style} title={"¿Ha tenido algún problema o incidente durante su estancia en el espacio seguro ofrecido por Lambda?"}/>

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


const SLIDE_10 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.greenRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <PaperTitle style={style} title={"¿Cómo conoció del espacio seguro?"}/>

        <ToggleButtonGroup style={style} values={values.seen_on}/>

        <div>
          <TextField className={style.textFieldS7} name="additional_channels" label="Otros:"
                     onChange={handleChange} value={values.additional_channels}/>
        </div>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};



const SLIDE_11 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.greenRoot}>
      <div className={style.space}/>
      <Paper className={style.paperS2} elevation={2} square={false}>
        <PaperTitle style={style} title={"¿Cuál es su valoración global sobre el espacio seguro que ofrece Lambda?"}/>
        <div className={style.containerS11}>

          <MuiThemeProvider theme={theme}>
            <RadioGroup className={style.containerToggleS11} name="global_valuation" value={values.global_valuation} onChange={handleChange}>
              <FormControlLabel value="very_good" control={<Radio />} label="Muy Buena" />
              <FormControlLabel value="good" control={<Radio />} label="Buena" />
              <FormControlLabel value="regular" control={<Radio />} label="Regular" />
              <FormControlLabel value="bad" control={<Radio />} label="Mala" />
              <FormControlLabel value="very_bad" control={<Radio />} label="Muy Mala" />
            </RadioGroup>
          </MuiThemeProvider>
        </div>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};


const SLIDE_12 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.purpleRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <PaperTitle style={style} title={"¿Considera que sus datos personales u otra información personal ha sido tratada de manera confidencial?"}/>

        <BiSwitch style={style} values={values.is_confidential}/>

        <Typography className={style.grayTypo} variant={"h6"} component={"h6"}>
          Si su respuesta fue NO, por favor indicarnos por qué
        </Typography>
        <TextField className={style.textFieldS7} name="confidential_feedback" multiline rows="3" type="text"
                   variant="outlined" onChange={handleChange} value={values.confidential_feedback}/>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};


const SLIDE_13 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.purpleRoot}>
      <div className={style.space}/>

      <Paper className={style.paperS2} elevation={2} square={false}>
        <PaperTitle style={style} title={"Anote sugerencias para mejorar los servicios prestados"}/>

        <TextField className={style.textFieldS7} name="suggestions" multiline rows="6" type="text" variant="outlined"
                   placeholder={"Agradecemos sus comentarios"} onChange={handleChange} value={values.suggestions}/>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep} variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  );
};






export {SLIDE_06, SLIDE_07, SLIDE_08, SLIDE_09, SLIDE_10, SLIDE_11, SLIDE_12, SLIDE_13}