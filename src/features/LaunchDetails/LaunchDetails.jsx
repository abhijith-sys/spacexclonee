import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from "./LauchDetails.module.css"
function LaunchDetails() {
    const location = useLocation();
    const launch = location.state.launch;
  
    if (!launch) {
      return <div>Loading...</div>;
    }
  return (
    <div className={styles.launchdetail}>
      <h2>{launch?.mission_name} Details</h2>
      <div className={styles.launchinfo}>
        <p><strong>Flight Number:</strong> {launch?.flight_number}</p>
        <p><strong>Launch Date (UTC):</strong> {launch?.launch_date_utc}</p>
        <p><strong>Rocket Name:</strong> {launch?.rocket?.rocket_name}</p>
        <p><strong>Launch Site:</strong> {launch?.launch_site?.site_name_long}</p>
        <p><strong>Launch Success:</strong> {launch?.launch_success ? 'Yes' : 'No'}</p>
      </div>
      <div className={styles.launchdescription}>
        <h3>Launch Description:</h3>
        <p>{launch?.details}</p>
      </div>
      <div className={styles?.launchlinks}>
        <h3>Links:</h3>
        <ul>
          <li><a href={launch.article_link} target="_blank" rel="noopener noreferrer">Article</a></li>
          <li><a href={launch.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
          <li><a href={launch.video_link} target="_blank" rel="noopener noreferrer">Watch Video</a></li>
        </ul>
      </div>
    </div>
  )
}

export default LaunchDetails