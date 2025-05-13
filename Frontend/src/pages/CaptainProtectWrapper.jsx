import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useState } from "react";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain , setCaptainData } = useContext(CaptainDataContext);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response)=>{
        if(response.status === 200){
          const data = response.data;
          setCaptainData(data.captain);
          setIsLoading(false);
        }
      }).catch((error)=>{
          console.error("Error fetching captain data:", error);
          localStorage.removeItem("token");
          navigate("/captain-login");
        
      });
  }, [token]);

  

  if(isLoading){
    return(
        <div>Loading...</div>
    );
}
  

  return <>{children}</>;
};

export default CaptainProtectWrapper;
