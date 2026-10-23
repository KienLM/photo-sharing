import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserList() {
  const users = models.userListModel();
  const { pathname } = useLocation();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Users
      </Typography>
      <List component="nav" aria-label="User list">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItemButton
              component={Link}
              to={`/users/${user._id}`}
              selected={pathname.endsWith(`/${user._id}`)}
            >
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItemButton>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
