import allrooms_1 from "../src/assets/allrooms_1.jpg";
import allrooms_2 from "../src/assets/allrooms_2.jpg";
import allrooms_3 from "../src/assets/allrooms_3.jpg";
import allrooms_4 from "../src/assets/allrooms_4.jpg";

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

export default roomsData;
