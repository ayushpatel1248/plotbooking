"use client"
import React, { useEffect, useState } from "react";
import Table from "./table";
import { createClient } from "@/utils/supabase/client";

const Page = () => {
  const supabase = createClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: tableData, error } = await supabase.from("allplot").select("*");
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          console.log("Fetched data:", tableData);
          setData(tableData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchData();
  }, [supabase]);

  return (
    <div>
      <h1 className="text-center py-5 bg-slate-500">Admin DashBoard</h1>
      <Table data={data} />
    </div>
  );
};

export default Page;
