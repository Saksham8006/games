import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import baseUrl from "../Config";


const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const responseData = await res.json();
        console.log('User Registered Successfully', responseData);

        // localStorage.setItem('token', responseData.token); // Store the token in localStorage

        navigate("/signin");

        // Perform any necessary actions after successful login
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (

    <div className="rounded-sm border min-h-screen  text-center border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">


        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign Up to RateMyInstitute
            </h2>

            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="mb-2.5 block text-start font-medium text-black dark:text-white">
                  Name
                </label>
                <div className="relative">
                  <input
                    value={name}
                    onChange={(i) => setName(i.target.value)}
                    type="name"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />


                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2.5 block text-start font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    value={email}
                    onChange={(i) => setEmail(i.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />


                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 text-start block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(i) => setPassword(i.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />

                </div>
              </div>


              <button
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              >Sign Up</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
