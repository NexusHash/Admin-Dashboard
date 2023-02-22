import { EyeIcon, 
  ChevronUpIcon, 
  ChevronDownIcon, 
  UsersIcon, 
  ShoppingBagIcon,
  CurrencyDollarIcon,
  Cog8ToothIcon,
  MagnifyingGlassCircleIcon,
  ServerStackIcon } from "@heroicons/react/24/solid";

import { MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <p className="text-orange-600 text-2xl mb-12 font-bold">Stats for this month</p>

      <div className="grid gap-5 mb-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        <div className="rounded-lg bg-white h-40 shadow-md p-4">
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

        <div className="rounded-lg bg-white h-40 shadow-md p-4">
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

        <div className="rounded-lg bg-white h-40 shadow-md p-4">
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

        <div className="rounded-lg bg-white h-40 shadow-md p-4">
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
      <div className="flex flex-col bg-white h-[40rem] shadow-md rounded-md mb-10 overflow-auto">
        <div className="flex flex-row justify-between h-10 items-center m-4 mt-8 
        pb-6 border-b-2 border-orange-500 z-1">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold"> Recent Transactions </p>
            <p className="text-sm text-gray-400 font-semibold"> Transactions made this month </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center rounded-md outline outline-1 outline-gray-700 mr-5">
              <input className="h-10 outline-none p-2">
              </input>
              <MagnifyingGlassIcon className="w-6 h-6 mr-1 hover:cursor-pointer hover:scale-105 transition-all duration-200"/>
            </div>
            <Cog6ToothIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="overflow-auto  [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150 z-1">
            <div className="flex flex-row justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
            <div className="flex flex-row justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
            <div className="flex flex-row justify-between p-4 m-2 bg-red-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
                <p className="font-semibold text-sm">- $22.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
            <div className="flex flex-row justify-between p-4 m-2 bg-red-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
                <p className="font-semibold text-sm">- $22.99</p>
                <p className="font-semibold text-xs text-gray-500">Balance</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-w-full h-auto hover:cursor-pointer hover:scale-[99%] transition-all duration-150">
            <div className="flex flex-row justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
            <div className="flex flex-row justify-between p-4 m-2 bg-cyan-200 rounded-lg">
              <div className="flex justify-center items-center w-1/5">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <ServerStackIcon className="w-4 h-4  text-orange-500"/>
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
          
        </div>
      </div>
    </>
  )
}