
let servicesArray = [
  { label: "LEGAL", active: false},
  { label: "PSICOLÓGICO", active: false},
  { label: "ECONÓMICO", active: false},
  { label: "MÉDICO", active: false},
  { label: "ALBERGUE", active: false}
];

let channelsArray = [
  { label: "INTERNET", active: false},
  { label: "REDES SOCIALES", active: false},
  { label: "FERIAS O KIOSKOS", active: false},
  { label: "FOLLETOS", active: false},
  { label: "REFERIDO", active: false}
];

let utils= {
  profile:{
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
  feedback: {
    services_given: servicesArray,
    needs_met: {on: 'Si', off: 'No', active: false},
    needs_feedback: '',
    referred_to_partner: {on: 'Si', off: 'No', active: false},
    partner_service: 1,
    had_problems: {on: 'Si', off: 'No', active: false},
    problems_encountered: '',
    seen_on: channelsArray,
    additional_channels: '',
    global_valuation: 'regular',
    is_confidential: {on: 'Si', off: 'No', active: false},
    confidential_feedback: '',
    suggestions: '',
  },

  contact: {
    anonymity: "true",
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  },

  survey_questions: [
    { id: 'q_01',
      text: 'Estado de las instalaciones del espacio seguro', },
    { id: 'q_02',
      text: 'Estado del alojamiento / dormitorio', },
    { id: 'q_03',
      text: 'Calidad de actividades realizadas', },
    { id: 'q_04',
      text: 'Profesionalismo del personal de atención', },
    { id: 'q_05',
      text: 'Calidad de los alimentos recibidos', },
    { id: 'q_06',
      text: 'Limpieza de las instalaciones', },
    { id: 'q_07',
      text: 'Trato en general del personal hacia su persona', },
    { id: 'q_08',
      text: 'Calidad de la información que se le brindó', },
  ],
};


function isProfileIncomplete(profile){
  return !(profile.survey_date && profile.location && profile.age &&
    profile.gender && profile.sex && profile.orientation);

}




export {utils, isProfileIncomplete};