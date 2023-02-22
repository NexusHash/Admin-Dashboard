import { BeakerIcon } from '@heroicons/react/24/solid'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Account() {
    return (
      <>
        <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold">Profile</p>
  
        <div className="flex flex-row rounded-lg w-full bg-white h-48 mb-16 shadow-lg p-4 ">
          <div className='flex w-1/5 items-center'>
            <img src="../images/man-portrait.png" alt="" className="shadow-lg w-32 h-32 object-cover rounded-full border-2 border-orange-500" />
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
          <div className=''>
            <Link href="../profile/profileEdit">
            <FiEdit2 className='w-5 h-5 text-gray-700 font-bold hover:scale-105 cursor-pointer transition-all duration-300 ease-in'/>
            </Link>
          </div>
        </div>
      </>
    )
  }