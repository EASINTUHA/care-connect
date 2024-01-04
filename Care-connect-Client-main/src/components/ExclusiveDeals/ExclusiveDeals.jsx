import React from "react";
const ExclusiveDeals = () => {
  return (
    <section className="exclusive-deals">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Exclusive Deal Card 1 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/kJVgvhQ/Cleveland-Clinic.png"
              alt="Exclusive Deal 1"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
            Cleveland Clinic
            </h3>
            <p className="text-gray-600 mb-4">
            Every Life Deserves World Class Care.
            </p>
            <div className="text-primary font-semibold">$999</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>
          {/* Exclusive Deal Card 2 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/9vVhtXm/Mayo-Clinic.png"
              alt="Exclusive Deal 2"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
            Mayo Clinic
            </h3>
            <p className="text-gray-600 mb-4">
            Pinnacle of global healthcare in Minnesota.
            </p>
            <div className="text-primary font-semibold">$799</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>
          {/* Exclusive Deal Card 3 */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src="https://i.ibb.co/Rp3zT9H/The-Johns-Hopkins-Hospital.jpg"
              alt="Exclusive Deal 3"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">The Johns Hopkins Hospital</h3>
            <p className="text-gray-600 mb-4">
            Improving the Health of the Community and the World.
            </p>
            <div className="text-primary font-semibold">$699</div>
            <button className="mt-4 py-2 px-4 bg-primary text-white rounded-full hover:bg-primary-dark">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals;
