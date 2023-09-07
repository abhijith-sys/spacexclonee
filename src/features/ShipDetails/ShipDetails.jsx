// ShipDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ShipDetail.module.css';

function ShipDetail() {
  const location = useLocation();
  const ship = location.state.ship;

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.shipDetail}>
      <h2>{ship?.ship_name} Details</h2>
      <div className={styles.shipInfo}>
        <p><strong>Ship ID:</strong> {ship?.ship_id}</p>
        <p><strong>Ship Type:</strong> {ship?.ship_type}</p>
        <p><strong>Roles:</strong> {ship?.roles.join(', ')}</p>
        <p><strong>Active:</strong> {ship?.active ? 'Yes' : 'No'}</p>
        <p><strong>IMO Number:</strong> {ship?.imo}</p>
        <p><strong>MMSI:</strong> {ship?.mmsi}</p>
        <p><strong>ABS:</strong> {ship?.abs}</p>
        <p><strong>Class:</strong> {ship?.class}</p>
        <p><strong>Weight (lbs):</strong> {ship?.weight_lbs}</p>
        <p><strong>Weight (kg):</strong> {ship?.weight_kg}</p>
        <p><strong>Year Built:</strong> {ship?.year_built}</p>
        <p><strong>Home Port:</strong> {ship?.home_port}</p>
        <p><strong>Status:</strong> {ship?.status}</p>
        <p><strong>Speed (kn):</strong> {ship?.speed_kn}</p>
        <p><strong>Course (degrees):</strong> {ship?.course_deg}</p>
        {/* Add more ship details here */}
      </div>
      <div className={styles.shipMissions}>
        <h3>Missions:</h3>
        <ul>
          {ship?.missions.map((mission, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {mission.name}</p>
              <p><strong>Flight:</strong> {mission.flight}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.shipLinks}>
        <h3>Links:</h3>
        <ul>
          <li>
            <a href={ship.url} target="_blank" rel="noopener noreferrer">
              View on MarineTraffic
            </a>
          </li>
        </ul>
      </div>
      {ship?.image && (
        <div className={styles.shipImage}>
          <img src={ship.image} alt="Ship" />
        </div>
      )}
    </div>
  );
}

export default ShipDetail;
