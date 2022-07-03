import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./MyComponents/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchLogin, setSearchLogin] = useState("");
 const [ searchResult,setSearchResult] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.github.com/users"
      );
      setPosts(response.data);
     setSearchResult(response.data)
      setLoading(false);
    };
    loadPosts();
  }, []);

  function searchUser()  {
    var items = posts.filter((value) => {
      if (searchLogin === "") {
        return value ;
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
      <br></br>
   
  <div className="input-group mb-3">
  <input  type="text" class="form-control"   placeholder="Please Enter User Name" onChange={(e) => setSearchLogin(e.target.value)} aria-describedby="button-addon2"/>
  <button class="btn btn-success" type="button" id="button-addon2"  onClick={searchUser}>Search</button>
</div>
      
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
     <div className= "overflow-auto">
      <table  className="table table-info">
  <thead>
  <tr>
      <th scope="col">ID</th>
      <th scope="col">Login</th>
      <th scope="col">Type</th>
      <th scope="col">Avatar_Url</th>
      <th scope="col">Events_Url</th>
      <th scope="col">Followers_Url</th>
      <th scope="col">Following_Url</th>
      <th scope="col">Gists_Url</th>
      <th scope="col">Gravatar_id</th>
      <th scope="col">Html_Url</th>
      <th scope="col">Node_id</th>
      <th scope="col">Organizations_Url</th>
      <th scope="col">Received_Events_Url</th>
      <th scope="col">Repos_Url</th>
      <th scope="col">Site_Admin</th>
      <th scope="col">Starred_Url</th>
      <th scope="col">Subscriptions_Url</th>
      <th scope="col">Url</th>
    </tr>
  </thead>
 { searchResult.map((item) =>
  <tbody>
           

            <tr>
            <td>{item.id}</td>
              <td>{item.login}</td>
              <td>{item.type}</td>
              <td>{item.avatar_url}</td>
              <td>{item.events_url}</td>
              <td>{item.followers_url}</td>
              <td>{item.following_url}</td>
              <td>{item.gists_url}</td>
              <td>{item.gravatar_id}</td>
              <td>{item.node_id}</td>
              <td>{item.html_url}</td>
              <td>{item.organizations_url}</td>
              <td>{item.received_events_url}</td>
              <td>{item.repos_url}</td>
              <td>{item.site_admin }</td>
              <td>{item.starred_url}</td>
              <td>{item.subscriptions_url}</td>
              <td>{item.url}</td>
             
            </tr>

  </tbody>
)}
</table>
</div>

)}

    </div>
  );
}

export default App;