import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/slices/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/slices/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5 text-black">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <input
          className="h-10 rounded-lg px-4 "
          type="text"
          placeholder="Arama yapınız..."
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
        />

        <div
          onClick={() => dispatch(modalFunc())}
          className="text-white bg-indigo-800 size-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
