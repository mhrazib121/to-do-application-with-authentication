"use client";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useProfile = () => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  const { getProfile, profile } = useAuth();

  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, [token]);
  return { profile };
};

export default useProfile;
