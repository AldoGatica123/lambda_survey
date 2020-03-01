import React from "react";
import {Fab, Paper, Typography} from "@material-ui/core";
import logo from '../assets/img/lamdba_logo.png';


const Intro = (props) => {
  const {style, nextStep} = props;

  return (
    <div className={style.blackRoot}>
      <img className={style.landingLogo} src={logo} alt={logo}/>
      <Typography className={style.whiteTypo} variant={"h4"} component={"h4"}>Encuesta de satisfacción de servicio</Typography>
      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" color="white" aria-label="add" href={""}>
        Inicia
      </Fab>
    </div>
  )
};


const SLIDE_01 = (props) => {
  const {style, nextStep} = props;

  return (
    <div className={style.tealRoot}>
      <Typography className={style.whiteTitle} variant={"h4"} component={"h4"}>
        ASOCIACIÓN LAMBDA LE DA LA BIENVENIDA
      </Typography>

      <Paper className={style.paperS1} elevation={2} square={false}>
        <Typography className={style.blackTypo} variant={"h6"} component={"h6"}>
          <b>¿Sabe que es un espacio seguro?</b>
        </Typography>
        Un Espacio Seguro es un tipo de espacio físico o móvil donde grupos o personas pueden sentirse “seguras”, construir redes sociales, expresarse y entretenerse mientras reciben información y acceden a servicios de protección y asistencia de acuerdo con el enfoque de edad, género y diversidad, el enfoque centrado en la persona sobreviviente y el principio del interés superior de la niña o niño.
      </Paper>

      <Fab className={style.fabButton} onClick={nextStep}
           variant="extended" color="white" aria-label="add" href={""}>
        Siguiente
      </Fab>
    </div>
  )
};

const EndSlide = (props) => {
  const {style, submit} = props;

  return (
    <div className={style.blackRoot}>
      <Typography className={style.whiteTitleEnding} variant={"h2"} component={"h2"}><b>¡MUCHAS GRACIAS POR TU RETROALIMENTACIÓN!</b></Typography>
      <Typography className={style.whiteTypo} variant={"h5"} component={"h5"}>Tus comentarios nos ayudan a mejorar nuestro servicio.</Typography>
      <Fab className={style.fabButton} onClick={submit} variant="extended" aria-label="add">
        Volver a Empezar
      </Fab>
    </div>
  )
};


export {Intro, SLIDE_01, EndSlide};