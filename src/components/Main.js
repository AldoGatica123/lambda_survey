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
const axios = require('axios');

// const baseURL = 'https://jh4snq3376.execute-api.us-east-1.amazonaws.com/api';
const baseURL = 'http://localhost:8000';

class Main extends Component {

  state = {
    step: 0,
    profile: {},
    results: {},
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

  handleChange = (e) => {
    this.setState({
      profile: {...this.state.profile, [e.target.name]: e.target.value},
    })
  };

  handleChangeResults  = name => (e, value) => {
    this.setState({
      results: {...this.state.results, [name]: value},
    });
  };

  handleSubmit = () => {
    this.setState({step: 0});
    axios.post(baseURL + '/survey', { ...this.state })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };


  renderSteps = (step, profile, results) => {
    switch (step) {
      case 4:
        return <Landing nextStep={this.handleNext}/>;
      case 1:
        return <Slide_01 nextStep={this.handleNext}/>;
      case 2:
        return <Slide_02 nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 3:
        return <Slide_03 nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 0:
        return <Slide_04 nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 5:
        return <Slide_05 nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 6:
        return <EndSlide submit={this.handleSubmit}/>;
      default:
        return null;
    }
  };

  render() {
    const { classes } = this.props;
    const { step, profile, results } = this.state;
    const maxSteps = 7;

    return (
      <div className={classes.root}>
        <MobileStepper className={classes.stepper} steps={maxSteps} position="static" activeStep={step}
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
          {this.renderSteps(step, profile, results)}
        </div>
      </div>
    )
  };
}
export default withStyles(styles)(Main);