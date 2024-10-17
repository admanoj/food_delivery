"use client"; // This line marks the component as a Client Component

import React, { useState } from "react";

const OrderSummary = () => {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg w-[50%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-2xl font-bold">Order Summary</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "Today" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Today")}
          >
            Today
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "Weekly" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Weekly")}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "Monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("Monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
