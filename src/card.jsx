import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";

export function ImgMediaCard({ video, hasbutton }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="image"
        height={140}
        image={video.previewImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {video.genre}
        </Typography>
        {!hasbutton ? (
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        ) : null}
      </CardContent>
    </Card>
  );
}
