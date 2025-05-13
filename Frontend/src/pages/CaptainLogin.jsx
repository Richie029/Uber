import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import {CaptainDataContext} from '../context/CaptainContext';

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { captain,setCaptainData } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captain = { email, password };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain );
    
      if(response.status === 200){
        const data = response.data;
        setCaptainData(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
      setEmail("");
      setPassword("");
    }
  return (
    <div className="p-7 bg-white h-screen w-screen text-black flex flex-col justify-between">
      <div>
        <img
          className=" w-22 -ml-1 -mt-3 mb-5 "
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="mb-2 text-lg font-medium">What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded text-lg placeholder:text-base w-full px-4 py-2 mb-7"
          />
          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            className="bg-[#eeeeee] rounded text-lg placeholder:text-base w-full px-4 py-2 mb-7 "
          />
          <button className="bg-[#111] text-white font-semibold rounded text-lg placeholder:text-base w-full px-4 py-2 mb-3">
            Login
          </button>
        </form>
        <p className="text-center">
          Want to Drive?{" "}
          <Link to="/captain-signup" className="!text-blue-600">
            Register Now
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[black] w-full flex justify-center items-center !text-white !font-semibold rounded-md !text-lg placeholder:text-base w-full px-4 py-2"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}
export default CaptainLogin;
