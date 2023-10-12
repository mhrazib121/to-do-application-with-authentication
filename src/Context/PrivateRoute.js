"use client";

import { useEffect } from "react";
import useProfile from "../Hooks/useProfile";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { profile } = useProfile();

  useEffect(() => {
    if (!profile?.email) {
      router.push("/login");
    }
  }, [router, profile?.email]);

  return children;
};

export default PrivateRoute;
