import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import styles from "./styles/StepperStyle";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Landing from './Landing'
import Slide_01 from "./Slide_01";
import Slide_02 from "./Slide_02";
import Slide_03 from "./Slide_03";
import Slide_04 from "./Slide_04";
import Slide_05 from "./Slide_05";

class Stepper extends Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };


  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = 8;

    return (
      <div className={classes.root}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Siguiente
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Atrás
            </Button>
          }
        />
        <div className={classes.container}>
          {(() => {
            switch (activeStep) {
              case 0:
                return <Slide_04/>;
              case 1:
                return <Slide_01/>;
              case 2:
                return <Slide_02/>;
              case 3:
                return <Slide_03/>;
              case 4:
                return <Slide_04/>;
              case 5:
                return <Slide_05/>;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    )
  };
}
export default withStyles(styles)(Stepper);