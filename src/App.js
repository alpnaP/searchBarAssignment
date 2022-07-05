import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./MyComponents/Header";
import Loader from "./MyComponents/Loader";
import DataTable from "./MyComponents/DataTable";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchLogin, setSearchLogin] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get("https://api.github.com/users");
      setPosts(response.data);
      setSearchResult(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  function searchUser() {
    var items = posts.filter((value) => {
      if (searchLogin === "") {
        return value;
      } else if (
        value.login.toLowerCase().includes(searchLogin.toLowerCase())
      ) {
        return value;
      }
    });

    setSearchResult(items);
  }

  return (
    <div className="App">
      <Header title="Assignment-Two [ User Filter Search Box]"></Header>


<div className="container">
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          class="form-control"
          placeholder="Please Enter User Name"
          onChange={(e) => setSearchLogin(e.target.value)}
          aria-describedby="button-addon2"
          onKeyDown={(e) => searchUser()}
        />
        <button
          class="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={searchUser}
        >
          Search
        </button>
      </div>

      {loading ? <Loader /> : <DataTable searchResult={[...searchResult]} />}
    </div>
    </div> 
  );
}

export default App;
