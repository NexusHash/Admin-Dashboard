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

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mt-5 mb-16 font-bold">Dashboard</p>

      <p className="text-orange-600 text-2xl mb-12 font-bold">Stats for this month</p>

      <div className="grid gap-5 mb-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        <div className="rounded-lg bg-white h-48 drop-shadow-lg shadow-lg p-4 hover:scale-105 transition-all duration-200">
          <div className="flex flex-row justify-between h-1/4items-center">
            <span className="text-gray-400 font-semibold">
              USERS
            </span>
            <div className="flex flex-row justify-center items-center">
              <ChevronUpIcon className="w-5 h-5 text-orange-500 font-bold"/>
              <p className="text-emerald-600">+5%</p>
            </div>
          </div>
          <div className="flex flex-row h-2/4 items-center">
            <span className="text-4xl text-teal-800">
              435
            </span>
          </div>
          <div className="flex flex-row justify-between items-end h-1/4 mt-4">
            <a href="" className="underline underline-offset-4 text-sm text-teal-800">See all users</a>
            <div className="flex bg-orange-500 rounded-md p-2">
            <UsersIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white h-48 drop-shadow-lg shadow-lg p-4 hover:scale-105 transition-all duration-200">
          <div className="flex flex-row justify-between h-1/4items-center">
            <span className="text-gray-400 font-semibold">
              VIEWS
            </span>
            <div className="flex flex-row justify-center items-center">
              <ChevronDownIcon className="w-5 h-5 text-orange-500 font-bold"/>
              <p className="text-red-600">-3%</p>
            </div>
          </div>
          <div className="flex flex-row h-2/4 items-center">
            <span className="text-4xl text-teal-800">
              958
            </span>
          </div>
          <div className="flex flex-row justify-between items-end h-1/4 mt-4">
            <a href="" className="underline underline-offset-4 text-sm text-teal-800">See all viewers</a>
            <div className="flex bg-orange-500 rounded-md p-2">
            <EyeIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white h-48 drop-shadow-lg shadow-lg p-4 hover:scale-105 transition-all duration-200">
          <div className="flex flex-row justify-between h-1/4items-center">
            <span className="text-gray-400 font-semibold">
              ORDERS
            </span>
            <div className="flex flex-row justify-center items-center">
              <ChevronUpIcon className="w-5 h-5 text-orange-500 font-bold"/>
              <p className="text-emerald-600">+12%</p>
            </div>
          </div>
          <div className="flex flex-row h-2/4 items-center">
            <span className="text-4xl text-teal-800">
              98
            </span>
          </div>
          <div className="flex flex-row justify-between items-end h-1/4 mt-4">
            <a href="" className="underline underline-offset-4 text-sm text-teal-800">See all orders</a>
            <div className="flex bg-orange-500 rounded-md p-2">
            <ShoppingBagIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white h-48 drop-shadow-lg shadow-lg p-4 hover:scale-105 transition-all duration-200">
          <div className="flex flex-row justify-between h-1/4items-center">
            <span className="text-gray-400 font-semibold">
              REVENUE
            </span>
            <div className="flex flex-row justify-center items-center">
              <ChevronUpIcon className="w-5 h-5 text-orange-500 font-bold"/>
              <p className="text-emerald-600">+9%</p>
            </div>
          </div>
          <div className="flex flex-row h-2/4 items-center">
            <span className="text-4xl text-teal-800">
              $9745
            </span>
          </div>
          <div className="flex flex-row justify-between items-end h-1/4 mt-4">
            <a href="" className="underline underline-offset-4 text-sm text-teal-800">See Revenue</a>
            <div className="flex bg-orange-500 rounded-md p-2">
            <CurrencyDollarIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col bg-white h-[40rem] shadow-2xl rounded-md mb-20 overflow-auto">
        <div className="flex flex-row justify-between h-10 items-center m-4 mt-8 
        pb-6 z-1">
          <div className="flex flex-col">
            <p className="text-l font-semibold md:text-xl lg:text-2xl"> Recent Transactions </p>
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

        <div className="overflow-auto [&::-webkit-scrollbar]:hidden mb-2">
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
          
        </div>
      </div>
    </>
  )
}