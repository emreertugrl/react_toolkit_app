import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { createDataFunc, updateDataFunc } from "../redux/slices/dataSlice";
import { modalFunc } from "../redux/slices/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const { modal } = useSelector((store) => store.modal);
  const { data, keyword } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
    value: "",
  });
  useEffect(() => {
    if (modal) {
      setProductInfo({
        name: "",
        price: "",
        url: "",
        value: "",
      });
    }
  }, [modal]);
  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  let loc = parseInt(location?.search.split("=")[1]);

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id === loc));
    }
  }, [loc]);
  const buttonFunc = () => {
    // Action Creator
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };
  const contentModal = (
    <>
      <Input
        type={"text"}
        value={productInfo.name}
        placeholder="Ürün Ekle"
        name="name"
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        value={productInfo.price}
        placeholder="Fiyat Ekle"
        name="price"
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder="Resim Ekle"
        name="url"
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );
  const filteredItems = data.filter((dt) =>
    dt.name.toLowerCase().includes(keyword)
  );
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filteredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>

      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "Ürün Güncelle" : "Ürün Oluştur"}
        />
      )}
    </div>
  );
};
export default Products;
