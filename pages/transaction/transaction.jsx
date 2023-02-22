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


export default function Transaction() {
    return (
      <>
        <p className="text-gray-700 text-3xl mt-5 mb-12 font-bold">Transaction</p>
        <p className="text-orange-500 text-xl mb-2 font-bold">Cloud Storage</p>
        <p className="text-gray-500 text-l mb-14 font-bold">7 February 2023</p>
        

        <div className="grid lg:grid-cols-1 gap-5 mb-16">
          <div className="rounded bg-white h-30 shadow-md">
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
          </div>
        </div>

        <div className="flex flex-col rounded-lg bg-white h-46 w-full justify-center content-center shadow-md">
            <div className="grid grid-cols-5 font-semibold p-4 h-14 ml-2 mr-2 border-b-2 border-orange-500 justify-between">
                <item className="">Item</item>
                <item className="">Product</item>
                <item className="">Buyer</item>
                <item className="">Date</item>
                <item className="">Price</item>
            </div>

            <div className="grid grid-cols-5 rounded-lg font-base text-sm bg-cyan-200 mt-5 h-20 mb-5 p-4 ml-2 mr-2 ">
                <item className="">Storage Hosting</item>
                <item className="">Cloud Storage Premium</item>
                <item className="">John Doe</item>
                <item className="">
                <p>7 February 2023</p>
                <p>14:23pm</p>
                </item>
                <item className="">+ $89.99</item>
            </div>
        </div>
      </>
    )
  }