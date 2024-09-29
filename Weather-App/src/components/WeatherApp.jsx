import React,{ useEffect, useState} from 'react'


const WeatherApp = () => {
  const [City, setCity] = useState("")
  const [Data, setData] = useState({})
  
  const SearchHandle=(City)=>{
    const ApiKey = "6e9ba1c32b1793fbd02850fe516b9abb"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}&units=metric`)
    .then((res)=>res.json())
    .then((data)=> setData(data)) 
  }
  const clickHandle=()=>{
    SearchHandle(City)
    setCity("")
  
}

  useEffect(()=>{
    SearchHandle("jaipur")
  },[])

console.log(Data);
  return (
    <>
    <div className='w-screen h-screen   flex justify-center  items-center'>
        {/* main div */}
        <div className=' sm:w-3/5 w-4/5   h-4/5   bg-[#000000b8;]  border border-red-700 md:flex'>
{/* left panel */}

<div className='md:w-3/6  flex flex-col justify-between '>
<div className="flex justify-end md:m-4 mx-4  ">
              <p className="font-bold text-2xl text-white">{Data.name}, {Data.sys && Data.sys.country}</p>
            </div>
            <div className="flex justify-center   m-10">
              <img
              src={`https://openweathermap.org/img/wn/${Data.weather && Data.weather[0].icon}@2x.png`}
              alt="error"
              className="rounded-full bg-[#ffffff85] w-2/5"
            />
            </div>
            <div className="flex justify-between md:m-4 mx-4  ">
              <div className="font-bold text-xl text-gray-200">
                <p >{Data.coord && Math.round(Data.coord.lat)}</p>
                <p>{Data.coord && Math.round(Data.coord.lon)}</p>
              </div>
              <div className="font-bold text-2xl text-gray-200">
                <p>{Data.main && Math.round(Data.main.temp)}°C</p>
              </div>
            </div>
         
</div>
{/* right panel */}
<div className='md:w-3/6   bg-rightpanel'>
<div className="h-1/5 flex justify-center items-center border-b border-gray-300   sm:m-4">
 </div>
<div className="flex border border-gray-200 rounded-lg w-3/5 mt-3 mx-auto relative">
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent  text-white placeholder-white px-8 py-2   border-none outline-none"
                onChange={(e)=>{setCity(e.target.value)}}
                value={City}
              />
<span
                className="material-symbols-outlined text-2xl cursor-pointer 
                rounded-full p-1 float-right  absolute right-1" onClick={clickHandle}
                >
               <svg xmlns="http://www.w3.org/2000/svg" height="32px"   viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
               </span>
</div>
<div className="text-center text-white font-semibold my-5">
              <p>{Data.name},{Data.sys && Data.sys.country}</p>
              <p>{Data.weather && Data.weather[0].description}</p>
            </div>
                  <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Temp</p>
                <p>{Data.main && Math.round(Data.main.temp)}°C</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Visibility</p>
                <p>{Data.visibility}Km</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Wind Speed</p>
                <p>{Data.wind && Data.wind.speed} meter/sec</p>
              </div>
                  </div>

        </div>
       </div>
    </>
  )
}

export default WeatherApp