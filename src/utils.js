
module.exports = {
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
    services_given: [],
    needs_met: false,
    needs_feedback: '',
    refered_to_partner: false,
    partner_service: 1,
    had_problems: false,
    problems_encountered: '',
    seen_on: [],
    additional_channels: '',
    global_valuation: 1,
    is_confidential: false,
    confidential_feedback: '',
    suggestions: '',
  },

  contact: {
    contact_shared: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
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






