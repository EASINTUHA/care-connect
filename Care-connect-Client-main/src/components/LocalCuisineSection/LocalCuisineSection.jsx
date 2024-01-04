import React from "react";
import Container from "../Shared/Container";

const LocalCuisineSection = () => {
  const foodieAdventures = [
    {
      title: "Apollo Hospitals Dhaka",
      description:
        "Advancing Care, Enhancing Lives",
      image: "https://i.ibb.co/vmCVYmg/OIP-3.jpg.",
      link: "/italy-food-tour",
    },
    {
      title: "Square Hospitals Ltd",
      description:
        " Excellence in Healthcare, Commitment to Quality.",
      image: "https://i.ibb.co/k92BYcK/download.jpg",
      link: "/india-food-tour",
    },
    {
      title: "United Hospital Limited",
      description: "Your Health, Our Priority.",
      image: "https://i.ibb.co/GTPTcnY/OIP-2.jpg",
      link: "/japan-sushi-tour",
    },
    {
      title: "Bangabandhu Sheikh Mujib Medical University ",
      description:
        "Advancing Medical Education and Healthcare.",
      image: "https://i.ibb.co/zJqXBWB/OIP-1.jpg",
      link: "/mediterranean-food-tour",
    },
    {
      title: "Ibn Sina Hospital",
      description:
        "Healthcare with Compassion and Innovation.",
      image: "https://i.ibb.co/LRcG50C/OIP.jpg",
      link: "/thailand-street-food-tour",
    },
    {
      title: "Bangladesh Eye Hospital and Institute",
      description:
        "Visionary Care for Brighter Tomorrows.",
      image: "https://i.ibb.co/DW63KwW/pexels-photo-1692693.jpg",
      link: "/french-pastry-tour", // Link to the detailed food tour page
    },
    {
      title: "Labaid Cardiac Hospital",
      description:
        "Heartfelt Care, Cardiac Excellence.",
      image: "https://i.ibb.co/zJqXBWB/OIP-1.jpg",
      link: "/mediterranean-food-tour",
    },
    {
      title: "Popular Diagnostic Centre Ltd",
      description:
        "Precision Diagnostics, Caring Solutions.",
      image: "https://i.ibb.co/LRcG50C/OIP.jpg",
      link: "/thailand-street-food-tour",
    },
    {
      title: "Dhaka Medical College Hospital",
      description:
        "Tradition of Healing, Excellence in Education.",
      image: "https://i.ibb.co/DW63KwW/pexels-photo-1692693.jpg",
      link: "/french-pastry-tour", // Link to the detailed food tour page
    },
  ];

  return (
    <Container>
      <div className="container mx-auto my-20">
        <h2 className="animated-text text-center text-3xl mt-20">
          Bangladesh's Premier Hub for Exceptional Healthcare.
        </h2>
        <p className="animated-text text-center text-lg">
          Leading healthcare in Bangladesh, our premier hospital prioritizes excellence, patient well-being, advanced services, technology, and compassion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
          {foodieAdventures.map((adventure, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {adventure.title}
                </h3>
                <p className="text-gray-600 mb-4">{adventure.description}</p>
                <a
                  href={adventure.link}
                  className="text-blue-500 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LocalCuisineSection;
