import React from "react";
import {Typography, Fab, Paper} from "@material-ui/core";
import './styles/toggleButton.css';

const buttonStyle = {
  minWidth: '120px',
  height: '200px',
  margin: '8px',
  paddingLeft: '8px',
  paddingRight: '8px',
  borderRadius: '8px',
  fontSize: '1.5em',
  cursor: 'pointer',
  outline: 'none',
};

let state = {
  legal: false,
  psychological: false,
  economical: false,
  medical: false,
  refuge: false,
};

let myvalues = [
  {legal: false},
  {psychological: false},
  {economical: false},
  {medical: false},
  {refuge: false},
];


function toggleLegal(){
  state.legal = !state.legal;
}
function togglePsychological(){
  state.psychological = !state.psychological;
}
function toggleEconomical(){
  state.economical = !state.economical;
}
function toggleMedical(){
  state.medical = !state.medical;
}
function toggleRefuge(){
  state.refuge = !state.refuge;
}

let legal = state.legal ? "selectedButton" : "unselectedButton";
let psychological = state.psychological ? "selectedButton" : "unselectedButton";
let economical = state.economical ? "selectedButton" : "unselectedButton";
let medical = state.medical ? "selectedButton" : "unselectedButton";
let refuge = state.refuge ? "selectedButton" : "unselectedButton";

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
        <ToggleButtons style={style} values={myvalues} clickButton={toggleEconomical} />

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