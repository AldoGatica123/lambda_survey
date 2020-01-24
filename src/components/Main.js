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
const axios = require('axios');

// const baseURL = 'https://jh4snq3376.execute-api.us-east-1.amazonaws.com/api';
const baseURL = 'http://localhost:8000';

class Main extends Component {

  state = {
    step: 0,
    profile: {
      survey_date: '',
      location: '',
      age: '',
      gender: '',
      sex: '',
      orientation: '',
      indigenous: false,
      disability: false,
    },
    results: {
      q_01: 1,
      q_02: 1,
      q_03: 1,
      q_04: 1,
      q_05: 1,
      q_06: 1,
      q_07: 1,
      q_08: 1,
    },
  };

  survey_questions = [
    {
      id: 'q_01',
      text: 'Estado de las instalaciones del espacio seguro',
    },
    {
      id: 'q_02',
      text: 'Estado del alojamiento / dormitorio',
    },
    {
      id: 'q_03',
      text: 'Calidad de actividades realizadas',
    },
    {
      id: 'q_04',
      text: 'Profesionalismo del personal de atención',
    },
    {
      id: 'q_05',
      text: 'Calidad de los alimentos recibidos',
    },
    {
      id: 'q_06',
      text: 'Limpieza de las instalaciones',
    },
    {
      id: 'q_07',
      text: 'Trato en general del personal hacia su persona',
    },
    {
      id: 'q_08',
      text: 'Calidad de la información que se le brindó',
    },
  ];

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


  renderSteps = (step, profile, results) => {
    switch (step) {
      case 30:
        return <Landing nextStep={this.handleNext}/>;
      case 31:
        return <Slide_01 nextStep={this.handleNext}/>;
      case 2:
        return <Slide_02 nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 3:
        return <Slide_03 nextStep={this.handleNext} handleChange={this.handleChange} values={profile}/>;
      case 4:
        return <Slide_04 nextStep={this.handleNext} handleChange={this.handleChange} handleCheckboxChange={this.handleCheckboxChange} values={profile}/>;
      case 5:
        return <Slide_05 key={0} question={this.survey_questions[0]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 6:
        return <Slide_05 key={1} question={this.survey_questions[1]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 7:
        return <Slide_05 key={2} question={this.survey_questions[2]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 8:
        return <Slide_05 key={3} question={this.survey_questions[3]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 9:
        return <Slide_05 key={4} question={this.survey_questions[4]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 10:
        return <Slide_05 key={5} question={this.survey_questions[5]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 11:
        return <Slide_05 key={6} question={this.survey_questions[6]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 12:
        return <Slide_05 key={7} question={this.survey_questions[7]} nextStep={this.handleNext} handleChangeResults={this.handleChangeResults} values={results}/>;
      case 13:
        return <Slide_06 nextStep={this.handleNext} values={results}/>;
      case 14:
        return <Slide_07 nextStep={this.handleNext} values={results}/>;
      case 0:
        return <Slide_08 nextStep={this.handleNext} values={results}/>;
      case 1:
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