import React from "react";

const notFound = () => {
  return (
    <div >
      <div className="min-h-screen bg-[#fffbfb] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[150px] font-black text-[#3D6B4F] leading-none">
          404
        </h1>

        <h2 className="text-xl text-black font-bold mt-2 mb-3">
          Page Not Found
        </h2>

        <p className="text-[#000000] text-sm max-w-xs leading-relaxed mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <button className="btn bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-none rounded-xl px-8">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default notFound;
