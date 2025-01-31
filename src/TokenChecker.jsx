import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Usercontext } from "./Contexts/Userinfo";

const SECRET = 'idjad87327hdhal7732niof28h';

const TokenChecker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUsername, setname } = useContext(Usercontext)

  async function verifyJWT(token, secret) {
    const [headerBase64, payloadBase64, signature] = token.split(".");
    const dataToVerify = `${headerBase64}.${payloadBase64}`;

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(dataToVerify)
    );

    const expectedSignature = btoa(
      String.fromCharCode(...new Uint8Array(signatureBuffer))
    )
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

    if (expectedSignature !== signature) {
      throw new Error("Invalid token");
    }

    // تبدیل Base64 به بایت‌ها و سپس به متن UTF-8 (حل مشکل `atob`)
    const decodeBase64 = (base64) => {
      const binaryString = atob(base64.replace(/-/g, "+").replace(/_/g, "/"));
      const bytes = new Uint8Array([...binaryString].map((char) => char.charCodeAt(0)));
      return new TextDecoder().decode(bytes);
    };

    return JSON.parse(decodeBase64(payloadBase64));
  }


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/")
      return;
    }

    const checkToken = async () => {
      try {
        const payload = await verifyJWT(token, SECRET);
        setUsername(payload.username)
        setname(payload.name)

        if (payload.exp && payload.exp < Date.now() / 1000) {
          navigate("/");
          throw new Error("Token expired");
        }

        if (location.pathname === "/") {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    checkToken();
  }, [location.pathname, navigate]);

  return null;
};

export default TokenChecker;