import {Box, Button, Divider, Typography, styled} from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//component styles
const Container = styled(Box)`
color: white;
margin-bottom: 20px;
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
`;
const SocialLinks = styled(Button)`
   color: white;
   &:hover{
  color: grey;
  transform: scale(1.5);
    }
`;
const Footer = () => {
  return (
    <>
      <Divider sx={{margin:3, bgcolor:'white'}} />
      <Container>
        <div>Logo</div>
        <Box>
          <h4>Learn More</h4>
          <Typography>About Us</Typography>
          <Typography>About Us</Typography>
        </Box>
        <Box>
          <h4>Contack Us</h4>
          <SocialLinks>
            <FacebookIcon />
          </SocialLinks>
          <SocialLinks>
            <TwitterIcon />
          </SocialLinks>
          <SocialLinks>
            <InstagramIcon />
          </SocialLinks>
          <SocialLinks>
            <LinkedInIcon />
          </SocialLinks>
        </Box>
      </Container>
    </>
  );
}

export default Footer