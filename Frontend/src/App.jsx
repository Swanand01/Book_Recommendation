import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookInfo from "./Views/BookInfo";
import Homepage from "./Views/Home"
import SearchBooks from "./Views/SearchBooks";


export default function App() {
  useEffect(() => {
    document.title = "Book Recommendation";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/book/:bookName" element={<BookInfo />} />
        <Route exact path="/search/:titleQuery" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}
