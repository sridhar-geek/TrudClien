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
      <Box
        sx={{
          color: "white",
          margin: "10px auto",
          maxWidth: "500px",
          minWidth: "100px",
        }}
      >
        <h1 style={{textAlign:'center', fontFamily:'Lato', fontSize:'4rem'}}>Shop the exciting videos</h1>
        <p color="#405060" style={{marginBottom:'40px',fontFamily:"Poppins", fontSize:'1.5rem', width:'660px'}}>
          {" "}
          At TruAD, you can! Purchase your favorite videos and they’re yours to
          keep. Watch them whenever you want, even offline.
        </p>
      </Box>
      <Trending />
      <Collections />
    </div>
  );
}

export default Home