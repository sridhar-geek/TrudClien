import {Box, Button, styled} from '@mui/material'
import {useLocation} from 'react-router-dom'
//styled Components
const Container = styled(Box)`
  color: white;
  margin: 20px 30px;
  display: flex;
  justify-content: space-between;
`
const Header = () => {
  const location = useLocation()
  return (
    <Container>
      <Box >TruAD</Box>
      {location.pathname === '/login' ? (<Button>Back to Home</Button> ): (
      <Button variant='outlined' sx={{color:'white'}}>Login</Button> )}
    </Container>
  )
}

export default Header