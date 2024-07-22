import React, { useState } from 'react';
import cowo from '/assets/Asset_cowo.svg';
import cewe from '/assets/Asset_cewe.svg';
import lanang from '/assets/lnang.png';
import wedok from '/assets/wdok.png';
import '../App.css';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <>
      <div className="bg-login h-screen flex items-center justify-center bg-no-repeat w-full bg-cover">
        <div className="relative lg:w-[700px] lg:h-[700px] w-[350px] h-[300px] rounded-2xl bg-transparent">
          <div className="absolute lg:block hidden w-[700px] h-[700px] -z-0 rounded-2xl bg-transparent">
            <img src={cewe} alt="svg ku" className=" hidden lg:block absolute bottom-0 -right-80 translate-x-11" />
            <img src={cowo} alt="svg ku" className=" hidden lg:block absolute bottom-0 -left-80 -translate-x-3" />
          </div>
          <div className="absolute lg:hidden block h-[500px] w-[340px] -z-0 rounded-2xl bg-transparent">
            <img src={wedok} alt="svg ku" className="absolute lg:hidden h-[180px] -top-[137px] -right-[30px] -translate-y-10 -rotate-3" />
            <img src={lanang} alt="svg ku" className="absolute lg:hidden h-44 -top-[70px] rotate-3 -left-4 -translate-y-24" />
          </div>
          <div className="relative form-wrapper lg:w-[700px] lg:h-[700px] w-[340px] h-[500px] flex flex-col justify-start items-center rounded-2xl bg-white">
            <h1 className="text-3xl lg:text-slate-700 lg:text-4xl font-semibold translate-x-5 lg:mt-24 mt-14">Selamat Datang!👋</h1>
            <p className="font-semibold text-slate-700 text-sm lg:text-base mt-3">Masuk dan mulai langkahmu.</p>
            <form action="" onSubmit={handleSubmit} className="lg:mt-24 mt-8 flex flex-col w-[80%]">
              <div className="input-box lg:mx-7">
                <p className="font-poppins font-medium text-slate-700 lg:text-[18px] text-[16px] mb-1">Email</p>
                <input className="bg-[#f6f6f6] border-lg border-[#efefef] outline-none rounded-lg px-5 lg:h-14 h-12 w-full" placeholder="Masukkan email anda" type="email" />
              </div>
              <div className="input-box lg:mx-7 lg:mt-9 mt-6 relative">
                <p className="font-poppins font-medium text-slate-700 lg:text-[18px] text-[16px] mb-1">Password</p>
                <input className="bg-[#f6f6f6] border-lg border-[#efefef] outline-none rounded-lg px-5 lg:h-14 h-12 w-full" placeholder="Masukkan password anda" type={showPassword ? 'text' : 'password'} />
                <button type="button" className="absolute lg:translate-y-[75%] translate-y-[60%] right-5" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="lg:text-xl text-lg text-[#5A6A85] " />
                </button>
              </div>
              <button className="bg-gradient-to-r from-[#B1C5FF] transition ease-in-out duration-200 hover:scale-110 to-[#2D8EFF] w-[90%] mx-auto lg:h-14 h-11 rounded-full mt-8">
                <h1 className="text-white text-base lg:text-lg">Masuk</h1>
              </button>
            </form>
            <div className="login-footer font-semibold mt-8 lg:mt-9">
              <p className="text-slate-700 text-sm lg:text-base">
                Developed by{' '}
                <span className="text-[#2D8EFF] ">
                  <a href="https://www.instagram.com/raphael.eskalaber/?utm_source=ig_web_button_share_sheet">Raphael</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
