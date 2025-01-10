import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { useState, useEffect } from "react";
export function Videocard({ carddata }) {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="pics"
          height={140}
          image={carddata.previewImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carddata.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {carddata.genre}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
