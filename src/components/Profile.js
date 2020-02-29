import React from "react";
import {Typography, Fab, TextField, Paper, Select, Radio} from "@material-ui/core";
import {MenuItem, RadioGroup, FormControlLabel, Checkbox} from "@material-ui/core";


const depts = [
  'Guatemala', 'Alta Verapaz', 'Baja Verapaz', 'Chiquimula', 'El Progreso',
  'Escuintla', 'Huehuetenango', 'Izabal', 'Jalapa', 'Jutiapa', 'Petén',
  'Quetzaltenango', 'Quiché', 'Retalhuleu', 'Sacatepéquez', 'San Marcos',
  'Santa Rosa', 'Sololá', 'Suchitepéquez', 'Totonicapán', 'Zacapa', 'Chimaltenango',
];


const SLIDE_02 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.greenRoot}>
      <Typography className={style.whiteTitle} variant={"h4"} component={"h4"}>
        Evaluación de espacios públicos
      </Typography>

      <Typography className={style.whiteTypo} variant={"h6"} component={"h6"}>
        Esta encuesta tiene como objetivo la obtención de una evaluación de los ususarios/as del espacio seguro que proporciona Lambda con el fin de poder mejorar los servicios, la atención y las instalaciones que nosotros ofrecemos.
      </Typography>

      <Typography className={style.whiteTypo} variant={"h6"} component={"h6"}>
        La encuesta se hace de manera anónima. Si usted desea dejar sus datos personales, puede hacerlo al final de la encuesta indicándonos su nombre, correo electrónico o teléfono.
      </Typography>

      <Paper className={style.paperS2} elevation={2} square={false}>

        <Typography className={style.blackTypo} variant={"h6"} component={"h6"}>
          Fecha de la encuesta:
        </Typography>

        <TextField name="survey_date" defaultValue="2020-12-31"
                   className={style.datePicker} type="date" onChange={handleChange} value={values.survey_date}
                   InputLabelProps={{shrink: true,}}/>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  )
};


const SLIDE_03 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.greenRoot}>
      <Typography className={style.whiteTypo} variant={"h4"} component={"h4"}>
        Evaluación de espacios públicos
      </Typography>

      <Paper className={style.paperS3} elevation={2} square={false}>
        <div className={style.containerS3}>
          <Typography className={style.blackTypo} variant={"h6"} component={"h6"}>
            Lugar donde fue atendido:
          </Typography>
          <Select className={style.selectEmpty} value={values.location} onChange={handleChange}
                  inputProps={{ name: 'location', id: 'location' }}>
            {depts.map(depts => (
              <MenuItem key={depts} value={depts}>
                {depts}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={style.containerS3}>
          <Typography className={style.blackTypo} variant={"h6"} component={"h6"}>
            Su edad:
          </Typography>
          <TextField className={style.textFieldS3} name="age" type="number"
                     onChange={handleChange} value={values.age}/>
        </div>
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  )
};



const SLIDE_04 = (props) => {
  const {style, nextStep, handleChange, handleCheckboxChange, values, disabled} = props;

  return (
    <div className={style.greenRoot}>
      <Typography className={style.whiteTypo} variant={"h4"} component={"h4"}>
        Evaluación de espacios públicos
      </Typography>

      <Paper className={style.paperS4} elevation={2} square={false}>

        <div className={style.containerS4}>
          <Typography className={style.tableTypo} variant={"h6"} component={"h6"}>
            Género:
          </Typography>

          <RadioGroup className={style.containerToggle} name="gender" value={values.gender} onChange={handleChange}>
            <FormControlLabel value="man" control={<Radio />} label="Hombre" />
            <FormControlLabel value="woman" control={<Radio />} label="Mujer" />
            <FormControlLabel value="trans_man" control={<Radio />} label="Hombre Transgénero" />
            <FormControlLabel value="trans_woman" control={<Radio />} label="Mujer Transgénero" />
          </RadioGroup>
        </div>

        <div className={style.containerS4}>
          <Typography className={style.tableTypo} variant={"h6"} component={"h6"}>
            Sexo:
          </Typography>

          <RadioGroup className={style.containerToggle} name="sex" value={values.sex} onChange={handleChange}>
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="intersexual" control={<Radio />} label="Intersexual" />
          </RadioGroup>
        </div>

        <div className={style.containerS4}>
          <Typography className={style.tableTypo} variant={"h6"} component={"h6"}>
            Orientación Sexual:
          </Typography>

          <RadioGroup className={style.containerToggle} name="orientation" value={values.orientation} onChange={handleChange}>
            <FormControlLabel value="gay" control={<Radio />} label="Gay" />
            <FormControlLabel value="lesbian" control={<Radio />} label="Lesbiana" />
            <FormControlLabel value="bisexual" control={<Radio />} label="Bisexual" />
            <FormControlLabel value="straight" control={<Radio />} label="Heterosexual" />
          </RadioGroup>
        </div>

        <div className={style.containerCheckbox}>
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

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" aria-label="add" href={""} disabled={disabled}>
        Comenzar encuesta
      </Fab>
      {disabled > 0 &&
      <h5 style={{ color: 'white' }}>
        Para comenzar la encuesta, por favor llena todos los campos anteriores.
      </h5>}
    </div>
  )
};


const SLIDE_14 = (props) => {
  const {style, nextStep, handleChange, values} = props;

  return (
    <div className={style.greenRoot}>
        <div className={style.space}/>

        <Paper className={style.paperS2} elevation={2} square={false}>

          <Paper className={style.paperTitle} elevation={2} square={false}>
            <Typography className={style.grayTitle} variant={"h5"} component={"h5"}>
              <b>Deseo enviar la encuesta de las siguiente manera:</b>
            </Typography>
          </Paper>

          <RadioGroup className={style.containerToggle} name="anonymity" value={values.anonymity} onChange={handleChange}>
            <FormControlLabel value="anonymous" control={<Radio />} label="de forma anónima" />
            <FormControlLabel value="non_anon" control={<Radio />} label="deseo añadir mis datos personales" />
          </RadioGroup>

          <TextField name="first_name" label="Nombre" type="text"
                     className={style.textFieldS14} onChange={handleChange} value={values.first_name}/>
          <TextField name="last_name" label="Apellidos" type="text"
                     className={style.textFieldS14} onChange={handleChange} value={values.last_name}/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={style.textFieldS14} onChange={handleChange} value={values.email}/>
          <TextField name="phone_number" label="Número de Teléfono" type="number"
                     className={style.textFieldS14} onChange={handleChange} value={values.phone_number}/>

        </Paper>

        <Fab className={style.fabButton} onClick={nextStep} variant="extended" color="white" aria-label="add">
          Finalizar encuesta
        </Fab>
      </div>
  )
};


export {SLIDE_02, SLIDE_03, SLIDE_04, SLIDE_14};