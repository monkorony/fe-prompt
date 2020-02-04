import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import SettingsIcon from "@material-ui/icons/Settings";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: "#fff !important",
    "& div": {
      color: "blue"
    },
    "$ MuiListItemIcon-root": {
      color: "blue"
    }
  }
}));

const navItems1 = [
  { name: "Calendar", active: false, more: false },
  { name: "Documentation", active: false, more: false },
  { name: "Dashboard", active: true, more: false }
];
const navItems2 = [
  { name: "Admin Plugins", active: false, more: true },
  { name: "Admin Forms", active: false, more: true },
  { name: "Admin Layouts", active: false, more: true }
];
const navItems3 = [
  { name: "Information Panels", active: false, more: true },
  { name: "ECommerce", active: false, more: true }
];
const navItems4 = [
  { name: "UI Elements", active: false, more: true },
  { name: "Form Elements", active: false, more: true },
  { name: "Plugins", active: false, more: true },
  { name: "Pages", active: false, more: true }
];
const navItems5 = [
  { name: "Executive Meeting", active: false, more: false },
  { name: "HelpDesk Redesign", active: false, more: false },
  { name: "Sony Board Meeting", active: false, more: false }
];
export default function MainListItems() {
  const classes = useStyles();
  return (
    <div className="listWrap">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {navItems1.map(item => (
          <ListItem
            button
            selected={item.active}
            className={item.active ? "active" : ""}
          >
            <ListItemIcon>
              {item.name === "Calendar" ? <CalendarTodayIcon /> : ""}
              {item.name === "Documentation" ? <InsertDriveFileIcon /> : ""}
              {item.name === "Dashboard" ? <HomeIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        <div style={{ height: 30 }}></div>
        {navItems2.map(item => (
          <ListItem button>
            <ListItemIcon>
              {item.name === "Admin Plugins" ? <WhatshotIcon /> : ""}
              {item.name === "Admin Forms" ? <CheckBoxIcon /> : ""}
              {item.name === "Admin Layouts" ? <PictureInPictureIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.more ? <NavigateNextIcon /> : ""}
          </ListItem>
        ))}
        <div style={{ height: 30 }}></div>
        {navItems3.map(item => (
          <ListItem button>
            <ListItemIcon>
              {item.name === "Information Panels" ? <AssessmentIcon /> : ""}
              {item.name === "ECommerce" ? <ShoppingBasketIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.more ? <NavigateNextIcon /> : ""}
          </ListItem>
        ))}
        <div style={{ height: 30 }}></div>
        {navItems4.map(item => (
          <ListItem button>
            <ListItemIcon>
              {item.name === "UI Elements" ? <ViewQuiltIcon /> : ""}
              {item.name === "Form Elements" ? <ViewColumnIcon /> : ""}
              {item.name === "Plugins" ? <SettingsIcon /> : ""}
              {item.name === "Pages" ? <FileCopyIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.more ? <NavigateNextIcon /> : ""}
          </ListItem>
        ))}
        <div style={{ height: 30 }}></div>
        {navItems5.map(item => (
          <ListItem button>
            <ListItemIcon>
              {item.name === "Executive Meeting" ? (
                <RadioButtonUncheckedIcon className="yelIcon" />
              ) : (
                ""
              )}
              {item.name === "HelpDesk Redesign" ? (
                <RadioButtonUncheckedIcon className="rdIcon" />
              ) : (
                ""
              )}
              {item.name === "Sony Board Meeting" ? (
                <RadioButtonUncheckedIcon className="prpIcon" />
              ) : (
                ""
              )}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.more ? <NavigateNextIcon /> : ""}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
