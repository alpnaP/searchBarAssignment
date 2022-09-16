import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import UserTable from "./Components/UserTable";

function App() {
  return (
    <div className="App">
      <Header title="Assignment-Two [ User Filter Search Box]" />
      <div className="container">
        {<UserTable />}
      </div>
    </div>
  );
}

export default App;
