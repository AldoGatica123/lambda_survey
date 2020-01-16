export default (theme) => ({
  root: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#4aa338',
  },
  paper: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title:{
    padding: theme.spacing.unit * 10,
    paddingBottom:  theme.spacing.unit * 5,
    color: 'white',
  },
  typo_white:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  datePicker: {
    marginBottom: theme.spacing.unit * 5,
    width: "50%",
    maxWidth: "600px",
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});