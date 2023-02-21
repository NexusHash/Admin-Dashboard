import { HeartIcon, EyeIcon, ChevronUpIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <p className="text-orange-600 text-2xl mb-12 font-bold">Take a look at your statistics here</p>

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
              <ChevronUpIcon className="w-5 h-5 text-orange-500 font-bold"/>
              <p className="text-emerald-600">+2%</p>
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
            <EyeIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>

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
            <EyeIcon className="w-8 h-8 text-white"/>
            </div>
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-md">
      </div>
    </>
  )
}