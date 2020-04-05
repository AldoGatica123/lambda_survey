import React, {useState} from 'react';
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


const questions = utils.survey_questions;
const maxSteps = 23;

const Main = (props) => {
  const { classes } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState(utils.profile);
  const [results, setResults] = useState(utils.results);
  const [feedback, setFeedback] = useState(utils.feedback);
  const [contact, setContact] = useState(utils.contact);


  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleProfileChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  const handleFeedbackChange = (e) => {
    setFeedback({...feedback, [e.target.name]: e.target.value});
  };

  const handleContactChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  const handleChangeFeedback  = name => (e, value) => {
    setFeedback({...feedback, [name]: value});
  };

  const handleCheckboxChange = name => event => {
    setProfile({...profile, [name]: event.target.checked });
  };

  const handleChangeResults  = name => (e, value) => {
    setResults({...results, [name]: value});
  };

  const resetValues = () => {
    console.log("Resetting values");
    setProfile(utils.profile);
    setResults(utils.results);
    setFeedback(utils.feedback);
    setContact(utils.contact);
  };

  const handleSubmit = () => {
    console.log("Posting results");
    axios.post(process.env.REACT_APP_CHALICE_URL + '/notify', { profile, results, feedback, contact })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
          console.log(error.response)
      });
    handleNext();
    resetValues();
  };

  const renderSteps = (profile, results, feedback, contact, style) => {
    switch (currentStep) {
      case 0:
        return <Intro style={style} nextStep={handleNext}/>;
      case 1:
        return <SLIDE_01 style={style} nextStep={handleNext}/>;
      case 2:
        return <SLIDE_02 style={style} nextStep={handleNext} handleChange={handleProfileChange} values={profile}/>;
      case 3:
        return <SLIDE_03 style={style} nextStep={handleNext} handleChange={handleProfileChange} values={profile}/>;
      case 4:
        return <SLIDE_04 style={style} nextStep={handleNext} handleChange={handleProfileChange}
                         handleCheckboxChange={handleCheckboxChange} values={profile} disabled={(currentStep === 4 && isProfileIncomplete(profile))}/>;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return <SLIDE_05 style={style} nextStep={handleNext} question={questions[(currentStep-5)]}
                         key={(currentStep-5)} handleChangeResults={handleChangeResults} values={results[questions[currentStep-5].id]}/>;
      case 13:
        return <SLIDE_06 style={style} nextStep={handleNext} values={feedback}/>;
      case 14:
        return <SLIDE_07 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 15:
        return <SLIDE_08 style={style} nextStep={handleNext} handleChange={handleChangeFeedback} values={feedback}/>;
      case 16:
        return <SLIDE_09 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 17:
        return <SLIDE_10 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 18:
        return <SLIDE_11 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 19:
        return <SLIDE_12 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 20:
        return <SLIDE_13 style={style} nextStep={handleNext} handleChange={handleFeedbackChange} values={feedback}/>;
      case 21:
        return <SLIDE_14 style={style} nextStep={handleSubmit} handleChange={handleContactChange} values={contact}/>;
      case 22:
        return <EndSlide style={style} submit={() => setCurrentStep(0)}/>;
      default:
        return null;
    }
  };

  return (
    <div className={classes.containerS3}>
      <MobileStepper className={classes.stepper} steps={maxSteps} position="static" activeStep={currentStep}
                     nextButton={
                       <Button size="small" onClick={handleNext} disabled={currentStep === maxSteps - 1 ||
                       (currentStep === 4 && isProfileIncomplete(profile)) || currentStep === 21} href={""}>
                         Siguiente
                         <KeyboardArrowRight />
                       </Button>
                     }
                     backButton={
                       <Button size="small" onClick={handleBack} disabled={currentStep === 0 || currentStep === 22} href={""}>
                         <KeyboardArrowLeft />
                         Atrás
                       </Button>
                     }
      />
      <div className={classes.containerS3}>
        {renderSteps(profile, results, feedback, contact, classes)}
      </div>
    </div>
  )

};

export default withStyles(styles)(Main);