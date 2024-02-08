import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-[65vw] h-screen bg-whitesmoke-200 shadow-lg">
      </div>

      <div className="absolute top-0 right-0 w-[35vw] h-screen bg-white">
        <div className="top-[20px]">
          <div className="text-base font-poppins flex justify-center items-center mb-4 mt-52">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col items-start">
                <label htmlFor="input1" className="text-gray-800 pb-1 text-sm">Email ID</label>
                <input type="text" placeholder="Enter your email" className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-[429.1px] h-[30px] pt-3" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="input2" className="text-gray-800 pb-1 text-sm">Password</label>
                <input type="text" placeholder="Enter your password" className="border-none outline-none rounded-md p-2 mb-2 bg-whitesmoke-200 w-[429.1px] h-[30px] pt-3" />
              </div>
              <div className="items-end">
                <a href="#" className="absolute top-[405px] left-[365px] text-mini-1 [text-decoration:underline] text-midnightblue">
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="button"
                  className="absolute top-[470px] left-[45px] items-start font-semibold text-white text-center inline-block w-[445px] h-11 bg-blue-500 cursor-pointer rounded-[8.08px] shadow-2xl"
                >
                  Login now
                </button>
              </div>
              <div className="absolute top-[535px] left-[50px] w-[432px] h-[21px] text-mini-1 text-silver">
                <div className="absolute top-[11.1px] left-[-4px] box-border w-[200px] h-px border-t-[1px] border-solid border-silver" />
                <div className="absolute top-[11.1px] left-[244.4px] box-border w-[195px] h-px border-t-[1px] border-solid border-silver" />
                <div className="absolute top-[0px] left-[210px]">OR</div>
              </div>
              <div>
                <Link to="/signup">
                <button
                  type="button"
                  className="absolute top-[612px] left-[45px] items-start font-semibold bg-white text-midnightblue border-midnightblue box-border border-[1px] border-solid text-center inline-block w-[445px] h-11 cursor-pointer rounded-[8.08px]"
                >
                  Signup now
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
