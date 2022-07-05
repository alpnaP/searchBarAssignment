import React from 'react'

function dataTable(props) {
    return (
        <div className="overflow-auto">
            <table className="table table-info">
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
                {props.searchResult.map((item) =>
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
                            <td>{item.site_admin}</td>
                            <td>{item.starred_url}</td>
                            <td>{item.subscriptions_url}</td>
                            <td>{item.url}</td>

                        </tr>

                    </tbody>
                )}
            </table>
        </div>
    )
}

export default dataTable