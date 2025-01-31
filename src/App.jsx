import { useContext, useEffect } from "react";
import "./App.css";
import LoginSignupCard from "./Components/Login/LoginSignupCard";
import Notification from "./Components/utils/Notification";
import { LoginCardContext } from "./Contexts/AuthContext";
import { notifContext } from "./Contexts/NotificationContext";
import { useNavigate } from "react-router-dom";
import TokenChecker from "./TokenChecker";

function App() {
  const navigate = useNavigate();
  const { message, Status } = useContext(notifContext);
  const { IsValidToken, setIsValidToken } = useContext(LoginCardContext); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsValidToken(Boolean(token));
  }, [setIsValidToken]);

  useEffect(() => {
    if (IsValidToken) {
      navigate("/dashboard");
    }
  }, [IsValidToken, navigate]);

  if (IsValidToken === null) {
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <p className="text-white text-xl">در حال بارگذاری...</p>
      </div>
    );
  }

  return (
    
    <div className="bg-black h-screen flex justify-center items-center absolute w-full z-10">
      <TokenChecker/>
      <Notification message={`${message}`} status={`${Status}`} />
      <div className="relative w-80 prespective h-96">
        <LoginSignupCard />
      </div>
    </div>
  );
}

export default App;
