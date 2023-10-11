import { useState } from "react";
import { BASE_URL } from "../Constants/common";

const useLoginAndSignUp = () => {
  const [accessToken, setAccessToken] = useState();
  const [signUpData, setSignUpData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [profile, setProfile] = useState();

  const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.data) {
      setAccessToken(result.data.accessToken);
      console.log(accessToken);
    } else {
      setErrorMessage(result.message);
      console.log("object");
    }
  };

  const signUpUser = async (email, password, { firstName, lastName }) => {
    const response = await fetch(`${BASE_URL}/users/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password, name: { firstName, lastName } }),
    });
    const result = await response.json();
    if (result?.data?.email) {
      setSignUpData(result);
    } else {
      setErrorMessage("User did not created");
    }
  };

  const getProfile = async (token) => {
    const response = await fetch(`${BASE_URL}/users/get-profile`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const result = await response.json();
    // console.log(result);
    if (result.data) {
      setProfile(result.data);
    }
  };

  return {
    accessToken,
    errorMessage,
    loginUser,
    signUpUser,
    signUpData,
    getProfile,
    profile,
  };
};

export default useLoginAndSignUp;
