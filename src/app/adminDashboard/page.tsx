"use client";

import React, { useEffect, useState } from "react";
import Table from "./table";
import { createClient } from "@/utils/supabase/client";

// Function to make all plots available
const makeAllPlotsAvailable = async () => {
  const supabase = createClient();

  try {
    // Update all rows in the 'allplot' table
    const { data, error } = await supabase
      .from("allplot")
      .update({
        bookedBy: "", // Clear the bookedBy field
        status: "available", // Set the status to "available"
      })
      .eq("status", "booked"); // Optionally add a condition for only "booked" plots

    if (error) {
      console.error("Error making plots available:", error);
      return { success: false, error: error.message };
    }

    console.log("All plots are now available.");
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: err.message };
  }
};

const Page = () => {
  const supabase = createClient();
  const [data, setData] = useState([]);
  const [yes, setYes] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Check for authentication on component mount
    const auth = localStorage.getItem("auth");
    setYes(auth === "wesite1ghantemenhibantihe");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: tableData, error } = await supabase
          .from("allplot")
          .select("*");

        if (error) {
          console.error("Error fetching data:", error);
        } else {
          console.log("Fetched data:", tableData);
          // Sort data by plotId (ascending)
          const sortedData = tableData.sort((a, b) => a.plotId - b.plotId);
          setData(sortedData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData();
  }, []); // Remove supabase from dependencies

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remove auth data from localStorage
    window.location.reload(); // Reload the page
  };

  // Function to reset all plots
  const resetPlots = async () => {
    const result = await makeAllPlotsAvailable();
    if (result.success) {
      alert("All plots are now available.");
      // Optionally, re-fetch the data here to reflect the updates
      const { data: tableData, error } = await supabase
        .from("allplot")
        .select("*");
      if (error) {
        console.error("Error fetching data after reset:", error);
      } else {
        const sortedData = tableData.sort((a, b) => a.plotId - b.plotId);
        setData(sortedData);
      }
    } else {
      alert("Error: " + result.error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>; // Display loading state until data is fetched
  }

  return (
    <>
      {yes ? (
        <div>
          <h1 className="text-center py-5 bg-slate-500">Admin DashBoard</h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
          <button
            onClick={resetPlots}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4"
          >
            Reset All Plots
          </button>
          <Table data={data} />
        </div>
      ) : (
        <h1>Please log in first</h1>
      )}
    </>
  );
};

export default Page;
