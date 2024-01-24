import {Route, Routes} from 'react-router-dom'
//Imports from another files
import {Home, Footer, Login, Profile} from './Pages'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <ToastContainer />
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/login" element={ <Login />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
