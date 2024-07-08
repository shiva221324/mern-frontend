import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchallbooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");
        setBooks(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchallbooks();
  });
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/books/" + id);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Book Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.descr}</p>
            <span>{book.price}</span>
            <br></br>
            <br></br>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <button>
        <Link to="/add">Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
