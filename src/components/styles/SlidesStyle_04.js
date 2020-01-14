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
    display: "table",
  },
  row_container:{
    display: "table-row",
    textAlign: "left",
  },
  checkbox_container:{
    width: "35%",
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    display: "table-cell",
  },
  toggle_group:{
    width: "100%",
    display: "block",
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