export default (theme) => ({
  //Backgrounds
  blackRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#000000',
  },
  tealRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#22968c',
  },
  greenRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#4aa338',
  },
  darkBlueRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#474558',
  },
  purpleRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#2700a5',
  },
  orangeRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#bf855f',
  },
  blueRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#4470c3',
  },
  goldRoot: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#8e851d',
  },

  //Containers
  paperS1: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
  },
  paperS2: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paperS3: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    display: "flex",
  },
  paperS4: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    display: "table",
  },
  paperTitle: {
    width: "105%",
    marginLeft: theme.spacing.unit * -3,
    marginBottom: theme.spacing.unit * 4,
  },
  containerS3:{
    width: "100%",
    textAlign: "center",
  },
  containerS4:{
    display: "table-row",
    textAlign: "left",
  },
  containerS5:{
    height: "100vh",
    width: "100%",
  },
  containerS11:{
    display: "flex",
    textAlign: "center",
  },
  containerToggle:{
    width: "100%",
    display: "block",
  },
  containerToggleS11:{
    display: "block",
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 6,
    width: "100%",
  },
  containerCheckbox:{
    width: "35%",
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    display: "table-cell",
  },

  //Images
  landingLogo: {
    width: "40%",
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },

  //Text
  whiteTitle:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  grayTitle:{
    padding: theme.spacing.unit * 6,
    color: 'gray',
  },
  whiteTypo:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  grayTypo:{
    padding: theme.spacing.unit * 4,
    color: 'gray',
  },
  blackTypo:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  tableTypo:{
    padding: theme.spacing.unit * 3,
    display: "table-cell",
    width: "35%",
    color: 'dimgray',
  },
  whiteTitleEnding:{
    paddingTop: theme.spacing.unit * 20,
    color: 'white',
  },

  //Widgets
  fabButton:{
    margin: theme.spacing.unit * 3,
    backgroundColor: 'white',
  },
  slider: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: "100%",
    maxWidth: "600px",
  },
  datePicker: {
    marginBottom: theme.spacing.unit * 5,
    width: "50%",
    maxWidth: "600px",
  },
  textFieldS3: {
    width: "50%",
  },
  textFieldS14: {
    width: "35%",
    margin: theme.spacing.unit * 2,
  },
  textFieldS7: {
    width: "80%",
    marginBottom: theme.spacing.unit * 2,
  },
  space: {
    height: "10%",
  },
  selectEmpty: {
    marginBottom: theme.spacing.unit * 5,
    width: "50%",
    maxWidth: "600px",
  },
  activeToggleButton: {
    minWidth: '120px',
    height: '200px',
    margin: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
    fontSize: '1.2em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'royalblue',
    color: 'white',
    borderColor: 'dimgray',
  },
  inactiveToggleButton: {
    minWidth: '120px',
    height: '200px',
    margin: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: '8px',
    fontSize: '1.2em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'white',
    color: 'dimgray',
    borderColor: 'dimgray',
  },
  switchLeftOff: {
    minWidth: '280px',
    height: '52px',
    borderRadius: '18px 0px 0px 18px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'white',
    color: 'dimgray',
    borderColor: 'dimgray',
  },
  switchRightOff: {
    minWidth: '280px',
    height: '52px',
    borderRadius: '0px 18px 18px 0px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'white',
    color: 'dimgray',
    borderColor: 'dimgray',
  },
  switchLeftOn: {
    minWidth: '280px',
    height: '52px',
    borderRadius: '18px 0px 0px 18px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'royalblue',
    color: 'white',
    borderColor: 'dimgray',
  },
  switchRightOn: {
    minWidth: '280px',
    height: '52px',
    borderRadius: '0px 18px 18px 0px',
    paddingLeft: '8px',
    paddingRight: '8px',
    fontSize: '1.5em',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'royalblue',
    color: 'white',
    borderColor: 'dimgray',
  },

});