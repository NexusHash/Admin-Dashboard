export default function Home() {
    return (
      <>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

        <p className="text-gray-700 text-3xl mb-16 font-bold">Take a look at your statistics here</p>
  
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-md">
          </div>
          <div className="rounded bg-white h-40 shadow-md">
          </div>
          <div className="rounded bg-white h-40 shadow-md">
          </div>
        </div>
        <div className="grid col-1 bg-white h-96 shadow-md">
  
        </div>
      </>
    )
  }