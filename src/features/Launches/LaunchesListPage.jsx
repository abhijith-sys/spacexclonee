// LaunchTable.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { getlaunches } from "../../service/spacexService";
function LaunchesListPage() {
  const [launches, setLaunches] = useState([]);
  const navigate = useNavigate(); // Use useNavigate to navigate between pages
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Fetch SpaceX launch data using Axios


    getlaunches()
    .then((response) => {
      setLaunches(response.data);
    })
    .catch((error) => {
      console.error("Error fetching SpaceX info:", error);
    });
    // axios
    //   .get(`${process.env.REACT_APP_SPACEX_API_BASEURL}+`)
    //   .then((response) => {
    //     setLaunches(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching launch data:", error);
    //   });
  }, []);

  const handleSearchClick = () => {
    // Call the fetchFilteredData function with the current search term
   
  };


  // Function to handle row click and redirect to the detailed page
  const handleRowClick = (launch) => {
    navigate(`/launches/${launch?.flight_number}`, { state: { launch } }); // Use navigate to redirect with data
  };
  return (
    <div className="launch-table">
      <h2>SpaceX Launches</h2>
      <div className="searchNav">
        <input
          type="text"
          placeholder="Search by Mission Name or Rocket Name"
          value={searchTerm}
          className="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          onClick={handleSearchClick}
          className="searchbtn"
        >
          <h4>search</h4>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Launch Date</th>
            <th>Rocket Name</th>
            <th>Launch Site</th>
            <th>Launch Success</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch) => (
            <tr
              key={launch.flight_number}
              onClick={() => handleRowClick(launch)}
            >
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date_utc}</td>
              <td>{launch.rocket.rocket_name}</td>
              <td>{launch.launch_site.site_name_long}</td>
              <td>{launch.launch_success ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaunchesListPage;
