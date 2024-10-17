import React from "react";
import { Coffee } from "lucide-react";

const GreetingHeader = () => {
  return (
    <div className="p-6 ">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-6 h-6 text-orange-500" />
            <span className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Good morning, Manoj
            </span>
          </div>
          <p className="text-gray-500 text-base pl-8">
            Here's what's happening in your Food Court
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingHeader;
