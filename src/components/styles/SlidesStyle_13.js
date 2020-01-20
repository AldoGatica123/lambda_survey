export default (theme) => ({
  root: {
    width: "100%",
    height: "94.5vh",
    backgroundColor: '#2700a5',
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
    marginBottom: theme.spacing.unit * 4,
  },
  container:{
    height: "100vh",
    width: "100%",
  },
  title:{
    padding: theme.spacing.unit * 6,
    color: 'gray',
  },
  typo_black:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  typo_gray:{
    paddingTop: theme.spacing.unit * 3,
    color: 'gray',
  },
  text_field: {
    width: "80%",
    marginBottom: theme.spacing.unit * 2,
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  },

});