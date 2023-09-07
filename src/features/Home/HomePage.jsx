import React, { useEffect, useState } from "react";
import styles from "./HomeStyle.module.css";
import { getInfo } from "../../service/spacexService";
import {  Link} from 'react-router-dom';
function HomePage() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getInfo()
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching SpaceX info:", error);
      });
  }, []);
  return (
   
    <div className={styles.homebody}>
       <header>
          <nav className={styles.navbar}>
          <h1>SpaceX</h1>
                <Link  className={styles.navbarText} to="/launcheList">Launches</Link>
            
                <Link  className={styles.navbarText} to="/MissionList">Missions</Link>
            
                <Link  className={styles.navbarText} to="/ShipList">Ships</Link>
              
           
          </nav>
        </header>
     
      <section className={styles.companyinfo}>
        <h2>About SpaceX</h2>
        <p>{data?.summary}</p>
        <div className={styles.keyfacts}>
          <h3>Key Facts</h3>
          <ul>
            <li>Founded: {data?.founded}</li>
            <li>Employees: {data?.employees}</li>
            <li>Vehicles: {data?.vehicles}</li>
            <li>Launch Sites: {data?.launch_sites}</li>
            <li>Test Sites: {data?.test_sites}</li>
            <li>CEO: {data?.ceo}</li>
            <li>CTO: {data?.cto}</li>
            <li>COO: {data?.coo}</li>
            <li>CTO Propulsion: {data?.cto_propulsion}</li>
            <li>Valuation: ${data?.valuation?.toLocaleString()}</li>
          </ul>
        </div>
        <div className={styles.headquarters}>
          <h3>Headquarters</h3>
          <p>
            {data?.headquarters?.address}, {data?.headquarters?.city},{" "}
            {data?.headquarters?.state}
          </p>
        </div>
      </section>
      <section className={styles.links}>
        <h2>Links</h2>
        <ul>
          <li>
            <a
              href={data?.links?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website
            </a>
          </li>
          <li>
            <a
              href={data?.links?.flickr}
              target="_blank"
              rel="noopener noreferrer"
            >
              Flickr
            </a>
          </li>
          <li>
            <a
              href={data?.links?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={data?.links?.elon_twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Elon Musk's Twitter
            </a>
          </li>
        </ul>
      </section>
    </div>

  );
}

export default HomePage;
