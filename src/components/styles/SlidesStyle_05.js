export default (theme) => ({
  root: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: 'teal',
  },
  background: {
    minHeight: "100%",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: 'teal',
  },
  paper: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  space: {
    height: "10%",
  },
  innerPaper: {
    width: "105%",
    marginLeft: theme.spacing.unit * -3,
  },
  container:{
    height: "100vh",
    width: "100%",
  },
  title:{
    padding: theme.spacing.unit * 10,
    paddingBottom:  theme.spacing.unit * 5,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  typo_gray:{
    padding: theme.spacing.unit * 4,
    color: 'gray',
  },
  slider: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: "50%",
    maxWidth: "600px",
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});