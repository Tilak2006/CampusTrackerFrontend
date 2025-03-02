import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("User Info:", decoded);
    onSuccess(decoded);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Google Login Failed")}
    />
  );
};

export default GoogleAuth;
