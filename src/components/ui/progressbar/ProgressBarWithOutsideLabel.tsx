import React from "react";

export default function ProgressBarWithOutsideLabel() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="sm:max-w-[281px] relative w-full h-2 rounded bg-gray-200 dark:bg-gray-800">
          <div className="absolute left-0 w-[40%] h-full bg-brand-500 rounded"></div>
        </div>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
          40%
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="sm:max-w-[281px] relative w-full h-2 rounded bg-gray-200 dark:bg-gray-800">
          <div className="absolute left-0 w-[70%] h-full bg-brand-500 rounded"></div>
        </div>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
          70%
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="sm:max-w-[281px] relative w-full h-2 rounded bg-gray-200 dark:bg-gray-800">
          <div className="absolute left-0 w-[30%] h-full bg-brand-500 rounded"></div>
        </div>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
          30%
        </span>
      </div>
    </div>
  );
}
