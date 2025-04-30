import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-2xl p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Best cooks and best delivery guys all at your service. Hot tasty food
            </p>
            <div className="flex gap-4 bg-white-100>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none"
              />
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 flex items-center gap-2">
                Discover <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 