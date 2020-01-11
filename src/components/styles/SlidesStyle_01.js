export default (theme) => ({
  base: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  background: {
    minHeight: "100%",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundColor: 'teal',
  },
  paper: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  container:{
    height: "100vh",
    width: "100%",
  },
  title:{
    padding: theme.spacing.unit * 6,
    paddingBottom:  theme.spacing.unit * 3,
    color: 'white',
  },
  typo:{
    padding: theme.spacing.unit * 6,
    color: 'black',
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});