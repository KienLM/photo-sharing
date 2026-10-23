import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>User not found.</Typography>;
  }

  return (
    <div className="user-detail">
      <Typography variant="h5" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>
      <Divider className="user-detail-divider" />
      <Typography paragraph>
        <strong>Location:</strong> {user.location}
      </Typography>
      <Typography paragraph>
        <strong>Occupation:</strong> {user.occupation}
      </Typography>
      <Typography paragraph>
        <strong>Description:</strong> {user.description}
      </Typography>
      <Button variant="contained" component={Link} to={`/photos/${user._id}`}>
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;
