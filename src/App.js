import React, {useState, useEffect} from 'react';
import './App.css';
import SpaceMission from "./graphql";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBContainer, MDBCardText, MDBRow} from "mdb-react-ui-kit";

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10)
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();

  }, []);

  
  console.log("data", data);
  return (
    <MDBContainer style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "720px"
      
    }}
  >
    <MDBRow>
      <h2>SpaceX GraphQL API in React</h2>
    {data.map((item, index) => (
        <>
        <MDBCard 
        key={index} 
        style={{maxWidth: "22rem", maxHeight: "24rem"}}
        >
          <MDBCardImage 
          src= {
            item && item.ships[0] && item.ships[0].image 
            ? item.ships[0].image
            : "https://www.universetoday.com/wp-content/uploads/2022/08/26694_1-PIA25219-web-580x423.jpg"
             } 
             position="top"
             alt={item.mission_name}
             />
             <MDBCardBody>
                <MDBCardTitle>{item.mission_name}</MDBCardTitle>
                <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
             </MDBCardBody>
        </MDBCard>
        </>
      ))}
    </MDBRow>
    </MDBContainer>
  );
}

export default App;
