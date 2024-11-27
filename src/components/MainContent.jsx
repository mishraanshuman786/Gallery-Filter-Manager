"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productSlice";

const MainContent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isGridView, setIsGridView] = useState(true); // State to toggle views
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  const hasProducts = products?.itemDTOS;

  // Fetch products on initial render
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Set initial filtered data
  useEffect(() => {
    if (hasProducts) {
      setFilteredData(hasProducts);
    }
  }, [hasProducts]);

  // Apply filters whenever `filters` or `hasProducts` change
  useEffect(() => {
    if (hasProducts) {
      let data = hasProducts;

      // Filtering logic
      const activeThemes = Object.keys(filters.themes).filter(
        (key) => filters.themes[key]
      );
      if (activeThemes.length > 0) {
        data = data.filter((product) =>
          activeThemes.includes(product.histograms.Theme)
        );
      }

      const activeSleeveTypes = Object.keys(filters.sleeveTypes).filter(
        (key) => filters.sleeveTypes[key]
      );
      if (activeSleeveTypes.length > 0) {
        data = data.filter((product) =>
          activeSleeveTypes.includes(product.histograms["Sleeve Type"])
        );
      }

      const activeMaterialCompositions = Object.keys(
        filters.materialCompositions
      ).filter((key) => filters.materialCompositions[key]);
      if (activeMaterialCompositions.length > 0) {
        data = data.filter((product) =>
          activeMaterialCompositions.includes(
            product.histograms[
              "material composition/silhouette/material/Fabric Type/Accents"
            ]
          )
        );
      }

      const activeEmbellishments = Object.keys(filters.embellishments).filter(
        (key) => filters.embellishments[key]
      );
      if (activeEmbellishments.length > 0) {
        data = data.filter((product) =>
          activeEmbellishments.includes(product.histograms.Embellishments)
        );
      }

      const activeNecklines = Object.keys(filters.neckline).filter(
        (key) => filters.neckline[key]
      );
      if (activeNecklines.length > 0) {
        data = data.filter((product) =>
          activeNecklines.includes(product.histograms.Neckline)
        );
      }

      const activeBackDetails = Object.keys(filters.backDetails).filter(
        (key) => filters.backDetails[key]
      );
      if (activeBackDetails.length > 0) {
        data = data.filter((product) =>
          activeBackDetails.includes(product.histograms["back details"])
        );
      }

      setFilteredData(data);
    }
  }, [filters, hasProducts]);

  return (
    <div className="flex-1 p-6">
      {" "}
      {/* Added `h-screen` and `overflow-y-scroll` */}
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading the products.</p>}
      {status === "succeeded" && (
        <div>
          {/* Toggle Buttons */}
          <div className="flex justify-end mb-4">
            <button
              className={`px-4 py-2 border rounded-l ${
                isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsGridView(true)}
            >
              Grid View
            </button>
            <button
              className={`px-4 py-2 border rounded-r ${
                !isGridView ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setIsGridView(false)}
            >
              List View
            </button>
          </div>

          {/* Product Display */}
          <div
            className={`${
              isGridView
                ? "grid  h-screen overflow-y-scroll grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "flex flex-col gap-4 h-screen overflow-y-scroll"
            }`}
          >
            {filteredData &&
              filteredData.map((product, index) => (
                <div
                  key={product.id || index} // Use unique `id` if available
                  className={`border rounded-lg shadow-lg p-4 bg-white ${
                    isGridView ? "flex flex-col items-center" : "flex gap-4"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`${
                      isGridView
                        ? "w-full h-48 object-cover mb-4 rounded-md"
                        : "w-32 h-32 object-cover rounded-md"
                    }`}
                  />
                  <div
                    className={`${isGridView ? "text-center" : "flex-grow"}`}
                  >
                    <h2 className="text-lg font-semibold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-xl font-bold text-green-600">
                      {product.currencyId} {product.price}
                    </p>
                    <a
                      href={product.affiliationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-blue-500 hover:underline"
                    >
                      Buy Now
                    </a>
                    <div className="mt-4 w-full text-sm">
                      <p>
                        <strong>Theme:</strong> {product.histograms.Theme}
                      </p>
                      <p>
                        <strong>Back Details:</strong>{" "}
                        {product.histograms["back details"]}
                      </p>
                      <p>
                        <strong>Sleeve Type:</strong>{" "}
                        {product.histograms["Sleeve Type"]}
                      </p>
                      <p>
                        <strong>Material Composition:</strong>{" "}
                        {
                          product.histograms[
                            "material composition/silhouette/material/Fabric Type/Accents"
                          ]
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
