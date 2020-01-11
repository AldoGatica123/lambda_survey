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
    marginTop: theme.spacing.unit * 6,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 8,
  },
  title:{
    padding: theme.spacing.unit * 6,
    paddingBottom:  theme.spacing.unit * 3,
    color: 'white',
  },
  typo:{
    padding: theme.spacing.unit * 4,
    color: 'black',
  },
  button:{
    margin: theme.spacing.unit * 3,
    color: 'black',
  }
});