import React from "react";
import Container from "../Shared/Container";

const Safety = () => {
  return (
    <Container>
      <div className="safety-updates my-20">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="animated-text text-3xl mb-4">
                Safety and Health Updates
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Your well-being is our priority. Stay informed about the latest
                health measures, medical advisories, and wellness guidelines.
              </p>
              <div className="text-justify pb-4">
                <h3 className="text-2xl font-semibold mb-2">Key Updates</h3>
                <ul className="list-disc list-inside text-gray-800 text-xl">
                  <li className="mb-6">
                    Check official health advisories from reputable medical organizations
                    and government health agencies for your destination.
                  </li>
                  <li className="mb-6">
                    Adhere to local health and safety guidelines, including the use of
                    protective measures like masks and adherence to social distancing practices.
                  </li>
                  <li className="mb-6">
                    Stay informed about entry requirements, including
                    vaccination and health documentation, and be aware of
                    any quarantine protocols if applicable.
                  </li>
                </ul>
              </div>

              <p className="text-xl text-gray-700 mb-6">
                For the most up-to-date information and resources, we recommend
                visiting official sources:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.who.int/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  World Health Organization
                </a>
                <a
                  href="https://www.nhs.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  National Health Service (NHS)
                </a>
              </div>
            </div>
            <div className="text-justify">
              <img
                src="https://consumerhealthratings.com/wp-content/uploads/2018/03/adobestock_152144961.jpeg"
                alt="Safety and Health Updates"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Safety;
