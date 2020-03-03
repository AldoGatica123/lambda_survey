import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { MobileStepper,  Button }  from '@material-ui/core';
import styles from "./styles/SlidesStyle";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import axios from "axios";
import {utils, isProfileIncomplete} from '../utils'
import {Intro, SLIDE_01, EndSlide} from './SimpleSlides'
import {SLIDE_02, SLIDE_03, SLIDE_04, SLIDE_14} from "./Profile";
import {SLIDE_05} from "./Results";
import {SLIDE_06, SLIDE_07, SLIDE_08, SLIDE_09, SLIDE_10,
  SLIDE_11, SLIDE_12, SLIDE_13} from "./Feedback";

const baseURL = 'https://bxmscxw7j1.execute-api.us-east-1.amazonaws.com/api';

let profile = utils.profile;
let results = utils.results;
let feedback = utils.feedback;
let contact = utils.contact;
const questions = utils.survey_questions;

class Main extends Component {

  state = {
    step: 0,
    profile,
    results,
    feedback,
    contact,
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

  handleProfileChange = (e) => {
    this.setState({
      profile: {...this.state.profile, [e.target.name]: e.target.value},
    })
  };

  handleFeedbackChange = (e) => {
    this.setState({
      feedback: {...this.state.feedback, [e.target.name]: e.target.value},
    })
  };

  handleContactChange = (e) => {
    this.setState({
      contact: {...this.state.contact, [e.target.name]: e.target.value},
    })
  };


  handleChangeFeedback  = name => (e, value) => {
    this.setState({
      feedback: {...this.state.feedback, [name]: value},
    });
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
    axios.post(baseURL + '/notify', { ...this.state })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
          console.log(error.response)
      });;
    this.handleNext();
  };

  handleReset = () => {
    this.setState({step: 0});
  };


  renderSteps = (step, profile, results, feedback, contact, style) => {
    switch (step) {
      case 0:
        return <Intro style={style} nextStep={this.handleNext}/>;
      case 1:
        return <SLIDE_01 style={style} nextStep={this.handleNext}/>;
      case 2:
        return <SLIDE_02 style={style} nextStep={this.handleNext} handleChange={this.handleProfileChange} values={profile}/>;
      case 3:
        return <SLIDE_03 style={style} nextStep={this.handleNext} handleChange={this.handleProfileChange} values={profile}/>;
      case 4:
        return <SLIDE_04 style={style} nextStep={this.handleNext} handleChange={this.handleProfileChange}
                         handleCheckboxChange={this.handleCheckboxChange} values={profile} disabled={(step === 4 && isProfileIncomplete(profile))}/>;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return <SLIDE_05 style={style} nextStep={this.handleNext} question={questions[(step-5)]}
                         key={(step-5)} handleChangeResults={this.handleChangeResults} values={results[questions[step-5].id]}/>;
      case 13:
        return <SLIDE_06 style={style} nextStep={this.handleNext} values={feedback}/>;
      case 14:
        return <SLIDE_07 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 15:
        return <SLIDE_08 style={style} nextStep={this.handleNext} handleChange={this.handleChangeFeedback} values={feedback}/>;
      case 16:
        return <SLIDE_09 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 17:
        return <SLIDE_10 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 18:
        return <SLIDE_11 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 19:
        return <SLIDE_12 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 20:
        return <SLIDE_13 style={style} nextStep={this.handleNext} handleChange={this.handleFeedbackChange} values={feedback}/>;
      case 21:
        return <SLIDE_14 style={style} nextStep={this.handleSubmit} handleChange={this.handleContactChange} values={contact}/>;
      case 22:
        return <EndSlide style={style} submit={this.handleReset}/>;
      default:
        return null;
    }
  };

  render() {
    const { classes } = this.props;
    const { step, profile, results , feedback, contact} = this.state;
    const maxSteps = 23;

    return (
      <div className={classes.containerS3}>
        <MobileStepper className={classes.stepper} steps={maxSteps} position="static" activeStep={step}
                       nextButton={
                         <Button size="small" onClick={this.handleNext} disabled={step === maxSteps - 1 || (step === 4 && isProfileIncomplete(profile))} href={""}>
                           Siguiente
                           <KeyboardArrowRight />
                         </Button>
                       }
                       backButton={
                         <Button size="small" onClick={this.handleBack} disabled={step === 0} href={""}>
                           <KeyboardArrowLeft />
                           Atrás
                         </Button>
                       }
        />
        <div className={classes.containerS3}>
          {this.renderSteps(step, profile, results, feedback, contact, classes)}
        </div>
      </div>
    )
  };
}
export default withStyles(styles)(Main);