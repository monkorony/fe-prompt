import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import styles from "../styles/Dashboard";
import Button from "@material-ui/core/Button";

import AreaFillChart from "./AreaFillChart";
import DotChart from "./DotChart";
import MenuDropDown from "./MenuDropDown";
import MainListItems from "./MainListItems";
import SelectDropDown from "./SelectDropDown";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Luxury Presence
      </Link>{" "}
      {"."}
    </Typography>
  );
}

export default function Dashboard() {
  const classes = styles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const dateDrop = "Date";
  return (
    <div className={classes.root}>
      <div className="gearSettings">
        <SettingsIcon />
      </div>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <form className={classes.searchForm} noValidate autoComplete="off">
            <TextField
              className={classes.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.searchIns}>
                    <IconButton>
                      <SearchIcon className={classes.searchIcon} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              placeholder="Search"
            />
          </form>

          <IconButton color="inherit" className={classes.avatar}>
            <Badge color="secondary">
              <Avatar>N</Avatar>
            </Badge>
          </IconButton>
          <MenuDropDown />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.containLogo}>
          <div className={classes.fakeLogo}>Logo</div>
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>
        <MainListItems />

        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="xl" className={classes.container}>
          <div className={classes.dashTitle}>
            <div>
              <h1>Dashboard</h1>
              <p>Dashboard and Statistics</p>
            </div>

            <SelectDropDown />
          </div>
          <Grid container spacing={0}>
            <Grid
              container
              item
              xs={12}
              spacing={0}
              className={classes.statMContain}
            >
              <Grid item xs={12}>
                <Paper square={true} className={(classes.paper, classes.new)}>
                  <div>
                    <p className={classes.statsT}>Totals</p>
                    <p className={classes.statsSm1}>Last Week</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper square={true} className={fixedHeightPaper}>
                  <div className={classes.statsContain}>
                    <p className={classes.statsLg}>597</p>
                    <p className={classes.statsSm}>New Feedbacks</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper square={true} className={fixedHeightPaper}>
                  <div className={classes.statsContain}>
                    <p className={classes.statsLg}>16.6M$</p>
                    <p className={classes.statsSm}>Total Profit</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper square={true} className={fixedHeightPaper}>
                  <div className={classes.statsContain}>
                    <p className={classes.statsLg}>7.5K</p>
                    <p className={classes.statsSm}>New Orders</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper square={true} className={fixedHeightPaper}>
                  <div className={classes.statsContain}>
                    <p className={classes.statsLg}>+48%</p>
                    <p className={classes.statsSm}>Brand Popularity</p>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6} lg={6}>
              <Paper square={true}>
                <AreaFillChart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper square={true}>
                <DotChart />
              </Paper>
            </Grid>
          </Grid>
          <Box component="div" m={1}>
            <div className={classes.dashTitle}>
              <p>{new Date().getFullYear()} by TemplateMonster</p>
            </div>
          </Box>
        </Container>
      </main>
    </div>
  );
}
