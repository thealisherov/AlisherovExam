import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkContext } from "../Contex/DarkProvider";

const About = () => {
  const navigate = useNavigate();
  const { isDark } = useContext(DarkContext);

  const cardStyle = `
    rounded-lg p-6 mb-8 transition-colors 
    ${isDark ? "bg-gray-800 border-gray-600 border-gray-700" : "bg-white border border-gray-200"}
  `;

  return (
    <div
      className={`min-h-screen px-6 py-10 transition-colors ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Container */}
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className={`cursor-pointer mb-6 px-4 py-2 rounded-md transition ${
            isDark
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-300 text-gray-900 hover:bg-gray-400"
          }`}
        >
          ← Back to Home
        </button>

        {/* Title */}
        <h1
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          About ShopHub
        </h1>

        {/* Mission Section */}
        <section className={cardStyle}>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="leading-7 opacity-90">
            ShopHub is built to demonstrate a comprehensive e-commerce platform
            that integrates multiple APIs and data sources. Our mission is to
            provide a seamless shopping experience with powerful product
            management, real-time search, and intuitive cart management.
          </p>
        </section>

        {/* Features Section */}
        <section className={cardStyle}>
          <h2 className="text-xl font-semibold mb-3">Features</h2>
          <ul className="space-y-2 list-none">
            {[
              "Multi-source product integration (FakeStore, DummyJSON)",
              "Real-time product search and filtering",
              "Dynamic category organization",
              "Shopping cart with quantity management",
              "Product CRUD operations",
              "Recently deleted items tracking",
              "Dark and light theme support",
              "User directory integration",
              "Comprehensive dashboard",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-500">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Data Sources */}
        <section className={cardStyle}>
          <h2 className="text-xl font-semibold mb-2">Data Sources</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>FakeStore API - Electronics and clothing products</li>
            <li>DummyJSON - Diverse product categories</li>
            <li>JSONPlaceholder - User data and information</li>
          </ul>
        </section>

        {/* Technology */}
        <section className={cardStyle}>
          <h2 className="text-xl font-semibold mb-2">Technology</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Next.js - React framework for production</li>
            <li>TypeScript - Type-safe JavaScript</li>
            <li>Tailwind CSS - Utility-first CSS framework</li>
            <li>Local Storage - Client-side data persistence</li>
          </ul>
        </section>

        {/* Get Started */}
        <section className={cardStyle}>
          <h2 className="text-xl font-semibold mb-2">Get Started</h2>
          <p className="mb-4">Ready to explore our marketplace? Start now!</p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/all")}
              className={`px-5 py-2 rounded-md font-medium transition ${
                isDark
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              View Products
            </button>

            <button
              onClick={() => navigate("/categories")}
              className={`px-5 py-2 rounded-md font-medium transition ${
                isDark
                  ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              Browse Categories
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
