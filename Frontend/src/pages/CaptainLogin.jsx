import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const[captainData, setCaptainData] = useState({});
  
    const submitHandler = (e)=>{
      e.preventDefault();
      const captain = { email, password };
      setCaptainData(captain);
      setEmail("");
      setPassword("");
    }
  return (
    <div className="p-7 bg-white h-screen w-screen text-black flex flex-col justify-between">
      <div>
        <img
          className=" w-30 -ml-5 -mt-5 mb-10 "
          src="./public/logo.png"
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
