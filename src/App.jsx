import axios from "axios";
import React from "react";

function App() {

  const handleLogin = async() => {
    try {
      const res = await axios.get(
        `https://stagingsourcebae.shethink.in/api/developer/individual-developers/loginWithGoogle`,
      );

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <button onClick={handleLogin}>
          login with google
        </button>
    </>
  )
}

export default App
