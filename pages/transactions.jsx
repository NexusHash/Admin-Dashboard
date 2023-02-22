import { EyeIcon, 
  ChevronUpIcon, 
  ChevronDownIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  CurrencyDollarIcon,
  Cog8ToothIcon,
  MagnifyingGlassCircleIcon,
  ServerStackIcon, 
  EnvelopeIcon,
  CloudIcon} from "@heroicons/react/24/solid";

import { MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"
import Link from "next/link";

export default function Home() {
    return (
      <>
        <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold">Transactions</p>

        <p className="text-orange-600 text-2xl mb-12 font-bold">Take a look at your transactions</p>
  
        <div className="flex flex-col bg-white h-[40rem] shadow-2xl rounded-md mb-20 overflow-auto">
        <div className="flex flex-row justify-between h-10 items-center m-4 mt-8 
        pb-2 z-1">
          <div className="flex flex-col">
            <p className="text-l font-semibold md:text-xl lg:text-2xl"> Transactions </p>
            <p className="text-sm text-gray-400 font-semibold md:text-l lg:text-xl"> </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row bg-white justify-center items-center rounded-lg outline outline-1 outline-gray-500 mr-5 w-58">
              <input 
              className="h-10 outline-none p-2 font-medium"
              placeholder="Search for a transaction...">
              </input>
              <MagnifyingGlassIcon className="w-6 h-6 m-2 hover:cursor-pointer hover:scale-105 transition-all duration-200 md:w-5 md:h-5 sm:w-4 sm:h-4 lg:w-6 lg:h-6"/>
            </div>
            <Cog6ToothIcon className="w-6 h-6 hover:scale-105 duration-200 transition-all hover:cursor-pointer" />
          </div>
          
        </div>
        <div className="grid grid-cols-5 w-full font-semibold p-4 h-14 ml-2 mr-2 border-b-2 border-orange-500 justify-between text-center">
                <item className="">Item</item>
                <item className="">Product</item>
                <item className="">Date</item>
                <item className="">Price</item>
          </div>

        <div className="overflow-auto  [&::-webkit-scrollbar]:hidden mb-2">
          
          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150 z-1">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Windows Hosting Premium</p>
                <p className="font-semibold text-xs text-gray-500">Web Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">7 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">+ $44.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <EnvelopeIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Linux Mail Hosting Premium</p>
                <p className="font-semibold text-xs text-gray-500">Email Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">7 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">+ $22.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-red-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Server Upkeep Costs</p>
                <p className="font-semibold text-xs text-gray-500">Server Costs</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">6 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">- $1100.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Windows Hosting Gold</p>
                <p className="font-semibold text-xs text-gray-500">Web Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">6 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">+ $39.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-red-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Windows Hosting Premium</p>
                <p className="font-semibold text-xs text-gray-500">Web Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">6 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">- $44.99</p>
                <p className="font-semibold text-xs text-gray-500">Refund</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <CloudIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Cloud Storage</p>
                <p className="font-semibold text-xs text-gray-500">Storage Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">6 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">+ $89.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>

          <Link href='../transaction/transaction'>
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row shadow-md justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <EnvelopeIcon className="w-5 h-5  text-orange-500"/>
                </div>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">Linux Mail Hosting Silver</p>
                <p className="font-semibold text-xs text-gray-500">Email Hosting</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">7 February 2023</p>
                <p className="font-semibold text-xs text-gray-500">Last Payment</p>
              </div>
              <div className="flex flex-col w-1/4">
                <p className="font-semibold text-sm">+ $16.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      </>
    )
  }