import React, {useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ajvResolver } from '@hookform/resolvers/ajv';
import { AiOutlineGoogle } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';
import { women } from '../../constants';
const schema = {
    type: 'object',
    properties: {
      useremail: {
        type: 'string',
        minLength: 1,
        errorMessage: { minLength: 'Email is required' },
      },
      password: {
        type: 'string',
        minLength: 8,
        errorMessage: { minLength: 'Password field is required' },
      },
    },
    required: ['useremail', 'password'],
    additionalProperties: false,
  };
const Signin = () => {
    let navigate = useNavigate(); 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: ajvResolver(schema),
    });
    const [signinData, setSigninData] = useState({
        useremail: '',
        password: '',
        rememberme: true
    });
    const [err, setErr] = useState(false);
    const onSubmit = (data) => {
        setErr(false);
        if (signinData.useremail === "test@gmail.com" && signinData.password === "Testtask@09"){
            navigate('/dashboard', {replace: true})
        } else {
            setErr(true);
            console.log("Useremail or Password not match")
        }
        
    }
  return (
    <div className='w-full xl:h-screen sm:h-full bg-color-2 text-color-1 p-4 flex justify-center items-center my-auto'>
        <div className='max-w-[1230px] h-full w-full flex justify-center items-center flex-row space-x-1 p-4'>
            <div className='lg:w-[40%] sm:w-[100%] md:w-[60%] h-full bg-[transparent] flex lg:justify-center sm:justify-start items-start lg:p-6 sm:p-1 flex-col space-y-6'>
                <div className='tittle-wrapper font-semibold text-[32px] spacing-1 leading-[26px] text-black'>Signin</div>
                <div className='description font-medium text-[20px] spacing-1 leading-[19px] text-black'>New User?</div>
                <div className='input-wrapper flex flex-col justify-start items-start lg:w-[70%] w-full'>
                    <input {...register('useremail')} type="email" className='w-full p-2 border border-black font-semibold text-base text-black bg-[transparent] focus:outline-none focus:border-black' placeholder='Username or email' value={signinData.useremail} onChange={(e) => {setSigninData({...signinData, useremail: e.target.value})}}></input>
                    {errors.useremail && <span className='text-sm text-red-600 font-normal text-left'>{errors.useremail.message}</span>}
                    <input {...register('password')} type="password" className='mt-8 w-full p-2 border border-black font-semibold text-base text-black bg-[transparent] focus:outline-none focus:border-black' placeholder='Password' value={signinData.password} onChange={(e) => {setSigninData({...signinData, password: e.target.value})}}></input>
                    {errors.password && <span className='text-sm text-red-600 font-normal text-left'>{errors.password.message}</span>}
                    <div className='checkbox-wrapper mt-6 flex flex-row justify-start items-center space-x-2'>
                        <input type="checkbox" className='w-4 h-4 bg-black text-black' checked={signinData.rememberme} onChange={(e)=> {setSigninData({...signinData, rememberme: !signinData.rememberme})}}></input>
                        <div className='text text-black font-medium text-base'>Keep me Signed in</div>
                    </div>
                    <button type='button' className='w-full px-6 py-3 mt-6 mb-0 dark:font-semibold text-center text-white bg-gray-700 uppercase align-middle border-0 cursor-pointer  text-base hover:scale-x-[1.03] hover:scale-y-[1.03] hover:-translate-y-1 duration-300 transition ease-in-out delay-150' onClick={handleSubmit(onSubmit)}>Sign in</button>
                    {err && <div className='err text-red-500 text-base font-medium'>UserName or Password is not match<br/>Username:test@gmail.com<br />Password:Testtask@09</div>}
                    <div className='sso-wrapper w-full mt-8 flex flex-col justify-start items-center'>
                        <div className='wrapper flex flex-row justify-center items-center space-x-3 w-full'>
                            <div className='dividerline w-[37%] h-[1px] bg-black'></div>
                            <div className='text text-black font-medium text-base whitespace-nowrap'>Sign in</div>
                            <div className='dividerline w-[37%] h-[1px] bg-black'></div>
                        </div>
                        <div className='icon-wrapper mt-6 flex flex-row justify-center items-center space-x-8 w-full'>
                            <div className='icons w-10 h-10 rounded-full border border-black p-1'>
                                <AiOutlineGoogle className="w-full h-full"></AiOutlineGoogle>
                            </div>
                            <div className='icons w-10 h-10 rounded-full border border-black p-2'>
                                <ImFacebook className="w-full h-full"></ImFacebook>
                            </div>
                            <div className='icons w-10 h-10 rounded-full border border-black p-2'>
                                <FaLinkedinIn className="w-full h-full"></FaLinkedinIn>
                            </div>
                            <div className='icons w-10 h-10 rounded-full border border-black p-1'>
                                <RiTwitterFill className="w-full h-full"></RiTwitterFill>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden w-1/2 h-auto lg:flex justify-end items-end ml-auto'>
                <div className='img-wrapper w-1/2 h-auto flex justify-center item-center ml-auto'>
                    <img src={women} className="w-full h-full" alt="womenimage"></img>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Signin