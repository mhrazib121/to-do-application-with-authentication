import { useEffect } from "react";
import useAuth from "./useAuth";

const useProfile = () => {
  const token = localStorage.getItem("accessToken");
  const { getProfile, profile } = useAuth();

  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, [token]);
  return { profile };
};

export default useProfile;
