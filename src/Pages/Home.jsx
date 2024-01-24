import { Box } from '@mui/material'

//Imports from anthor files
import Header from '../Components/Header'
import Trending from '../Components/Trending'
import Collections from '../Components/Collections'
const Home = () => {
  console.log('some thing is coming from Home page')
  return (
    <div>
      <Header />
      <Box sx={{color:'white', margin:'10px auto', maxWidth:'400px', minWidth:'100px', border:'2px solid white'}}>
        <h1>Shop the exciting videos</h1>
        <p>We bring you the exitig videos to use and showcase yourself</p>
      </Box>
      <Trending />
      <Collections />
    </div>
  )
}

export default Home