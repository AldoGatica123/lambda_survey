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
import EndSlide from "./EndSlide";

class Stepper extends Component {

  state = {
    step: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  };

  handleSubmit = () => {
    const {step} = this.state;
    this.setState({step: 0});
  };

  render() {
    const { classes } = this.props;
    const { step } = this.state;
    const maxSteps = 7;

    return (
      <div className={classes.root}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={step}
          className={classes.stepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={step === maxSteps - 1}>
              Siguiente
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={step === 0}>
              <KeyboardArrowLeft />
              Atrás
            </Button>
          }
        />
        <div className={classes.container}>
          {(() => {
            switch (step) {
              case 0:
                return <Landing nextStep={this.handleNext}/>;
              case 1:
                return <Slide_01 nextStep={this.handleNext}/>;
              case 2:
                return <Slide_02 nextStep={this.handleNext}/>;
              case 3:
                return <Slide_03 nextStep={this.handleNext}/>;
              case 4:
                return <Slide_04 nextStep={this.handleNext}/>;
              case 5:
                return <Slide_05 nextStep={this.handleNext}/>;
              case 6:
                return <EndSlide submit={this.handleSubmit}/>;
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