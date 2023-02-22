import { BeakerIcon } from '@heroicons/react/24/solid'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Account() {
    return (
      <>
        <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold">Edit Profile</p>
  
        <div className="flex flex-row rounded-lg w-full bg-white h-48 mb-16 shadow-lg p-4 ">
          <div className='flex w-1/5 items-center'>
            <img src="../images/man-portrait.png" alt="" className="w-32 h-32 object-cover rounded-full border-2 border-orange-500" />
          </div>
          <div className="flex flex-row w-2/5 items-center">
            <div className="flex flex-col ml-8 ">
              <span className="text-gray-800 font-semibold text-lg">Kevin Roberts</span>
              <span className="text-orange-500 font-semibold text-base">Front-End Developer</span>
              <span className="text-gray-300 font-base text-base">kevinrobertsdev@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
              <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
              <BsGithub className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
              <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
          </div>
          
        </div>

        <div className='flex justify-center mb-24'>
            <div className="flex flex-col rounded-lg w-[90%] bg-white h-[850px] mb-16 shadow-lg p-4">
                <div className='flex flex-col w-full justify-center items-center mt-3 h-1/5'>
                    <img src='../images/man-portrait.png' alt='' className='shadow-md w-36 h-36 object-cover rounded-full border-2 border-orange-500'/>
                    <button className='shadow-md p-2 m-2 w-32 font-semibold bg-orange-500 text-white rounded-md hover:bg-orange-400 hover:scale-[101%] transition-all duration-200 ease-linear'>Edit Image</button>
                </div>
                <div className='grid col-span-1 h-4/5 content-center w-[100%]'>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Name</label>
                        <input 
                        placeholder='Your name...'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Email</label>
                        <input 
                        placeholder='Your email...'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Role</label>
                        <input 
                        placeholder='Your role...'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Linkedin</label>
                        <input 
                        placeholder='https://www.linkedin.com/'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Github</label>
                        <input 
                        placeholder='https://www.github.com/'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <div className='flex flex-col w-full p-4 justify-center rounded-lg'>
                        <label className='mr-10'>Twitter</label>
                        <input 
                        placeholder='https://www.twitter.com/'
                        className= 'w-[100%] outline outline-offset-0 p-2 outline-1 shadow-md outline-gray-300 rounded-sm'/>
                    </div>
                    <Link href='../profile/account'>
                    <div className='flex flex-col w-full p-4 justify-center items-center rounded-lg'>  
                      <button className='shadow-md font-semibold hover:bg-orange-400 hover:scale-[101%] transition-all duration-200 rounded-lg p-4 bg-orange-500 text-white w-[20%]'> Save </button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        
      </>
    )
  }