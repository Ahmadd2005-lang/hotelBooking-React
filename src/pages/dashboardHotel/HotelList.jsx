import React from 'react'
import allrooms_1 from "../../assets/allrooms_1.jpg";
import allrooms_2 from "../../assets/allrooms_2.jpg";
import allrooms_3 from "../../assets/allrooms_3.jpg";
import allrooms_4 from "../../assets/allrooms_4.jpg";

function HotelList() {

  const roomsData = [
    {
      _id: "cdsf24326",
      hotel: "Alpine View Lodge",
      city: "Los Angeles",
      address: "112 Mountain Rd, Aspen, Colorado, USA",
      rating: 5,
      roomType: "King Suite",
      pricePerNight: 450,
      amenities: ["Balcony", "Sea View", "High Speed WiFi"],
      images: allrooms_1,
      isAvailable: true,
    },
    {
      _id: "cdsf56326",
      hotel: "Garden Luxe Hotel",
      city: "Istanbul",
      address: "114 Mountain Rd, Aspen, Colorado, USA",
      rating: 4,
      roomType: "Standard Twin",
      pricePerNight: 280,
      amenities: ["TV", "City View", "Breakfast Included"],
      images: allrooms_2,
      isAvailable: false,
    },
    {
      _id: "crtf24326",
      hotel: "UrbanStay Central",
      city: "New York",
      address: "88 Lotus Lake Rd, Guilin, Guangxi, China",
      rating: 3,
      roomType: "Luxury Single",
      pricePerNight: 320,
      amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
      images: allrooms_3,
      isAvailable: true,
    },
    {
      _id: "crtf27426",
      hotel: "King Suite",
      city: "China",
      address: "90 Lotus Lake Rd, Guilin, Guangxi, China",
      rating: 4,
      roomType: "Deluxe Family Room",
      pricePerNight: 390,
      amenities: ["Mini Bar", "Mountain View", "Free Parking"],
      images: allrooms_4,
      isAvailable: true,
    },
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: "10px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Availabe Hotels
      </h1>
      {roomsData.map((room) => (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "25px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: room.isAvailable ? "#e0ffe0" : "#ffe0e0",
            alignItems: "center",
          }}
        >
          <img
            src={room.images}
            style={{
              width: "150px",
              height: "100px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />

          <div style={{ flexGrow: 1 }}>
            <h2 style={{ margin: "0 0 8px 0" }}>{room.hotel}</h2>
            <p style={{ margin: "4px 0" }}>
              <strong>City:</strong> {room.city}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Room Type:</strong> {room.roomType}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Price Per Night:</strong> {room.pricePerNight}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong>Rating:</strong> {room.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList