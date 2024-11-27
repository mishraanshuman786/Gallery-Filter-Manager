"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productSlice";
import {
  setThemes,
  setSleeveTypes,
  setMaterialCompositions,
  setEmbellishments,
  setNeckline,
  setBackDetails,
} from "@/store/filterSlice.js";

const Sidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    const getData = async () => {
      if (status === "idle") {
        dispatch(fetchProducts());
      }
    };

    getData();
  }, [status, dispatch]);

  // Check if products and attributeDTOS exist before trying to map over them
  const hasBackDetails = products?.attributeDTOS?.["back details"];
  const hasSleeveType = products?.attributeDTOS?.["Sleeve Type"];
  const hasMaterialComposition =
    products?.attributeDTOS?.[
      "material composition/silhouette/material/Fabric Type/Accents"
    ];
  const hasTheme = products?.attributeDTOS?.["Theme"];
  const hasEmbellishments =
    products?.attributeDTOS?.["embellishments/color/Colour"];
  const hasNeckline = products?.attributeDTOS?.neckline;

  return (
    <div className="p-4 h-full max-h-[500px] overflow-y-auto bg-gray-100">
      {/* Filters */}
      {status === "loading" && <p>loading...</p>}
      {status === "failed" && <p>error loading the page..</p>}

      {status === "succeeded" && (
        <div>
          <h6 className="text-lg font-medium mb-2">Back Details</h6>
          {hasBackDetails &&
            hasBackDetails.map((element, index) => (
              <div key={index}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name={element}
                    onChange={(e) =>
                      dispatch(
                        setBackDetails({ [e.target.name]: e.target.checked })
                      )
                    }
                  />
                  <span>{element}</span>
                </label>
              </div>
            ))}
        </div>
      )}

      <hr />

      {/* Sleeves */}
      <div>
        <h6 className="text-lg font-medium mb-2">Sleeve Type</h6>
        {hasSleeveType &&
          hasSleeveType.map((element, index) => (
            <div key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={element}
                  onChange={(e) =>
                    dispatch(
                      setSleeveTypes({ [e.target.name]: e.target.checked })
                    )
                  }
                />
                <span>{element}</span>
              </label>
            </div>
          ))}
      </div>
      <hr />

      {/* Material Composition */}
      <div>
        <h6 className="text-lg font-medium mb-2">Material Composition</h6>
        {hasMaterialComposition &&
          hasMaterialComposition.map((element, index) => (
            <div key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={element}
                  onChange={(e) =>
                    dispatch(
                      setMaterialCompositions({
                        [e.target.name]: e.target.checked,
                      })
                    )
                  }
                />
                <span>{element}</span>
              </label>
            </div>
          ))}
      </div>
      <hr />
      <div>
        <h6 className="text-lg font-medium mb-2">Theme</h6>
        {hasTheme &&
          hasTheme.map((element, index) => (
            <div key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={element}
                  onChange={(e) =>
                    dispatch(setThemes({ [e.target.name]: e.target.checked }))
                  }
                />
                <span>{element}</span>
              </label>
            </div>
          ))}
      </div>
      <hr />
      <div>
        <h6 className="text-lg font-medium mb-2">embellishments/color</h6>
        {hasEmbellishments &&
          hasEmbellishments.map((element, index) => (
            <div key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={element}
                  onChange={(e) =>
                    dispatch(
                      setEmbellishments({ [e.target.name]: e.target.checked })
                    )
                  }
                />
                <span>{element}</span>
              </label>
            </div>
          ))}
      </div>
      <br />
      <div>
        <h6 className="text-lg font-medium mb-2">Neckline</h6>
        {hasNeckline &&
          hasNeckline.map((element, index) => (
            <div key={index}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name={element}
                  onChange={(e) =>
                    dispatch(setNeckline({ [e.target.name]: e.target.checked }))
                  }
                />
                <span>{element}</span>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
