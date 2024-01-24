import { useState } from "react";
import {
  Box,
  styled,
  Typography,
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from '@mui/icons-material/LockOpen';
// imports from another files
import Header from "../Components/Header";
import SocialLogin from '../Components/Google Login/SocialLogin'
import Loader from "../Components/Loader";

//component styles
const FlexBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const LoginBtn = styled(Button)`
  background-color: grey;
  color: white;
  &:hover{
    background-color: #878282;
  }
`
const Text = styled(TextField)`
  color: white;
  /* background-color: white; */
`
const Login = () => {
  // display data in input feild
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this is for hide and unhide password feild
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let loading = false;
  const Navigate = useNavigate()
  // data which is send to server
  const formData = {
    email,
    password,
  };
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      loading = true
      await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/auth/login`,
        formData
      );
      toast.success("Login successful");
      Navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.msg);
    }
  };
  return (
    <>
      <Header />
      <Typography color="white" margin="0 auto" width="90wh">Join TruAD company now</Typography>
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          border: "1px solid grey",
          borderRadius: "10px",
          height:'70vh'
        }}
      >
        <Box
          border="2px solid white"
          width="500px"
          height='60vh'
          margin='0 auto'
          sx={{ backgroundColor: "white" }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "20px", textAlign: "center" }}
          >
            Login
          </Typography>
          <form onSubmit={sumbitHandler}>
            <FlexBox>
              <MailOutlineIcon sx={{ padding: "0 10px" }} fontSize="large" />
              <Text
                variant="outlined"
                placeholder="Enter your Email"
                fullWidth
                required
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ padding: "10px", margin: "10px auto" }}
              />
            </FlexBox>
            <FlexBox>
              <LockOpenIcon sx={{ padding: "0 10px" }} fontSize="large" />
              <OutlinedInput
                placeholder="Password"
                fullWidth
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                sx={{ margin: "10px auto" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FlexBox>
            <LoginBtn
            type="submit"
              fullWidth
              sx={{ backgroundColor: "grey", color: "white" }}
            >
              {loading? (<Loader open={loading} />): ('Login')}
            </LoginBtn>
            <Divider sx={{ margin: 3, bgcolor: "white" }} />
          </form>
          <SocialLogin />
        </Box>
      </div>
    </>
  );
};

export default Login;
