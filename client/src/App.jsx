import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          SV CONSTRUCTION
        </h1>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          🚧 Under Maintenance
        </h1>

        <p className="text-gray-600 mb-6">
          Our website is currently under scheduled maintenance.<br />
          We’ll be back shortly. Thank you for your patience! 💛
        </p>

        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500 mx-auto"></div>

        <p className="text-sm text-gray-500 mt-6">
          By Developer Dinkar Diwakar
        </p>
      </div>
    </div>
  );
};

export default App;
