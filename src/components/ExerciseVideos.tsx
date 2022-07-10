import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "../constants/colors";

const ExerciseVideos = ({ exerciseVideos, name }: any) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px" mb="30px">
      <Typography variant="h3" mb="33px" textTransform="capitalize">
        Watch <span style={{ color: COLORS.LIGHT_RED }}> {name} </span> exercise
        videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0px" },
        }}
      >
        {exerciseVideos?.slice(0, 2).map((item: any, index: any) => {
          let thumbnailsIndex = 0;
          let maxNumberOfTitleCharacters = 30;

          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[thumbnailsIndex].url} alt={item.video.title} />
              <Typography variant="h5" color={COLORS.BLACK}>
                {" "}
                {item.video.title.length > maxNumberOfTitleCharacters ? item.video.title.substring(0, maxNumberOfTitleCharacters) + '...' : item.video.title}{" "}
              </Typography>
              <Typography variant="h6" color={COLORS.BLACK}>
                {" "}
                {item.video.channelName}{" "}
              </Typography>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
