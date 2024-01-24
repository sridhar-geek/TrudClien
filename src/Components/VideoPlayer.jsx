import { Button, Box, Typography, styled } from "@mui/material";
//Imports from another files
import ApiData from "../assets/ApiData.json";

// component styles
const Text = styled(Typography)``;
const Details = styled(Typography)``;
const VideoPlayer = ({ id }) => {
  const data = ApiData.results.find((item) => item.id === id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        width: "100%",
      }}
    >
      <Box>
        <img
          width="200px"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <Button>Buy Now</Button>
      </Box>
      <Box>
        <Text>Video Name: </Text> <Details>{data.original_title} </Details>
        <Text>Published on: </Text> <Details>{data.release_date} </Details>
        <Text>Copies Sold: </Text> <Details>{data.vote_count} </Details>
      </Box>
    </div>
  );
};

export default VideoPlayer;
