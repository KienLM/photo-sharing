import React from "react";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function formatDate(dateTime) {
  const safeDate = dateTime.replace(" ", "T").replace(/T(\d):/, "T0$1:");
  return new Date(safeDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function UserPhotos() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);

  if (!user) {
    return <Typography>User not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>
      {photos.length === 0 && <Typography>This user has no photos.</Typography>}

      {photos.map((photo) => (
        <Card key={photo._id} className="user-photo-card" variant="outlined">
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt={`Photo by ${user.first_name} ${user.last_name}`}
            className="user-photo-image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Uploaded: {formatDate(photo.date_time)}
            </Typography>
            <Divider className="user-photo-divider" />
            <Typography variant="subtitle1" gutterBottom>
              Comments
            </Typography>

            {(!photo.comments || photo.comments.length === 0) && (
              <Typography variant="body2" color="text.secondary">
                No comments yet.
              </Typography>
            )}

            {(photo.comments || []).map((comment) => (
              <div className="user-photo-comment" key={comment._id}>
                <Typography variant="body2">
                  <Link to={`/users/${comment.user._id}`}>
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>
                  {" · "}{formatDate(comment.date_time)}
                </Typography>
                <Typography variant="body1">{comment.comment}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
