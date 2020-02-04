import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    "& button": {
      color: "#fff"
    },
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#4bb5e0",
    boxShadow: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    borderRight: 0,
    backgroundColor: "#2a333e",
    color: "#fff",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 180,
    justifyContent: "center",
    boxShadow: "none"
  },
  fixChart: {
    height: 400,
    justifyContent: "center",
    boxShadow: "none"
  },
  searchInput: {
    borderBottom: 0,
    "& div:before": {
      content: "none"
    },
    "& div:after": {
      content: "none"
    },
    "& input": {
      color: "#fff"
    },
    width: "100%"
  },
  searchIcon: {
    color: "#fff"
  },
  searchForm: {
    width: "100%"
  },

  containLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#44a6d3"
  },
  fakeLogo: {
    background: "#ccc",
    minWidth: "150px",
    alignItems: "center",
    padding: "10px 0"
  },
  avatar: {
    padding: "0"
  },
  dashTitle: {
    textAlign: "left",
    marginBottom: 25,
    color: "#adadad",

    "& h1": {
      marginBottom: 0,
      fontWeight: 400
    },
    "& p": {
      margin: 0,
      fontWeight: 200
    },
    "@media (min-width: 960px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  },
  statsContain: {
    "& p": {
      margin: 0
    }
  },
  statsLg: {
    fontSize: "3rem",
    lineHeight: "3rem"
  },
  statsSm: {
    color: "#adadad"
  },
  new: {
    boxShadow: "none",
    textAlign: "left",
    paddingBottom: 0,
    paddingLeft: 30,
    paddingTop: 30,
    "& div": {
      display: "flex",
      alignItems: "flex-end"
    },
    "& p ": {}
  },
  statsT: {
    fontSize: "1.8rem",
    fontWeight: 400,
    margin: 0
  },
  statsSm1: {
    color: "#adadad",
    margin: 0,
    lineHeight: "2rem",
    marginLeft: 20
  },
  statMContain: {
    borderBottom: "1px solid #f2f2f2"
  }
}));

export default useStyles;
