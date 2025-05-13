import React,{useState} from 'react';
import { useContext } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignUp= () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const [userData, setUserData] = useState({});

    const { captain,setCaptainData } = React.useContext(CaptainDataContext);

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const captainData = {
        fullname:{
          firstname: firstName,
          lastname: lastName,
        },
        email:email,
        password:password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          type: vehicleType,
        },
      };
      console.log(captainData);

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

      if(response.status === 201){
        const data = response.data;
        setCaptainData(data.captain);
        localStorage.setItem('token', data.token);
        navigate("/captain-home");
      }

      
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");
    };
   
  return (
    <div className="p-7 bg-white h-screen w-screen text-black flex flex-col justify-between">
      <div>
        <img
          className=" w-22 -ml-1 -mt-3 mb-5 "
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
          <h3 className="mb-2 text-lg font-medium">Vehicle Information</h3>
          <div className=" flex gap-4 mb-6">
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-4"
            />
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate Number"
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-4"
            />
          </div>
          <div className=" flex gap-4 mb-6">
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(Number(e.target.value))}
              min="1"
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-4"
              placeholder="Enter vehicle capacity"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded text-base placeholder:text-sm w-full px-4 py-2 mb-4"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold rounded text-lg placeholder:text-base w-full px-4 py-2 mb-3">
            Create Captain account
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
