import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const { pathname } = useLocation();
  const userId = pathname.split("/")[2];
  const user = models.userModel(userId);

  let pageTitle = "Users";
  if (user) {
    const fullName = `${user.first_name} ${user.last_name}`;
    pageTitle = pathname.startsWith("/photos/")
      ? `Photos of ${fullName}`
      : fullName;
  } else if (userId) {
    pageTitle = "User not found";
  }

  return (
    <AppBar position="fixed" className="topbar-appBar">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6">Lê Mạnh Kiên</Typography>
        <Typography variant="subtitle1" className="topbar-title">
          {pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
