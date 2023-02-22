import { BeakerIcon } from '@heroicons/react/24/solid'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'
import { FiEdit2 } from 'react-icons/fi'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Account() {
    return (
      <div className='flex flex-col h-full'>
        <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold h-full">Team</p>

        <div className='grid gap-5 mb-16 grid-cols-1'>

          <h1 className='text-4xl font-bold text-orange-500 mb-5'>Developers</h1>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="../images/man-portrait.png" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
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

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Kyle Alho</span>
                <span className="text-orange-500 font-semibold text-base">Back-End Developer</span>
                <span className="text-gray-300 font-base text-base">kylealho@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsGithub className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Lemcke Uys</span>
                <span className="text-orange-500 font-semibold text-base">Database Developer</span>
                <span className="text-gray-300 font-base text-base">lemckeuys@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsGithub className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>


        </div>

        <div className='grid gap-5 mb-16 grid-cols-1'>

          <h1 className='text-4xl font-bold text-orange-500 mb-5'>Admin</h1>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1583195763986-0231686dcd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">John Doe</span>
                <span className="text-orange-500 font-semibold text-base">Head Admin</span>
                <span className="text-gray-300 font-base text-base">johndoe@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Julia Roberts</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">juliaroberts@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Jane Doe</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">janedoe@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Ameer Hamza</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">ameerhamza@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>


        </div>

        <div className='grid gap-5 mb-16 grid-cols-1'>

          <h1 className='text-4xl font-bold text-orange-500 mb-5'>Sales</h1>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1583195763986-0231686dcd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">John Doe</span>
                <span className="text-orange-500 font-semibold text-base">Head Admin</span>
                <span className="text-gray-300 font-base text-base">johndoe@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Julia Roberts</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">juliaroberts@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Jane Doe</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">janedoe@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>

          <div className="flex flex-row rounded-lg w-[100%] bg-white h-32 mb-5 shadow-lg p-4 ">
            <div className='flex w-1/5 items-center'>
              <img src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" className="w-24 h-24 object-cover rounded-full border-2 border-orange-500" />
            </div>
            <div className="flex flex-row w-2/5 items-center">
              <div className="flex flex-col ml-8 ">
                <span className="text-gray-800 font-semibold text-lg">Ameer Hamza</span>
                <span className="text-orange-500 font-semibold text-base">Admin</span>
                <span className="text-gray-300 font-base text-base">ameerhamza@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center content-center gap-10 w-2/5">
                <BsLinkedin className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
                <BsTwitter className='text-orange-500 w-8 h-8 hover:scale-110 cursor-pointer transition-all duration-300 ease-in'/>
            </div>
          </div>


        </div>
        
      </div>
    )
  }