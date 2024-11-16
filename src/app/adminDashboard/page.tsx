"use client";

import React, { useEffect, useState } from "react";
import Table from "./table";
import { createClient } from "@/utils/supabase/client";

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

  if (loading) {
    return <h1>Loading...</h1>; // Display loading state until data is fetched
  }

  return (
    <>
      {yes ? (
        <div>
          <h1 className="text-center py-5 bg-slate-500">Admin DashBoard</h1>
          <Table data={data} />
        </div>
      ) : (
        <h1>Please log in first</h1>
      )}
    </>
  );
};

export default Page;
