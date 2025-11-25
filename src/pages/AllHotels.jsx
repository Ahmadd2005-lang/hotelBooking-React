import React, { useState } from 'react'


import {useNavigate} from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa";
import roomsData from '../allRooms';


function AllHotels() {

  const CheckBox = ({label,selected = false, onChange=()=>{}}) =>{
    return(
      <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
      <input type="checkbox" checked={selected} onChange={(e)=>(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
      </label>
    )
  }

  const RadioButton = ({label,selected = false, onChange=()=>{}}) =>{
    return(
      <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
      <input type="radio" name="sortOption" checked={selected} onChange={()=>(label)} />
      <span className='font-light select-none'>{label}</span>
      </label>
    )
  }

    const navigate = useNavigate()

    const [openFilter, setOpenFilter] = useState(false);

    const roomFilter = [
      "Single Room",
      "Double Room",
      "Swimming Pool",
      "Family Suite"
    ]

    const priceFilter = [
      "0 to 500",
      "500 to 1000",
      "1000 to 2000",
      "2000 to 3000",
    ];

    const sortOption = [
      "Price Low To High",
      "Price High To Low",
      "Newest",
      
    ];

    
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-30 px-10">
      <div>
        <div className="flex flex-col items-center text-left">
          <h1 className="text-[#e89755] text-4xl md:text-2xl">Hotel Rooms</h1>
          <p className="text-gray-500 md:text-base text-sm text-center mt-2 max-w-170">
            Discover comfortable and stylish rooms tailored to every traveler's
            needs - from cozy singles to luxurious suites.
          </p>
        </div>

        {roomsData.map((room, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b px-20"
          >
            <img
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="max-h-65 rounded-xl shadow-lg object-cover cursor-pointer"
              src={room.images}
            />

            <div>
              <p>{room.hotel}</p>
              <p>{room.city}</p>

              <div className="flex items-center text-yellow-400 mb-2">
                {Array.from({ length: room.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="text-gray-500 flex items-center gap-3">
                <FaLocationArrow />
                <p>{room.address}</p>
              </div>

              <div className="mt-3">
                {room.amenities.map((items, index) => (
                  <small
                    key={index}
                    className="p-2 rounded-lg bg-gray-300 mr-2"
                  >
                    {items}
                  </small>
                ))}
              </div>
              <p className="text-[#e89755] font-bold mt-3">
                {room.pricePerNight}$/Night
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-80 p-4 border border-gray-300 text-gray-600">
        <div
          className={`flex items-center justify-between px-5 border-b border-gray-500 ${
            openFilter && "border-b"
          }`}
        >
          <p>FILTERS</p>

          <div>
            <span
              onClick={() => setOpenFilter(!openFilter)}
              className="lg:hidden"
            >
              {openFilter ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>

        <div
          className={`${
            openFilter ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Popular Filters</p>

            {roomFilter.map((room, index) => (
              <CheckBox label={room} key={index} />
            ))}
          </div>

          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Price Range</p>

            {priceFilter.map((price, index) => (
              <CheckBox label={price} key={index} />
            ))}
          </div>

          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Sort By</p>

            {sortOption.map((sort, index) => (
              <RadioButton label={sort} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHotels