import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSave } from "../reduxToolkit/redtool/savedSlice";
import { RootState } from "../reduxToolkit/store";
import { CountryType } from "./CountryLIst";

const CountryItem: React.FC<{ item: CountryType }> = ({ item }) => {
  const dispatch = useDispatch();
  const isSaved = useSelector((state: RootState) =>
    state.saved.savedCountries.some((country) => country.name === item.name)
  );

  const handleBookmark = () => {
    dispatch(toggleSave(item));
  };

  return (
        <div
      className="w-[300px] p-3 rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
      style={{
        border: "1px solid #c1c1c1",
        backgroundColor: "#f4f7fa",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <img
        className="h-[200px] rounded-t-lg object-cover"
        src={item.img}
        alt="Flag"
        style={{ width: "100%", height: "200px" }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          <strong>Country Name:</strong> {item.name}
        </h2>
        <h3 className="text-lg font-medium text-gray-700 mb-1">
          <strong>Capital:</strong> {item.capital}
        </h3>
        <p className="text-lg text-gray-600 mb-3">
          <strong>Population:</strong> {item.population.toLocaleString()}
        </p>
      </div>
      <div className="flex items-center gap-5 p-3 border-t border-gray-200">
        <i
          className={`fa-regular fa-bookmark scale-[1.5] cursor-pointer transition-colors duration-300 ${
            isSaved ? "text-green-600" : "text-gray-400"
          }`}
          onClick={handleBookmark}
        ></i>
        <i
          className="fa-regular fa-heart scale-[1.5] cursor-pointer text-gray-400"
        ></i>
      </div>
    </div>
  );
};

export default CountryItem;
