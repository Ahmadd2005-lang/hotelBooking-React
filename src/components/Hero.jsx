import React from "react";
import hotel_1 from "../assets/hero.jpg";

function Hero() {

  const cities = [
    "Istanbul",
    "New York",
    "Oslo",
    "London",
    "Beirut",
  ]
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center  sm:p-10 text-white bg-no-repeat bg-cover bg-center md:h-screen "
      style={{ backgroundImage: `url(${hotel_1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
        {/* HERO TEXT */}
        <div className="text-center lg:text-left max-w-md flex flex-col justify-center items-center lg:items-start h-full mt-5">
          <h2 className="text-[#e89755] text-3xl mt-[100px] md:mt-0 font-bold mb-3 leading-snug">
            Find Your Perfect Stay, Anywhere
          </h2>

          <p className="text-lg sm:text-2xl leading-relaxed">
            Discover top-rated hotels and exclusive deals around the world. Book
            with ease and start your journey today.
          </p>

          <button className="mt-5 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>

        {/* FORM WRAPPER */}
        <div className="flex justify-center items-center w-full md:mt-5">
          <form className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-black">
              Book Your Stay
            </h2>

            <div>
              <label for="destination" className="block mb-1 text-gray-800">
                Destination
              </label>
              <input
                list="destination"
                type="text"
                name="destination"
                placeholder="Enter destination"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-blue-500"
              />
              <datalist id="destination">
                {cities?.map((city, index) => (
                  <option value={city} key={index} />
                ))}
              </datalist>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-gray-800">Check-In</label>
                <input
                  type="date"
                  className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-1 text-gray-800">Check-Out</label>
                <input
                  type="date"
                  className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-gray-800 block mb-1">Guests</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Number of guests"
                  className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-blue-500"
                />
              </div>

              <div className="flex-1">
                <label className="text-gray-800 block mb-1">Rooms</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Number of rooms"
                  className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full mt-3 bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                Search Hotels
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
