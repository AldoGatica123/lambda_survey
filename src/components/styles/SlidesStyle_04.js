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
    display: "table",
  },
  row_container:{
    display: "table-row",
    textAlign: "left",
  },
  toggle_group:{
    width: "95%",
  },
  toggle_button: {
    backgroundColor: "white",
    width: "100%",
  },
  typo_white:{
    padding: theme.spacing.unit * 4,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 3,
    display: "table-cell",
    width: "35%",
    color: 'dimgray',
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});