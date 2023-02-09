import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="flex flex-col justify-center w-full bg-primary">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
