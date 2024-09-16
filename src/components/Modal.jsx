import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/slices/modalSlice";
const Modal = ({ title, content }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-black  bg-opacity-50 fixed inset-0 w-full h-screen flex items-center justify-center">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <GrClose onClick={() => dispatch(modalFunc())} size={24} />
        </div>
        {content}
      </div>
    </div>
  );
};
export default Modal;
