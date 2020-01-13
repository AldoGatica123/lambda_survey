export default (theme) => ({
  root: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#4AA239',
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
  },
  typo_white:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  selectEmpty: {
    marginBottom: theme.spacing.unit * 5,
    width: "50%",
    maxWidth: "600px",
  },
  text_field: {
    width: "50%",
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});