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
    marginTop: "auto",
    display: "flex",
  },
  container:{
    height: "100vh",
    width: "100%",
  },
  inner_container:{
    width: "100%",
    textAlign: "center",
    padding: theme.spacing.unit * 5,
  },
  toggle_containerse:{
    width: "100%",
    textAlign: "center",
  },
  typo_white:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  toggle_container: {
    width: "50%",
    maxWidth: "600px",
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});