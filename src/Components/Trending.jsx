import { Box, Dialog, Typography, styled } from "@mui/material"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useRef } from "react";
//Imports from anothor files
import BannerImage from '../assets/batman.jpg'
import ApiData from '../assets/ApiData.json'
import VideoPlayer from '../Components/VideoPlayer'

const responsive = {
  SuperLargeDesktop: {
    breakpoint: { max: 1500, min: 1400 },
    items: 6,
  },
  LargeDesktop: {
    breakpoint: { max: 1250, min: 1000 }, //1150
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1000, min: 750 }, //900
    items: 4,
  },
  tablet: {
    breakpoint: { max: 750, min: 500 }, //700
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 250 }, //450
    items: 2,
  },
  sxMobile:{
    breakpoint: {max:250, min:0},
    items: 1,
  }
};

//component Images
const Main = styled(Box)`
background-position: center;
background-size: cover;
  height: 50vh;
width: 90%;
margin: 0 auto;
`;
const Image = styled('img')`
height: 250px;
width: 200px;
cursor: pointer;
padding:0 10px;
border-radius: 10%;
&:hover{
    transform: scale(1.2);
    transition: 0.8s;
}
`

const Trending = () => {
  const [open, setOpen] = useState(false)
  const [videoId, setVideoId] = useState(0)
  const idref = useRef(0)

  const handleDialog = (id)=> {
setVideoId(id)
    setOpen((prevState)=> !prevState)
  }
  const handleClose = ()=> {
    setOpen(false)
  }
  return (
    <>
      <Main sx={{ backgroundImage: `url(${BannerImage})` }}>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="h4" color="white" margin="20px">
            Today Trending
          </Typography>
        </Box>
      </Main>
      <Box sx={{ backgroundColor: "black", width: "90%", margin: "10px auto" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          keyBoardControl={true}
          focusOnSelect={true}
          transitionDuration={400}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {ApiData.results.map((data) => (
            <Image
              key={data.id}
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="Hotel"
              onClick={() => handleDialog(data.id)}
            />
          ))}
        </Carousel>
        <Dialog
          open={open}
          fullWidth={true}
          // maxWidth={"md"}
          onClose={handleClose}
        >
          <VideoPlayer id={videoId} />
        </Dialog>
      </Box>
    </>
  );
}

export default Trending