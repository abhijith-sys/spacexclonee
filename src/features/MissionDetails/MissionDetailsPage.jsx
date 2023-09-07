// MissionDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './MissionDetails.module.css';

function MissionDetails() {
  const location = useLocation();
  const mission = location.state.mission;

  if (!mission) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.launchdetail}>
      <h2>{mission?.mission_name} Details</h2>
      <div className={styles.launchinfo}>
        <p><strong>Mission ID:</strong> {mission?.mission_id}</p>
        <p><strong>Manufacturers:</strong> {mission?.manufacturers.join(', ')}</p>
        <p><strong>Website:</strong> {mission?.website && (
          <a href={mission.website} target="_blank" rel="noopener noreferrer">
            {mission.website}
          </a>
        )}</p>
      </div>
      <div className={styles.launchdescription}>
        <h3>Mission Description:</h3>
        <p>{mission?.description}</p>
      </div>
    </div>
  );
}

export default MissionDetails;
