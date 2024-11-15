"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from 'next/link';
const states = [
    { name: "Maharashtra", districts: ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad", "Kolhapur", "Thane", "Satara", "Solapur", "Sangli"] },
    { name: "Uttar Pradesh", districts: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Ghaziabad", "Meerut", "Noida", "Bareilly", "Aligarh", "Prayagraj"] },
    { name: "Gujarat", districts: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Navsari"] },
    { name: "Rajasthan", districts: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali"] },
    { name: "Tamil Nadu", districts: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Tiruppur"] },
    { name: "Karnataka", districts: ["Bengaluru", "Mysuru", "Mangaluru", "Hubli-Dharwad", "Belgaum", "Gulbarga", "Davangere", "Shivamogga", "Udupi", "Tumakuru"] },
    { name: "West Bengal", districts: ["Kolkata", "Howrah", "Darjeeling", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Nadia", "Murshidabad"] },
    { name: "Madhya Pradesh", districts: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Satna", "Ratlam", "Rewa", "Dewas"] },
    { name: "Bihar", districts: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"] },
    { name: "Punjab", districts: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Pathankot", "Moga", "Ferozepur"] },
    { name: "Haryana", districts: ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Hisar", "Karnal", "Sonipat", "Rohtak", "Yamunanagar", "Panchkula"] },
    { name: "Kerala", districts: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur", "Kollam", "Alappuzha", "Palakkad", "Kottayam", "Malappuram"] },
    { name: "Odisha", districts: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri", "Balasore", "Berhampur", "Kendujhar", "Jharsuguda", "Angul"] },
    { name: "Assam", districts: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon", "Tinsukia", "Goalpara", "Sivasagar", "Dhemaji"] },
    { name: "Jharkhand", districts: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Palamu", "Dumka"] },
    { name: "Chhattisgarh", districts: ["Raipur", "Bilaspur", "Durg", "Korba", "Rajnandgaon", "Jagdalpur", "Ambikapur", "Raigarh", "Mahasamund", "Koriya"] },
    { name: "Uttarakhand", districts: ["Dehradun", "Haridwar", "Nainital", "Rishikesh", "Almora", "Pithoragarh", "Haldwani", "Rudrapur", "Kashipur", "Mussoorie"] },
    { name: "Himachal Pradesh", districts: ["Shimla", "Manali", "Dharamshala", "Mandi", "Solan", "Kullu", "Una", "Bilaspur", "Chamba", "Kangra"] },
    { name: "Telangana", districts: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Medak", "Siddipet"] },
    { name: "Andhra Pradesh", districts: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Rajahmundry", "Kadapa", "Anantapur", "Eluru"] }
];


const colonies = [
    "Shivaji Nagar", "Gokul Colony", "Raja Park", "Krishna Nagar", "Green Valley",
    "Sunrise Enclave", "Pearl Residency", "Elite Garden", "Silver Oak", "Maple Heights","bajrangbali nagar"
];

const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI_y7p2XbMoRy4hN-BjiiKyYu85Zc0Xz-xoLIE85iHFSqBBBbbQOKopou4ZzJwMfkmIc&usqp=CAU",
    "https://housing-images.n7net.in/4f2250e8/789bc2e4fcb9659bd0a98a8064f0709b/v0/fs/wave_city_residential_plots-wave_city-ghaziabad-wave_group.jpeg",
    "https://www.shutterstock.com/image-photo/spokane-washington-usa-november-22-600nw-2138814843.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDqWfnKWTlQumGPwaudqx1MXx2sUXFbEFAw&s",
    "https://imagecdn.99acres.com/media1/25727/18/514558713M-1724819823729.webp",
    "https://st4.depositphotos.com/36995378/40119/i/450/depositphotos_401194662-stock-photo-indian-field-background-vadodara-gujarat.jpg",
    "https://media.istockphoto.com/id/1481643878/photo/american-style-country-house-on-a-striking-summer-day-with-blue-sky-beautiful-residential.jpg?s=612x612&w=0&k=20&c=xDBSiWJewpbwg1pFFTITNjEAKBiARrIf9sav9gCCnpg=",
    "https://www.longtermlettings.com/cache/hms-1/hms_113976.jpg",
    "https://is1-2.housingcdn.com/01c16c28/90ec0fc8018f87d0b7e96b9ce4529910/v0/fs/4_bhk_villa-for-rent-nanakram_guda-Hyderabad-others.jpg",
    "https://is1-2.housingcdn.com/01c16c28/90ec0fc8018f87d0b7e96b9ce4529910/v0/fs/4_bhk_villa-for-rent-nanakram_guda-Hyderabad-others.jpg"
]
// Initialize plots array,

let data = [];

// Function to generate plot data
function generatePlots() {
    let plotId = 1;
    states.forEach(state => {
        state.districts.forEach(district => {
            colonies.forEach(colony => {
                // Ensure at least 10 plots are generated per colony
                const minPlots = 10;
                const numPlots = Math.max(minPlots, Math.floor(Math.random() * 10 + 5)); // At least 10 plots, random between 10 and 15

                for (let i = 0; i < numPlots; i++) {
                    const plot = {
                        plotId: plotId++,
                        state: state.name,
                        district: district,
                        colony: colony,
                        size: `${Math.floor(Math.random() * 2000 + 500)} sq ft`, // Random size between 500 and 2500 sq ft
                        status: Math.random() > 0.5 ? "available" : "booked",
                        type: Math.random() > 0.5 ? "sell" : "rent",
                        price: Math.random() > 0.5 ? Math.floor(Math.random() * 500000 + 100000) : Math.floor(Math.random() * 20000 + 5000), // Random price
                        bookedBy: Math.random() > 0.7 ? `${Math.random().toString(36).substring(2, 7)}@example.com` : null, // Random email or null
                        owner: `Owner ${plotId}`, // Example owner name
                        address: `${Math.floor(Math.random() * 1000 + 1)}, ${colony}, ${district}, ${state.name}`
                    };
                    data.push(plot);
                }
            });
        });
    });
}

generatePlots();
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
        <div className="bg-slate-800 text-white dark:text-black border border-gray-200 rounded-lg shadow dark:bg-slate-100 dark:border-gray-700 overflow-hidden">
            <img
                src={images[plotId%10]}
                alt="Property"
                className="w-full h-48 object-cover"
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-black">
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
                    <div className={`${status=="available"?"":"pointer-events-none"}`}>
                        <Link
                        href="/bookPlot"
                        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center
                          rounded-lg   
                          ${status=="available"?"bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-blue-700":"bg-slate-700  text-slate-100 "}`}
                    >
                        {status=="available"?"Book Plot":"Already Booked"}
                        {status=="available"?<svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>:""}
                    </Link></div>
                </div>
            </div>
        </div>
    );
};
const page = () => {
    const { setTheme } = useTheme();
    // let [user , setUser] = useState("")
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [colonies, setColonies] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedColony, setSelectedColony] = useState('')

    const router = useRouter();
    const signout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.log("Error during logout:", error.message);
            } else {
                console.log("Logged out successfully");
                router.push("/login")
            }
        } catch (err) {
            console.log("Unexpected error:", err);
        }
    }

    useEffect(() => {
        setStates((prev) => {
            const uniqueStates = new Set(data.map((el) => el.state));
            return Array.from(uniqueStates);
        });
    }, []);

    // useEffect(() => {
    //     const session = supabase.auth.session();
    //     setUser(session?.user ?? null);

    //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
    //       setUser(session?.user ?? null);
    //     });

    //     return () => {
    //       authListener?.unsubscribe();
    //     };
    //   }, []);

    // Handle state selection
    const handleStateChange = (event) => {
        const selected = event.target.value;
        setSelectedState(selected);
        setSelectedDistrict('');
        setColonies([]);
        setSelectedColony('')
        if (selected) {
            setDistricts(
                [...new Set(data.filter((el) => selected === el.state).map((el) => el.district))]
            );
        } else {
            setDistricts([]);
        }
    };

    // Handle district selection
    const handleDistrictChange = (event) => {
        const selected = event.target.value;
        setSelectedDistrict(selected);
        setColonies([]);
        setSelectedColony('')
        setColonies([])
        if (selected) {
            setColonies([...new Set(data.filter((el) => selected === el.district).map((el) => el.colony))]);
        } else {
            setColonies([]);
        }
    };

    return (
        <div className=''>
            <header className="mb-20">
                <nav className="bg-slate-400  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Plotify
                            </span>
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="dark:bg-slate-400"
                                >
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-cream dark:bg-slate-800">
                                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="flex items-center lg:order-2">
                            <a
                                href="/login"
                                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                                Log in
                            </a>
                            <button onClick={signout}>logout</button>
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
                                        href="/home"
                                        className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="allplot"
                                        className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        All Plots
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <div className='flex  justify-center items-center mx-16 mb-12'>
                <div className='mr-8'>
                    <label htmlFor="stateDropdown" className="text-center text-sm font-medium text-gray-700 ">
                        Select State:
                    </label>
                    <select
                        id="stateDropdown"
                        value={selectedState}
                        onChange={handleStateChange}
                        className="block  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mr-8'>
                    <label htmlFor="districtDropdown" className="] text-sm font-medium text-gray-700 ">
                        Select District:
                    </label>
                    <select
                        id="districtDropdown"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        disabled={!districts.length}
                        className={`block px-3 py-2 border ${districts.length ? 'border-gray-300' : 'border-gray-200'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${!districts.length ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}`}
                    >
                        <option value="">-- Select District --</option>
                        {districts.map((district) => (
                            <option key={district} value={district}>
                                {district}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mr-8'>
                    <label htmlFor="colonyDropdown" className=" text-sm font-medium text-gray-700">
                        Select Colony:
                    </label>
                    <select
                        id="colonyDropdown"
                        value={selectedColony}
                        onChange={(e) => setSelectedColony(e.target.value)}
                        disabled={!colonies.length}
                        className={`block px-3 py-2 border ${colonies.length ? 'border-gray-300' : 'border-gray-200'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${!colonies.length ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}`}
                    >
                        <option value="">-- Select Colony --</option>
                        {colonies.map((colony) => (
                            <option key={colony} value={colony}>
                                {colony}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='mx-20'>
            {selectedState&&selectedDistrict&&selectedColony?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">      
                    {data.map((el) => {
                        return el.state == selectedState && el.district == selectedDistrict && el.colony == selectedColony ? <PropertyCard
                            key={el.plotId}
                            imageUrl={`/api/placeholder/400/240?id=${el.plotId}`}
                            plotId={el.plotId}
                            state={el.state}
                            district={el.district}
                            colony={el.colony}
                            size={el.size}
                            status={el.status}
                            type={el.type}
                            price={el.price}
                            bookedBy={el.bookedBy}
                            owner={el.owner}
                            address={el.address}
                        /> : ""
                    })}
            </div>:<div className='h-[60vh] w-[70%] bg-gradient-to-r from-white to-slate-500 shadow-lg rounded-lg p-6 rounded-xl flex justify-center items-center mx-auto '><p className='font-bold text-2xl'>Select State & district & colony</p></div>
            }
                </div>
            
        </div>
    )
}

export default page