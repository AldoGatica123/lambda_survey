export default (theme) => ({
  base: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center"
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
  container:{
    height: "100vh",
    width: "100%",
  },
  title:{
    padding: theme.spacing.unit * 10,
    paddingBottom:  theme.spacing.unit * 5,
    color: 'white',
  },
  typo:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  datePicker: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    width: "50%",
    maxWidth: "600px",
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});