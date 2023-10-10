import { useState } from "react";
import { BASE_URL } from "../Constants/common";

const useLoginAndSignUp = () => {
  const [accessToken, setAccessToken] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // if (!response.ok) {
    //   throw new Error("Login failed");
    // }

    const result = await response.json();
    if (result.data) {
      setAccessToken(result.data);
    } else {
      setErrorMessage(result.message);
      console.log("object");
    }
  };

  return {
    accessToken,
    errorMessage,
    loginUser,
  };
};

export default useLoginAndSignUp;
