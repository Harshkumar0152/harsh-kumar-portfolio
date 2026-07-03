import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1>Harsh Kumar Portfolio</h1>

      <button
        onClick={handleLogin}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}