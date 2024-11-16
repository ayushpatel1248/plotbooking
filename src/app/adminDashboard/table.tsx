"use client"
import React from "react";
import { createClient } from "@/utils/supabase/client";

const Table = ({ data }) => {
  const supabase = createClient();

  const handleRemoveBooking = async (plotId) => {
    try {
      const { data, error } = await supabase
        .from("allplot")
        .update({
          bookedBy: "",    // Clear the bookedBy field
          status: "available", // Change the status to "booked"
        })
        .eq("plotId", plotId);

      if (error) {
        console.error("Error updating booking:", error);
      } else {
        console.log("Booking removed for plotId:", plotId);
        // Reload the page to reflect the update
        window.location.reload();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">plotId</th>
            <th scope="col" className="px-6 py-3">areaNo</th>
            <th scope="col" className="px-6 py-3">state</th>
            <th scope="col" className="px-6 py-3">district</th>
            <th scope="col" className="px-6 py-3">colony</th>
            <th scope="col" className="px-6 py-3">dimension</th>
            <th scope="col" className="px-6 py-3">direction</th>
            <th scope="col" className="px-6 py-3">status</th>
            <th scope="col" className="px-6 py-3">type</th>
            <th scope="col" className="px-6 py-3">price</th>
            <th scope="col" className="px-6 py-3">bookedBy</th>
            <th scope="col" className="px-6 py-3">owner</th>
            <th scope="col" className="px-6 py-3">address</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el) => (
            <tr key={el.plotId}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.plotId}</td>
              <td className="px-6 py-4">{el.areaNo}</td>
              <td className="px-6 py-4">{el.state}</td>
              <td className="px-6 py-4">{el.district}</td>
              <td className="px-6 py-4">{el.colony}</td>
              <td className="px-6 py-4">{el.dimension}</td>
              <td className="px-6 py-4">{el.direction}</td>
              <td className="px-6 py-4">{el.status}</td>
              <td className="px-6 py-4">{el.type}</td>
              <td className="px-6 py-4">{el.price}</td>
              <td className="px-6 py-4">{el.bookedBy}</td>
              <td className="px-6 py-4">{el.owner}</td>
              <td className="px-6 py-4">{el.address}</td>
              <td className="px-6 py-4">
                <button
                  className="bg-slate-200 p-2 hover:bg-slate-500"
                  onClick={() => handleRemoveBooking(el.plotId)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
