import React from "react";

function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="animated-text text-center text-3xl mt-20">
            Why Choose Us
          </h2>
          <p className="animated-text text-center text-lg">
            Discover what sets us apart from the rest.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap -mx-4">
          {/* Unique Expertise */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Specialized Expertise
              </h3>
              <p className="mt-4 text-gray-600">
              Benefit from our profound knowledge in healthcare, ensuring tailored and authentic medical experiences.
              </p>
            </div>
          </div>

          {/* Exceptional Customer Service */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Committed Patient Care
              </h3>
              <p className="mt-4 text-gray-600">
              Your well-being is our priority. Our devoted team is available 24/7 to support you throughout your health journey.
              </p>
            </div>
          </div>

          {/* Awards and Affiliations */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Accolades and Partnerships
              </h3>
              <p className="mt-4 text-gray-600">
              Proudly recognized with industry awards and partnered with leading medical organizations for excellence.
              </p>
            </div>
          </div>

          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Personalized Health Journeys
              </h3>
              <p className="mt-4 text-gray-600">
              Experience healthcare designed around your unique needs and preferences, providing a personalized healing path.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Global Healthcare Network
              </h3>
              <p className="mt-4 text-gray-600">
              With an extensive global network, we offer support and assistance wherever your health journey leads.
              </p>
            </div>
          </div>

          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
              Toward Wellness Excellence
              </h3>
              <p className="mt-4 text-gray-600">
              Crafting personalized healthcare experiences, dedicated to your specific well-being goals and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
