This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<!-- 
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
 -->