import React from "react";
import { useParams } from "react-router-dom";
import roomsData from "../allRooms";
import { FaLocationArrow, FaStar } from "react-icons/fa";

function RoomDetails() {
  const { id } = useParams();
  const hotel = roomsData.find((room) => room._id === id);

  if (!hotel) {
    return <div className="text-center py-10 pt-30">Hotel not found</div>;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 pt-30">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{hotel.hotel}</h1>

        <p className="mb-2">{hotel.city}</p>
        <p className="flex gap-2 items-center justify-center text-gray-600 mb-2">
          <FaLocationArrow />
          {hotel.address}, {hotel.city}
        </p>

        <img
          className="w-full h-96 object-cover rounded-xl mb-6 shadow-md"
          src={hotel.images}
        />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="font-bold">Room Type</h2>
          <p className="text-gray-500">{hotel.roomType}</p>

          <h2 className="font-bold mt-3">Amenities</h2>
          <ul className="list-disc list-inside text-gray-500">
            {hotel.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Price per Night</h2>
          <p className="text-gray-500">{hotel.pricePerNight}</p>

          <h2 className="text-md font-semibold mt-4 mb-2">Rating</h2>

          <div className="flex items-center text-yellow-400 mb-2">
            {Array.from({ length: hotel.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

            <h2 className="font-bold mt-3">Availability</h2>
            <p className={hotel.isAvailable ? "text-green-500" : "text-red-500"}>{hotel.isAvailable ? "Available": "Not Available"}</p>

        </div>
      </div>

      <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">Location</h2>

            <iframe title="map" src={`https://www.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`} width={"100%"} height={"450px"} className="rounded-md shadow" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default RoomDetails;
