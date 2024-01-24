import {Box, Button, styled,Typography} from '@mui/material'
import {useLocation, useNavigate} from 'react-router-dom'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//styled Components
const Container = styled(Box)`
  color: white;
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
`
const Text = styled(Typography)`
  font-size: 2rem;
  cursor: pointer;

`
const Btn = styled(Button)`
  color: white;
text-transform: capitalize;
border-radius: 10px;
`
const Header = () => {
  const Navigate = useNavigate()
  const location = useLocation()
  return (
    <Container>
      <Box>
        <Text variant="h4" >
          TruAD
        </Text>
      </Box>
      {location.pathname === "/login" ? (
        <Btn variant="outlined" onClick={() => Navigate("/")}>
          <ChevronLeftIcon fontSize="small" /> Back
        </Btn>
      ) : (
        <Button variant="outlined" sx={{ color: "white" }}>
          Login
        </Button>
      )}
    </Container>
  );
}

export default Header