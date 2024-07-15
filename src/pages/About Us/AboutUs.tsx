import React from "react";
import Map from "./Map";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import img1 from "../../assets/About Us/Tansim Ahmed Tashdid.jpg";
import img2 from "../../assets/About Us/e1.jpg";
import img3 from "../../assets/About Us/e2.jpg";
import img4 from "../../assets/About Us/e3.jpg";

interface IMemberInfo {
  name: string;
  img: string;
  position: string;
  description: string;
  id: number;
}

const memberInfo: IMemberInfo[] = [
  {
    name: "Tansim Ahmed Tashid",
    img: img1,
    id: 1,
    position: "CEO",
    description:
      "Tansim is the visionary behind our company, leading us towards success with his experience and dedication.",
  },
  {
    name: "Jane Smith",
    img: img2,
    id: 2,
    position: "CTO",
    description:
      "Jane is the technical genius of our team, ensuring our products are top-notch and innovative.",
  },
  {
    name: "Emily Johnson",
    img: img4,
    id: 3,
    position: "COO",
    description:
      "Emily keeps our operations running smoothly with her exceptional organizational skills.",
  },
  {
    name: "Michael Brown",
    img: img3,
    id: 4,
    position: "CFO",
    description:
      "Michael oversees the financial operations, ensuring our company's financial health and growth.",
  },
  {
    name: "Sarah Wilson",
    img: img3,
    id: 5,
    position: "CMO",
    description:
      "Sarah drives our marketing efforts with her innovative strategies and creative ideas.",
  },
  {
    name: "David Lee",
    img: img1,
    id: 6,
    position: "HR Manager",
    description:
      "David ensures a positive and productive work environment, managing our human resources effectively.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="p-8 space-y-16 bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center bg-blue-500 text-white py-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-3xl text-center">
          Welcome to our company. Learn more about our mission, values, and the
          team that makes it all happen.
        </p>
      </section>

      {/* Contact Information */}
      <section className="flex flex-col items-center bg-white py-16">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-2 text-center">
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@yourcompany.com</p>
          <p>Address: 1234 Main St, Anytown, USA</p>
          <p>Office Hours: Mon-Fri, 9 AM - 5 PM</p>
        </div>
      </section>

      {/* Map */}
      <section className="r bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <div className=" ">
          <Map />
        </div>
      </section>

      {/* Social Media Links */}
      <section className="flex flex-col items-center bg-white py-16">
        <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram />{" "}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />{" "}
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="flex flex-col items-center bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg text-center">
          Our mission is to provide the highest quality products and services to
          our customers. We are committed to innovation, sustainability, and
          excellence. We believe in creating a positive impact in our community
          and building lasting relationships with our customers.
        </p>
      </section>

      {/* Team Members */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {memberInfo?.map((item) => (
            <div
              key={item?.id}
              className="p-6 bg-gray-100 rounded-lg shadow-md w-64 text-center"
            >
              <img
                src={item?.img}
                alt="Team Member 6"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{item?.name}</h3>
              <p className="text-gray-500">{item?.position}</p>
              <p className="mt-2 text-sm">{item?.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="flex flex-col items-center bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          <div className="p-6 bg-white rounded-lg shadow-md w-80">
            <p className="text-sm italic mb-4">
              "This company provides exceptional service and high-quality
              products. Highly recommend!"
            </p>
            <p className="text-right text-gray-500">- Customer A</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md w-80">
            <p className="text-sm italic mb-4">
              "I am very satisfied with their professionalism and customer
              care."
            </p>
            <p className="text-right text-gray-500">- Customer B</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md w-80">
            <p className="text-sm italic mb-4">
              "The best experience I've ever had with any company."
            </p>
            <p className="text-right text-gray-500">- Customer C</p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Our History</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Founded in 2000</h3>
              <p className="text-sm">
                Our company was founded with the vision to provide exceptional
                products and services to our customers.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">Expansion in 2010</h3>
              <p className="text-sm">
                In 2010, we expanded our operations to new markets, increasing
                our reach and impact.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                Innovation in 2020
              </h3>
              <p className="text-sm">
                We continued to innovate and improve our products and services,
                setting new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
