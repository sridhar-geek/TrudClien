import { Button, Box, styled } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
/**Import functions form other files */
import { app } from "./firebase";
import Loader from "../Loader";

//styled components
const GoogleButton = styled(Button)`
  display: flex;
  color: #131313;
  background-color: #6f6b6b;
  width: 100%;
  margin: 2px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  &:hover {
    background-color: #c9c5c4;
  }
`;

const SocialLogin = () => {

    let loading = false;
    const navigate = useNavigate()
  // login function
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      // storing user data in a object
      const formData = {
        name: result.user.displayName,
        email: result.user.email,
      };
      loading = true;
      // sending user information server , it will either create user or assign access_token to user
      const res = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/auth/socialLogin`,
        formData
      );
        loading = false
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
        loading = false
      toast.error(err.response?.data?.msg);
    }
  };

  return (
    <Box>
      <GoogleButton onClick={handleLogin}>
        <GoogleIcon /> 
        {loading ? (<Loader open={loading}/>):('Continue with Google')}
      </GoogleButton>
    </Box>
  );
};

export default SocialLogin;
