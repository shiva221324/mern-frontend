import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [book, setBook] = useState({
    title: "",
    descr: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    setBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    //  console.log(book);
  };
  const handleclick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/books", book);
      console.log(book);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="form">
        <h1>Add new Book</h1>
        <input
          onChange={handlechange}
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          onChange={handlechange}
          type="text"
          placeholder="descr"
          name="descr"
        />
        <input
          onChange={handlechange}
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          onChange={handlechange}
          type="text"
          placeholder="cover"
          name="cover"
        />
        <button onClick={handleclick}>Add</button>
      </div>
    </div>
  );
};

export default Add;
