import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/slices/dataSlice";
import { modalFunc } from "../redux/slices/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md my-9 border ">
      <img
        src={dt?.url}
        className="w-full h-full rounded-md   object-contain"
      />
      <div className="px-2 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price} €</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-2 right-2"
      >
        <BsThreeDots
          color="white"
          className="bg-black rounded-3xl bg-opacity-50"
          size={24}
        />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 p-2 text-sm right-2">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
