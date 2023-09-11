import axios from "axios"
import React, { useState } from 'react'
import './TabletForm.css'
import { useNavigate } from "react-router-dom"

export default function TabletFill(){
  const [accessToken, setAccessToken] = React.useState()
  const [tokenPlaceholder, setTokenPlaceholder] = React.useState()
  const [piiData, setPiiData] = React.useState()
  const [piiDataPlaceholder, setPiiDataPlaceholder] = React.useState()
  const [capturedFileId, setCapturedFileId] = React.useState("")  //id of image file in Capture Service
  const [extractedData, setExtractedData] = React.useState()
  const [extractedDataDisplay, setExtractedDataDisplay] = React.useState()
  const [capFileIdPlaceholder, setCapFileIdPlaceholder] = React.useState("")
  const [retrieveStatus, setRetrieveStatus] = React.useState("")
  const [retrieveCaptureStatus, setRetrieveCaptureStatus] = React.useState("")
  const [retrieveSendToDBStatus, setRetrieveSendToDBStatus] = React.useState("")
  const [tmeResults, setTMEResults] = React.useState([])

    const navigate = useNavigate();
    const[tabletInfo, setTabletInfo] = useState({
         tabletName:"",
         tabletType:"",
         tabletPrice:"",
         dosage:"",
         tabletDescription:"",
         tabletQuantity:"",
        patientId:"",
         doctorId:"",
         createdDate:"",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTabletInfo({ ...tabletInfo, [name]: value });
      };

      const handleSubmit = async (e) => {
        getAuthToken();
        e.preventDefault();
    
        // Make an API request here using the tabletInfo state
        // For example, using Axios or fetch
    
        try {
          const response = await fetch('http://localhost:8080/tabletfillForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(tabletInfo),
          });
    
          if (response.ok) {
            // Handle success (e.g., show a success message)
            alert('Tablet added successfully.');
            navigate("/home")
          } else {
            // Handle error (e.g., show an error message)
            console.error('Failed to add tablet.');
          }
        } catch (error) {
          // Handle network error
          console.error('Network error:', error);
        }
      };
      
      async function getAuthToken() {
        setAccessToken("")
        setTokenPlaceholder("...Requesting New Authentication Token")
    
        const url = `${properties.base_url}/tenants/${properties.tenant_id}/oauth2/token`
        const requestOptions = {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                client_id: properties.client_id,
                client_secret: properties.client_secret,
                grant_type: "password",
                username: properties.username,
                password: properties.password
            })
        }
    
        const response = await fetch(url, requestOptions)
    
        if (!response.ok) {
          setTokenPlaceholder("Error acquiring authentication token")
          alert("Authentication Failed. Please verify your credentials in properties.js")
          return
        }
        const data = await response.json()
        setAccessToken(data.access_token)
        setTokenPlaceholder("")
      }

    return(
        <div className="tablet-form-container">
      <h2>Add Tablet Information</h2>
      <form className="tablet-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tabletName">Tablet Name:</label>
          <input
            type="text"
            id="tabletName"
            name="tabletName"
            value={tabletInfo.tabletName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletType">Tablet Type:</label>
          <input
            type="text"
            id="tabletType"
            name="tabletType"
            value={tabletInfo.tabletType}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletPrice">Tablet Price:</label>
          <input
            type="number"
            id="tabletPrice"
            name="tabletPrice"
            value={tabletInfo.tabletPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={tabletInfo.dosage}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletDescription">Tablet Description:</label>
          <textarea
            id="tabletDescription"
            name="tabletDescription"
            value={tabletInfo.tabletDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tabletQuantity">Tablet Quantity:</label>
          <input
            type="number"
            id="tabletQuantity"
            name="tabletQuantity"
            value={tabletInfo.tabletQuantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={tabletInfo.patientId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctorId">Doctor ID:</label>
          <input
            type="text"
            id="doctorId"
            name="doctorId"
            value={tabletInfo.doctorId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdDate">Created Date:</label>
          <input
            type="date"
            id="createdDate"
            name="createdDate"
            value={tabletInfo.createdDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
    }
