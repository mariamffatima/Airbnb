import { Inter } from 'next/font/google'
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import {FiGlobe} from 'react-icons/fi';
import {BsList} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa';
import React, { useState } from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

function MyInput() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className=' flex flex-row cursor-text '>
        <input type='text'
          value={inputValue}
          onChange={handleInputChange}
          className='input-box pl-5 pr-1 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          placeholder='Start your search'/>
      <p className=' flex justify-between h-8 w-8 bg-red-400 rounded-full p-2 mr-2'>
        <FaSearch className='cursor-pointer text-white' />
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <body>
      <title>airbnb</title> 

        <header className=' top-0 bottom-0 z-50 grid grid-cols-3 bg-shadow-none px-5 bg-white p-5 md:px-10'>

        <div className='shadow-none top-0 z-50 grid-cols-3 bg-white  pr-5 pl-0'>
          <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <div className=' origin-top-left'>
        <Image src="/airbnb.jpg" alt="My Image" width={128} height={145} />
        </div>
        </div>
        </div>

        <div className=' md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-lg duration-300 mr-15'>
          <MyInput />
        </div>
        
        <div className='flex items-center space-x-3 justify-end text-gray-600'>
          <div className='hover:bg-gray-100 flex flex-row rounded-full p-3'>
            <p className='hidden md:inline cursor-text'>Become a host</p>
            </div>

            <div className='hover:bg-gray-100  p-3 rounded-full'>
              
              <FiGlobe className='text-lg flex items-center cursor-pointer h-6 fill-none mr-3' />
            </div>
            <div className='flex items-center text-lg mr-3 space-x-3 border-2 p-3 rounded-full hover:shadow-lg duration-300'>
              <BsList className='cursor-auto h-6 fill-current'/>
                <FaUserCircle className='h-6 cursor-auto fill-current'/>
              </div>
            </div>
      </header>

      <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
        <span className='overflow-hidden bg-none opacity-1 border-0 m-0 p-0 inset-0'>
        <Image src="/home.jpg" alt="My Image" width={1800} height={50} />
        </span>
        <div className=' absolute top-1/2 w-full text-center'>
          <p className='font-bold text-sm sm:text-xl pb-10 '>
            Not sure where to go? Perfect.
          </p>
          <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            I am flexible
          </button>
        </div>
      </div>

      <main className='my-10 max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Nearby
          </h2>
          <div className='grid grid-cols-1 smg:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i1.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  London
                </h2>
                <h3 className='text-gray-500 '>
                  45-minute drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i2.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Manchester
                </h2>
                <h3 className='text-gray-500 '>
                  4.5-hour drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i3.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Liverpool
                </h2>
                <h3 className='text-gray-500 '>
                  4.5-hour drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i4.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  York
                </h2>
                <h3 className='text-gray-500 '>
                  4-hour drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i5.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Cardiff
                </h2>
                <h3 className='text-gray-500 '>
                  45-minute drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i6.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Birkenhead
                </h2>
                <h3 className='text-gray-500 '>
                  4.5-hour drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i7.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Newquay
                </h2>
                <h3 className='text-gray-500 '>
                  4-hour drive
                </h3>
              </div>
            </div>
            <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
              <div className='relative h-16 w-16'>
                <span className=''>
                <Image src="/i8.jpg" alt="My Image" width={1800} height={2000} />
                </span>
              </div>
              <div >
                <h2>
                  Hove
                </h2>
                <h3 className='text-gray-500 '>
                  2-hour drive
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section>

          <div className='flex items-center py-8'>
            <div className='flex-grow text-4xl font-semibold'>
              <h2>Live Anywhere</h2>
            </div>
            <div className='flex items-center space-x-4 justify-end'>
              <button className='hover:scale-100 transition duration-200'>
                <BsFillArrowLeftCircleFill className='fill-current h-8 text-2xl' />
              </button>
              <button className='hover:scale-100 transition duration-200'>
                <BsFillArrowRightCircleFill className='fill-current h-8 text-2xl'/>
              </button>
            </div>
          </div>

          <div className='flex space-x-3 overflow-scroll overflow-y-hidden p-3 ml-3 scroll-smooth'>
   
           <div className='cursor--pointer hover:scale-105 transform transition duration-300'>
              <div className='relative h-80 w-80'>
                <span className='box-border block  bg-none opacity-1 border-0 inset-0 scroll-smooth ' >
                <Image src="/j1.jpg" alt="My Image" className=' rounded-lg border-none inset-0 block'
                 width={300} height={320} />
                </span>
              </div>
              <h3 className='text-2xl m-0'>Outdoor getaways</h3>
            </div>
              
            <div className='cursor--pointer hover:scale-105 transform transition duration-300'>
              <div className='relative h-80 w-80'>
                <span className='box-border block  bg-none opacity-1 border-0 inset-0 scroll-smooth ' >
                <Image src="/j2.jpg" alt="My Image" className=' rounded-lg border-none inset-0 block'
                 width={300} height={320} />
                </span>
              </div>
              <h3 className='text-2xl m-0'>Unique stays</h3>
            </div>

             <div className='cursor--pointer hover:scale-105 transform transition duration-300'>
                <div className='relative h-80 w-80'>
                  <span className='box-border block  bg-none opacity-1 border-0 inset-0 scroll-smooth ' >
                      <Image src="/j3.jpg" alt="My Image" className=' rounded-lg border-none inset-0 block'
                       width={300} height={320} />
                  </span>
                </div>
                  <h3 className='text-2xl m-0'>Entire homes</h3>
            </div>

            <div className='cursor--pointer hover:scale-105 transform transition duration-300'>
                <div className='relative h-80 w-80'>
                  <span className='box-border block  bg-none opacity-1 border-0 inset-0 scroll-smooth ' >
                      <Image src="/j4.jpg" alt="My Image" className=' rounded-lg border-none inset-0 block'
                       width={300} height={320} />
                  </span>
                </div>
                  <h3 className='text-2xl m-0'>Pet allowed</h3>
            </div>

          </div>

        </section>

        <section className='realtive py-16 cursor-pointer'>
          <div className='relative h-96 min-w-[300px]'>
            <span className='bg-none box-border block overflow-hidden opacity-1 border-0 m-0 p-0 absolute inset-0'>
            <Image src="/bbanner.jpg" alt="My Image" width={1000} height={1000} className='rounded-2xl border-none m-auto inset-0 box-border p-0' />
            </span>
         
          <div className =' absolute top-32 px-12 ml-12'>
            <h3 className='text-4xl mb-3 w-64'>
              The Greatest Outdoors
            </h3>
            <p >Whishlists curated by Airbnb</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 transition transform duration-200 ease-out'>
              Get Inspired
            </button>
          </div>
          </div>
        </section>
      </main>

      <footer className='grid grid-cols-1 md:grid-cols-4  gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>
            Support
          </h5>
          <ul className='space-y-4'>
            <li>
              Help Center
            </li>
            <li>
              Safety information
            </li>
            <li>
              Cancellation information
            </li>
            <li>
              Our COVID-19 Response
            </li>
            <li>Supporting people with disabilities
            </li>
          </ul>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>
            Hosting
          </h5>
          <ul className='space-y-4'>
          <li>
              Try hAsting
            </li>
            <li>
              AirCover: protection forAHosts
            </li>
            <li>
              Explore hostion resAurces
            </li>
            <li>
              Visit our communityAforum
            </li>
            <li>
              How to host respoAsibly
            </li>
          </ul>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>
            Community
          </h5>
          <ul className='space-y-4'>
          <li>
              Airbnb.org: disaster relief housing
            </li>
            <li>
              Support Afghan refugees
            </li>
            <li>
              Celebrating diversity & belonging
            </li>
            <li>
              Combating discrimination
            </li>
          </ul>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>
            About 
          </h5>
          <ul className='space-y-4'>
          <li>
              Newsroom
            </li>
            <li>
              Investors
            </li>
            <li>
              Airbnb Plus
            </li>
            <li>
              Airbnb Luxe
            </li>
          </ul>
        </div>
      </footer>
      
    </body>
  )
}