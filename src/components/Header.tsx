import React, { useContext } from "react";
import { Context } from "../context/context";
import Bookmark from "../assets/images/bookmark.svg";
import { useSelector } from "react-redux";
import { RootState } from "../reduxToolkit/store";

interface HeaderType {
  title: string;
  extraStyle: string;
}

const Header: React.FC<HeaderType> = ({ title, extraStyle }) => {
  const { countries, setCountries, refresh, setRefresh } = useContext(Context);
  const savedCount = useSelector((state: RootState) => state.saved.savedCountries.length);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    const data = countries.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setCountries(data);
    if (!value) {
      setRefresh(!refresh);
    }
  }

  return (
    <header className={`${extraStyle} p-5 flex items-center justify-between`}>
      <h1 className="font-bold text-[25px]">{title}</h1>
      <div className="flex items-center gap-5">
        <input
          onChange={handleChange}
          className="p-2 rounded-md outline-none w-[250px]"
          placeholder="Searching..."
        />
        <button
          id="bookmark-count-btn"
          className="icon-btn w-[50px] h-[50px] flex items-center text-[16px] rounded-[50%] border-[1px] border-black"
        >
          <span className="text-[19px]">&nbsp;{savedCount}</span>&nbsp;
          <img className="icon-img" src={Bookmark} alt="Bookmark" width="20" height="20" />
        </button>
      </div>
    </header>
  );
};

export default Header;
