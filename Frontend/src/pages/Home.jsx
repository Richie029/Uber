import React from 'react';
import { Link } from 'react-router-dom';
import OnboardingImg from '../assets/onboard.jpg';

const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between'>
      <div
        className="bg-cover bg-center w-full h-full pt-3 bg-rose-300 flex flex-col justify-between"
        style={{ backgroundImage: `url(${OnboardingImg})` }}
      >
        <img className=" w-30 ml-2" src="./public/logo.png" alt="" />
      </div>
      <div>
        <div className="bg-white text-black px-5 py-3">
          <h2 className="text-2xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center bg-black text-white w-full py-4 rounded-md mt-6 text-lg mb-1"
            style={{ color: "white", backgroundColor: "black" }}
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
