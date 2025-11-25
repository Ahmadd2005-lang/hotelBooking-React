import React from 'react'
import allrooms_2 from "../assets/allrooms_2.jpg";
import allrooms_3 from "../assets/allrooms_3.jpg";

import {format} from "date-fns";


function MyBookings() {

    const userBookingsData = [
      {
        _id: "bkg_0123535vcasdwe67",
        user: "ahmad",
        image: allrooms_3,
        hotel: "UrbanStay Central",
        checkInDate: "2025-06-10T15:00:00.000Z",
        checkOutDate: "2025-06-12T11:00:00.000Z",
        totalPrice: 620,
        guests: 2,
        status: "confirmed",
        paymentMethod: "PayPal",
        isPaid: true,
      },
      {
        _id: "bkg_0123535vcapouiwe67",
        user: "ahmad",
        image: allrooms_2,
        hotel: "Garden Luxe Hotel",
        checkInDate: "2025-07-01T14:00:00.000Z",
        checkOutDate: "2025-07-03T11:00:00.000Z",
        totalPrice: 780,
        guests: 3,
        status: "cancelled",
        paymentMethod: "Cash",
        isPaid: false,
      }
      
    ];
  return (
    <div className="p-8 pt-30">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-x overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 uppercase text-sm">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Hotel</th>
              <th className="py-3 px-4">Guests</th>
              <th className="py-3 px-4">Check-In</th>
              <th className="py-3 px-4">Check-Out</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Payment</th>
            </tr>
          </thead>

          <tbody>
            {userBookingsData.map((booking) => (
              <tr key={booking._id} className="border-t hover:bg-gray-50">
                <td className="font-medium py-3 px-4">{booking.user}</td>
                <td className="py-3 px-4">
                  <img
                    className="w-20 h-16 object-cover rounded"
                    src={booking.image}
                  />
                </td>
                <td className="font-medium py-3 px-4">{booking.hotel}</td>
                <td className="font-medium py-3 px-4">{booking.guests}</td>
                <td className="font-medium py-3 px-4">
                  {format(new Date(booking.checkInDate), "yyyy-MM-dd")}
                </td>
                <td className="font-medium py-3 px-4">
                  {format(new Date(booking.checkOutDate), "yyyy-MM-dd")}
                </td>
                <td className="font-medium py-3 px-4">
                  {booking.totalPrice} $
                </td>
                <td className="font-medium py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-s ${
                      booking.status === "confirmed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                    <span className={`text-sm ${booking.isPaid ? "text-green-600" : "text-red-600"}`}>{booking.paymentMethod} ({booking.isPaid ? "Paid" : "Unpaid"})</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings