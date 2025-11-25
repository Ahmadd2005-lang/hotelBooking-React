import React from 'react'
import offer_1 from '../assets/offer_1.jpg'
import offer_2 from '../assets/offer_2.jpg'
import offer_3 from '../assets/offer_3.jpg'

function Offers() {

    const offers = [
      {
        _id: 1,
        title: "Sunny Escape Deal",
        description: "Get a free night stay and morning meal included",
        priceOff: 60,
        expiryDate: "Aug 31",
        image: offer_1,
      },
      {
        _id: 2,
        title: "Couple's Special",
        description: "Relaxing package with spa services for two",
        priceOff: 20,
        expiryDate: "Sep 20",
        image: offer_2,
      },
      {
        _id: 3,
        title: "Advance Luxury Saver",
        description:
          "Reserve two months early and enjoy discounts at top-class",
        priceOff: 15,
        expiryDate: "Sep 25",
        image: offer_3,
      },
    ];
  return (
    <section className="py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Special Offers</h2>
        <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto mb-4">
          Discover limited-time deals to save more on your next trip.
        </p>

        <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4"
              key={index}
            >
              <img className="h-48 w-full object-cover" src={offer.image} />

              <div className="p-5">
                <h3 className="text-lg font-bold text-[#e89755]">
                  {offer.title}
                </h3>
                <p className="text-sm">{offer.description}</p>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Valid until {offer.expiryDate}
              </p>

              <div className="flex justify-between items-center pt-4">
                <span className="font-bold">
                  {" "}
                  Save {offer.priceOff} % today
                </span>
                <button>View Offer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers