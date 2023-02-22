import Link from "next/link";
import { useRouter } from "next/router";

import {BsFillPlusCircleFill} from 'react-icons/bs'
import {HiServer} from 'react-icons/hi'
import {GoServer} from 'react-icons/go'
import {GiServerRack} from 'react-icons/gi'

export default function Products() {
    return (
      <>
        <div className="flex flex-row justify-between">
          <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold">Products</p>
            <button className="hover:scale-[101%] transition-all duration-300 shadow-lg mt-5 flex p-4 h-12 flex-row bg-white rounded-md border border-orange-500 items-center">
            Add New 
            <BsFillPlusCircleFill 
            className="ml-3 text-orange-500 w-6 h-6"/>
            </button>
        </div>
  
        <p className="mb-5 font-bold text-orange-500 text-xl">Windows Hosting</p>
        <div className="grid lg:grid-cols-3 gap-5 mb-16">

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Silver </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Gold </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Platinum </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>
          
        </div>

        <p className="mb-5 font-bold text-orange-500 text-xl">Linux Hosting</p>
        <div className="grid lg:grid-cols-3 gap-5 mb-16">

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Silver </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Gold </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full text-base font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Platinum </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>
          
        </div>

        <p className="mb-5 font-bold text-orange-500 text-xl">Cloud Storage</p>
        <div className="grid lg:grid-cols-3 gap-5 mb-16">

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Silver </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Gold </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>

          <div className="rounded-md bg-white h-76 shadow-lg">
            <div className="flex justify-center p-2 rounded-t-md shadow-md bg-orange-500">
              <p className="text-white text-lg font-semibold"> Platinum </p>
            </div>
            <div className="flex flex-col content-center justify-center">
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Cost</p>
                <p className="font-semibold text-base text-gray-700">$14.99</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Hosting Space</p>
                <p className="font-semibold text-base text-gray-700">5GB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Sub Domains</p>
                <p className="font-semibold text-base text-gray-700">3</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">SQL Databases</p>
                <p className="font-semibold text-base text-gray-700">25</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Web Traffic</p>
                <p className="font-semibold text-base text-gray-700">10 TB</p>
              </div>
              <div className="border border-orange-100 grid p-2 grid-flow-col grid-cols-2 text-center">
                <p className="font-semibold text-base text-gray-700">Emails</p>
                <p className="font-semibold text-base text-gray-700">50</p>
              </div>
            </div>
            <div className="flex bg-cyan-400 flex-row justify-center content-center ">
              <button className="m-2 w-full h-full font-semibold text-white">Edit Product</button>
            </div>
          </div>
          
        </div>
        
      </>
    )
  }