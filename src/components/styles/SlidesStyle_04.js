export default (theme) => ({
  root: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: 'teal',
  },
  paper: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    display: "flex",
  },
  inner_container:{
    width: "100%",
    textAlign: "center",
    padding: theme.spacing.unit * 5,
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