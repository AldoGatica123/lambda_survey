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
    marginTop: "auto",
    display: "table",
  },
  space: {
    height: "10%",
  },
  innerPaper: {
    width: "105%",
    marginLeft: theme.spacing.unit * -3,
    marginBottom: theme.spacing.unit * 4,
  },
  title:{
    padding: theme.spacing.unit * 6,
    color: 'gray',
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
    marginBottom: theme.spacing.unit * 5,
    color: 'white',
  },
  typo_black:{
    padding: theme.spacing.unit * 3,
    display: "table-cell",
    width: "35%",
    color: 'dimgray',
  },
  text_field: {
    width: "35%",
    margin: theme.spacing.unit * 2,
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});