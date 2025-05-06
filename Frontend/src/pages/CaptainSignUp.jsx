import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const CaptainSignUp= () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const [userData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      const user = {
        fullname:{
          firstname: firstName,
          lastname: lastName,
        },
        email:email,
        password:password 
      };
      setUserData(user);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    };
   
  return (
    <div className="p-7 bg-white h-screen w-screen text-black flex flex-col justify-between">
      <div>
        <img
          className=" w-30 -ml-5 -mt-5 mb-10 "
          src="./public/logo.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="mb-2 text-lg font-medium">What's your Name</h3>
          <div className="flex gap-2 mb-6">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-1/2 px-4 py-2"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-1/2 px-4 py-2"
            />
          </div>
          <h3 className="mb-2 text-lg font-medium">What's your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-6"
          />
          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-6 "
          />
          <button className="bg-[#111] text-white font-semibold rounded text-lg placeholder:text-base w-full px-4 py-2 mb-3">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="!text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-zinc-400">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
}
export default CaptainSignUp;
