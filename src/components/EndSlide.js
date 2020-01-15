import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/EndSlideStyle";
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
      <div className={classes.base}>
        <Typography className={classes.title} variant={"h2"} component={"h2"}><b>¡MUCHAS GRACIAS POR TU RETROALIMENTACIÓN!</b></Typography>
        <Typography className={classes.typo} variant={"h5"} component={"h5"}>Tus comentarios nos ayudan a mejorar nuestro servicio.</Typography>
        <Fab className={classes.button} onClick={this.finish} variant="extended" color="white" aria-label="add">
          Volver a Empezar
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(EndSlide);