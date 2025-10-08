import React from 'react';
import errorPageImg from '../../assets/OBJECTS.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-0 md:mt-16'>
           <img src={errorPageImg} alt="" />
           <h1 className='font-semibold text-[48px] mt-10'>Oops, page not found!</h1>
           <p className='font-normal text-[20px] text-[#627382] mt-2'>The page you are looking for is not available.</p>
           <button className='text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-3 px-8 rounded-lg mt-6 cursor-pointer'> <Link to="/">Go Back!</Link></button>
        </div>
    );
};

export default ErrorPage;