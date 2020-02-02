import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/SlidesStyle";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

class EndSlide extends Component {

  finish = (e) => {
    e.preventDefault();
    this.props.submit();
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.blackRoot}>
        <Typography className={classes.whiteTitleEnding} variant={"h2"} component={"h2"}><b>¡MUCHAS GRACIAS POR TU RETROALIMENTACIÓN!</b></Typography>
        <Typography className={classes.whiteTypo} variant={"h5"} component={"h5"}>Tus comentarios nos ayudan a mejorar nuestro servicio.</Typography>
        <Fab className={classes.fabButton} onClick={this.finish} variant="extended" aria-label="add">
          Volver a Empezar
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(EndSlide);