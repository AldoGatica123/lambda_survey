import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { MobileStepper,  Button }  from '@material-ui/core';
import styles from "./styles/SlidesStyle";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import axios from "axios";
import {utils, isProfileIncomplete} from '../utils'
import {Intro, SLIDE_01} from './Intro'
import {SLIDE_02, SLIDE_03, SLIDE_04} from "./Profile_Slides";
import {SLIDE_05} from "./Results";
import Slide_06 from "./Slide_06";
import Slide_07 from "./Slide_07";
import Slide_08 from "./Slide_08";
import Slide_09 from "./Slide_09";
import Slide_10 from "./Slide_10";
import Slide_11 from "./Slide_11";
import Slide_12 from "./Slide_12";
import Slide_13 from "./Slide_13";
import Slide_14 from "./Slide_14";
import EndSlide from "./EndSlide";

// const baseURL = 'https://jh4snq3376.execute-api.us-east-1.amazonaws.com/api';
const baseURL = 'http://localhost:8000';

let profile = utils.profile;
let results = utils.results;
const questions = utils.survey_questions;

class Main extends Component {

  state = {
    step: 0,
    profile,
    results,
  };

  survey_questions = questions;

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

  handleCheckboxChange = name => event => {
    this.setState({
      profile: {...this.state.profile, [name]: event.target.checked },
    });
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


  renderSteps = (step, profile, results, style) => {
    switch (step) {
      case 40:
        return <Intro style={style} nextStep={this.handleNext}/>;
      case 41:
        return <SLIDE_01 style={style} nextStep={this.handleNext}/>;
      case 42:
        return <SLIDE_02 style={style} nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 43:
        return <SLIDE_03 style={style} nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 44:
        return <SLIDE_04 style={style} nextStep={this.handleNext} handleChange={this.handleChange} values={profile}
                         handleCheckboxChange={this.handleCheckboxChange} disabled={(step === 4 && isProfileIncomplete(profile))}/>;
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return <SLIDE_05 style={style} nextStep={this.handleNext} question={this.survey_questions[(step)]}
                         key={(step)} handleChangeResults={this.handleChangeResults} values={results[this.survey_questions[step].id]}/>;
      case 13:
        return <Slide_06 nextStep={this.handleNext} values={results}/>;
      case 14:
        return <Slide_07 nextStep={this.handleNext} values={results}/>;
      case 15:
        return <Slide_08 nextStep={this.handleNext} values={results}/>;
      case 16:
        return <Slide_09 nextStep={this.handleNext} values={results}/>;
      case 17:
        return <Slide_10 nextStep={this.handleNext} values={results}/>;
      case 18:
        return <Slide_11 nextStep={this.handleNext} values={results}/>;
      case 19:
        return <Slide_12 nextStep={this.handleNext} values={results}/>;
      case 20:
        return <Slide_13 nextStep={this.handleNext} values={results}/>;
      case 21:
        return <Slide_14 nextStep={this.handleNext} values={results}/>;
      case 22:
        return <EndSlide submit={this.handleSubmit}/>;
      default:
        return null;
    }
  };

  render() {
    const { classes } = this.props;
    const { step, profile, results } = this.state;
    const maxSteps = 23;

    return (
      <div className={classes.containerS3}>
        <MobileStepper className={classes.stepper} steps={maxSteps} position="static" activeStep={step}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={step === maxSteps - 1 || (step === 4 && isProfileIncomplete(profile))}>
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
        <div className={classes.containerS3}>
          {this.renderSteps(step, profile, results, classes)}
        </div>
      </div>
    )
  };
}
export default withStyles(styles)(Main);