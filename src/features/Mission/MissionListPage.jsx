// MissionList.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getMissions } from "../../service/spacexService";

function MissionList() {
  const [missions, setMissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMissions()
      .then((response) => {
        setMissions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SpaceX info:", error);
      });
  }, []);

  const handleRowClick = (mission) => {
    navigate(`/missions/${mission.mission_id}`, { state: { mission } });
  };

  return (
    <div className="mission-list">
      <h2>Mission List</h2>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Manufacturer</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr
              key={mission.mission_id}
              onClick={() => handleRowClick(mission)}
            >
              <td>{mission.mission_name}</td>
              <td>{mission.manufacturers.join(", ")}</td>
              <td>
                {mission.website && (
                  <a
                    href={mission.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionList;
