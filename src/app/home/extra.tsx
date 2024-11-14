import React, { useState } from "react";

const CurrencyRupee = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const MapPin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PropertyCard = ({
  imageUrl,
  plotId,
  state,
  district,
  colony,
  size,
  status,
  type,
  price,
  bookedBy,
  owner,
  address,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <img
        src="https://imgs.search.brave.com/ccAPasDnjJWl_RCs2eCiQacz6omap0M1VXPp_sN5qJU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21icGhvdG8vcHJv/cGVydHkvY3JvcHBl/ZF9pbWFnZXMvMjAy/NC9TZXAvMTEvUGhv/dG9faDMwMF93NDUw/Lzc0ODQ3OTI1XzJf/UHJvcGVydHlJbWFn/ZTExMy04OTk3NTAy/Mjc1MTQ0Ml8zMDBf/NDUwLmpwZw"
        alt="Property"
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {colony}, {district}
        </h5>
        <div className="flex items-center mb-2">
          <MapPin size={18} className="mr-2" />
          <span>{address}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Plot ID:</span> {plotId}
        </div>
        <div className="mb-2">
          <span className="font-medium">Size:</span> {size}
        </div>
        <div className="mb-2">
          <span className="font-medium">Status:</span> {status}
        </div>
        <div className="mb-2">
          <span className="font-medium">Type:</span> {type}
        </div>
        <div className="mb-2">
          <span className="font-medium">Owner:</span> {owner}
        </div>
        {bookedBy && (
          <div className="mb-2">
            <span className="font-medium">Booked By:</span> {bookedBy}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CurrencyRupee size={18} className="mr-2" />
            <span className="text-lg font-medium">{price}</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Plot
          </a>
        </div>
      </div>
    </div>
  );
};

const Example = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const data = [
    {
      plotId: 1,
      state: "Maharashtra",
      district: "Pune",
      colony: "Shivaji Nagar",
      size: "636 sq ft",
      status: "available",
      type: "sell",
      price: 11865,
      bookedBy: null,
      owner: "Owner 2",
      address: "240, Shivaji Nagar, Pune, Maharashtra",
    },
    {
      plotId: 2,
      state: "Maharashtra",
      district: "Pune",
      colony: "Gokul Colony",
      size: "1343 sq ft",
      status: "booked",
      type: "rent",
      price: 468043,
      bookedBy: null,
      owner: "Owner 3",
      address: "288, Gokul Colony, Pune, Maharashtra",
    },
    {
      plotId: 3,
      state: "Maharashtra",
      district: "Pune",
      colony: "Raja Park",
      size: "502 sq ft",
      status: "booked",
      type: "rent",
      price: 23677,
      bookedBy: null,
      owner: "Owner 4",
      address: "577, Raja Park, Pune, Maharashtra",
    },
    {
      plotId: 4,
      state: "Maharashtra",
      district: "Pune",
      colony: "Krishna Nagar",
      size: "2070 sq ft",
      status: "booked",
      type: "rent",
      price: 276793,
      bookedBy: "dxtpa@example.com",
      owner: "Owner 5",
      address: "484, Krishna Nagar, Pune, Maharashtra",
    },
    {
      plotId: 5,
      state: "Maharashtra",
      district: "Pune",
      colony: "Green Valley",
      size: "1371 sq ft",
      status: "booked",
      type: "sell",
      price: 427363,
      bookedBy: "pohda@example.com",
      owner: "Owner 6",
      address: "685, Green Valley, Pune, Maharashtra",
    },
    {
      plotId: 6,
      state: "Maharashtra",
      district: "Pune",
      colony: "Sunrise Enclave",
      size: "2270 sq ft",
      status: "booked",
      type: "sell",
      price: 16273,
      bookedBy: null,
      owner: "Owner 7",
      address: "850, Sunrise Enclave, Pune, Maharashtra",
    },
    {
      plotId: 7,
      state: "Maharashtra",
      district: "Pune",
      colony: "Pearl Residency",
      size: "1689 sq ft",
      status: "available",
      type: "rent",
      price: 104516,
      bookedBy: "vm2sk@example.com",
      owner: "Owner 8",
      address: "610, Pearl Residency, Pune, Maharashtra",
    },
    {
      plotId: 8,
      state: "Maharashtra",
      district: "Pune",
      colony: "Elite Garden",
      size: "1195 sq ft",
      status: "available",
      type: "rent",
      price: 575678,
      bookedBy: null,
      owner: "Owner 9",
      address: "67, Elite Garden, Pune, Maharashtra",
    },
    {
      plotId: 9,
      state: "Maharashtra",
      district: "Pune",
      colony: "Silver Oak",
      size: "730 sq ft",
      status: "booked",
      type: "sell",
      price: 369751,
      bookedBy: "tr5gi@example.com",
      owner: "Owner 10",
      address: "794, Silver Oak, Pune, Maharashtra",
    },
    {
      plotId: 10,
      state: "Maharashtra",
      district: "Pune",
      colony: "Maple Heights",
      size: "734 sq ft",
      status: "booked",
      type: "sell",
      price: 266087,
      bookedBy: null,
      owner: "Owner 11",
      address: "117, Maple Heights, Pune, Maharashtra",
    },
    {
      plotId: 11,
      state: "Maharashtra",
      district: "Mumbai",
      colony: "Shivaji Nagar",
      size: "2241 sq ft",
      status: "booked",
      type: "rent",
      price: 6173,
      bookedBy: "azxh9@example.com",
      owner: "Owner 12",
      address: "110, Shivaji Nagar, Mumbai, Maharashtra",
    },
    {
      plotId: 12,
      state: "Maharashtra",
      district: "Mumbai",
      colony: "Gokul Colony",
      size: "1997 sq ft",
      status: "available",
      type: "sell",
      price: 23813,
      bookedBy: null,
      owner: "Owner 13",
      address: "967, Gokul Colony, Mumbai, Maharashtra",
    },
    {
      plotId: 13,
      state: "Maharashtra",
      district: "Mumbai",
      colony: "Raja Park",
      size: "1019 sq ft",
      status: "available",
      type: "sell",
      price: 17189,
      bookedBy: null,
      owner: "Owner 14",
      address: "276, Raja Park, Mumbai, Maharashtra",
    },
  ];

  const uniqueStates = [...new Set(data.map((item) => item.state))];
  const uniqueDistricts = [...new Set(data.map((item) => item.district))];

  const filteredData = data.filter(
    (item) =>
      (selectedState ? item.state === selectedState : true) &&
      (selectedDistrict ? item.district === selectedDistrict : true)
  );

  return (
    <div>
      <header className="mb-20">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Plotify
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    All Plots
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Dropdown Filters */}
      <div className="flex space-x-4 mb-4">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select State</option>
          {uniqueStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select District</option>
          {uniqueDistricts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <PropertyCard
            key={item.plotId}
            imageUrl={`/api/placeholder/400/240?id=${item.plotId}`}
            plotId={item.plotId}
            state={item.state}
            district={item.district}
            colony={item.colony}
            size={item.size}
            status={item.status}
            type={item.type}
            price={item.price}
            bookedBy={item.bookedBy}
            owner={item.owner}
            address={item.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Example;
