import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Dashboard = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,flag').then((res) => setCountry(res.data)).catch((err) => console.log(err))
    }, []);
  return (
    <div className='w-full h-full bg-color-2 text-color-1 p-4 flex-custom-1 my-auto'>
        <div className='max-w-[1230px] h-auto w-full flex flex-col justify-center items-center p-4 mx-auto'>
            <div className='w-full h-full flex p-4 my-8 mx-auto flex-wrap flex-row justify-center items-start'>
                {country && country?.map((item,i) => {
                    return (
                        <div className='wrapper country-card p-3 flex w-[250px] min-h-[180px] flex-col justify-start items-start rounded-lg shadow-xl mr-[20px] mt-[20px] border' key={i}>
                            <div className='img-wrapper p-1 w-full h-[100px] border border-blue-200'>
                                <img src={item.flag} className='w-full h-full object-cover' alt={item.name}></img>
                            </div>
                            <div className='details-wrapper flex flex-col justify-start items-start p-1'>
                                <div className='text-base text-black font-semibold mb-2 whitespace-normal break-words'>Country  : {item.name}</div>
                                <div className='text-base text-black font-semibold'>Region&nbsp;&nbsp;: {item.region}</div>
                            </div>
                        </div>
                    )
                })} 
            </div>

        </div>
    </div>
  )
}

export default Dashboard