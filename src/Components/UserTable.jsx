import React, { useState, useEffect } from 'react'
import axios from "axios";


{/* Table Header for User...*/ }

const TableHeader = [{
    key: 'id',
    Label: "ID"
},
{
    key: 'login',
    Label: "Login"
},
{
    key: 'type',
    Label: "Type"
},

{
    key: 'avatar_url',
    Label: "Avatar Url"
},
{
    key: 'events_url',
    Label: "Events Url"
},
{
    key: 'followers_url',
    Label: "Followers Url"
},
{
    key: 'following_url',
    Label: "Following Url"
},
{
    key: 'gists_url',
    Label: "Gists Url"
},
{
    key: 'gravatar_id',
    Label: "Gravatar Id"
},
{
    key: 'html_url',
    Label: "Html Url"
},
{
    key: 'node_id',
    Label: "Node Id"
},
{
    key: 'organizations_url',
    Label: "Organizations Url"
},
{
    key: 'received_events_url',
    Label: "Received Events Url"
},
{
    key: 'repos_url',
    Label: "Repos Url"
},
{
    key: 'site_admin',
    Label: "Site Admin"
},
{
    key: 'starred_url',
    Label: "Starred Url"
},
{
    key: 'subscriptions_url',
    Label: "Subscriptions Url"
},
{
    key: 'url',
    Label: "Url"
},
]
function UserTable(props) {
    const [loading, setLoading] = useState(false);
    const [searchLogin, setSearchLogin] = useState("");
    const [posts, setPosts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    {/* API calling through axios...*/ }

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

    {/* Method for Search Box...*/ }

    function searchUser() {
        var items = posts.filter((value) => {
            if (value.login.toLowerCase().includes(searchLogin.toLowerCase())) {
                return value;
            }
        });

        setSearchResult(items);
    }
    return (
        <>
            <div className="input-group mb-3 mt-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter User Name"
                    onChange={(event) => setSearchLogin(event.target.value)}
                    aria-describedby="button-addon2"
                    onKeyDown={(event) => searchUser()}
                />
                <button
                    className="btn btn-success"
                    type="button"
                    id="button-addon2"
                    onClick={searchUser}
                >
                  Search
                </button>
            </div>
            {/* User Table for displaying data... */}
            <div className="overflow-auto">
                <table className="table table-info">
                    <thead>
                        <tr>
                            {TableHeader.map((elements, index) => {
                                return <th key={`${elements.Label}${index}`} scope="col">{elements.Label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult.map((item, index) =>
                            <tr key={`${item}${index}`}>
                                {TableHeader.map((elements) => {
                                    return <td key={elements.key}>{`${item[elements.key]}`}</td>
                                })}
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default UserTable