import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import { useState } from "react";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, setUser } = React.useContext(UserDataContext);
  const [isLoading, setIsLoading] =useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data.user);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching User's data:", error);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
