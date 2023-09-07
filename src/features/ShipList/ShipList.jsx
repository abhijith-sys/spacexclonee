// ShipList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getShips } from '../../service/spacexService';

function ShipList() {
  const [ships, setShips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch ship data from the API using Axios
    axios.get('https://api.spacexdata.com/v3/ships')
      .then((response) => {
        setShips(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ship data:', error);
      });


    //   getShips()
    //   .then((response) => {
    //     setShips(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching SpaceX info:", error);
    //   });
  }, []);

  const handleRowClick = (ship) => {
    navigate(`/ships/${ship.ship_id}`, { state: { ship } });
  };

  return (
    <div className="ship-list">
      <h2>Ship List</h2>
      <table>
        <thead>
          <tr>
            <th>Ship Name</th>
            <th>Ship Type</th>
            <th>Home Port</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => (
            <tr key={ship.ship_id} onClick={() => handleRowClick(ship)}>
              <td>{ship.ship_name}</td>
              <td>{ship.ship_type}</td>
              <td>{ship.home_port}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipList;
