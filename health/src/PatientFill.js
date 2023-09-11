
import axios from "axios"
import React, { useState } from 'react'
import './TabletForm.css'
import { useNavigate } from "react-router-dom"
import {properties} from './properties';


export default function PatientFill(){
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
    const[patientInfo, setPatinetInfo] = useState({
        occupation: '',
        employer: null,
        employmentStatus: null,
        insurancePlan: null,
        maritalStatus: null,
        livingWith: null,
        emergencyContactPerson: null,
        emergencyContactRelation: null,
        referralSource: null,
        desiredTherapies: null,
        healthConcerns: null,
        healthGoals: null,
        previousConditions: null,
        previousSurgeries: null,
        previousHospitalizations: null,
        allergies: null,
        medications: null,
        supplements: null,
        healthcareProviders: null,
        currentHeight: "",
        currentWeight: "",
        idealWeight: 0,
        maxWeight: 0,
        generalHealth: null,
        cholesterolChecked: false,
        cholesterolCheckDate: null,
        papSmear: false,
        abnormalPap: false,
        abnormalPapTreatmentDate: null,
        mammogram: false,
        mammogramDate: null,
        boneDensityTest: false,
        boneDensityTestDate: null,
        receivedVaccinations: false,
        knownVaccineReaction: false,
        difficultyFallingAsleep: false,
        uninterruptedSleep: false,
        hoursOfSleepPerNight: 0,
        wakeRefreshed: false,
        takeSleepAids: false,
        sleepAidType: null,
        dietaryPreferences: null,
        breakfast: null,
        lunch: null,
        dinner: null,
        snacks: null,
        drinks: null,
        dailyWaterIntake: null,
        happyWithDiet: false,
        drinkAlcohol: "",
        alcoholDetails: null,
        drinkCaffeine: false,
        caffeineDetails: null,
        useTobacco: false,
        tobaccoDetails: null,
        recreationalDrugUse: false,
        recreationalDrugDetails: null,
        exercise: "",
        exerciseFrequency: null,
        fatigueOrLowEnergy: false,
        insomnia: false,
        appetiteChanges: false,
        unexplainedWeightChanges: false,
        feversOrChills: false,
        coldIntolerance: false,
        heatIntolerance: false,
        appointmentDate: null,
    })

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

    async function sendToDBServer() {
      if (!extractedData) {
        setRetrieveSendToDBStatus("...No data to insert into database")
        return
      }
  
      setRetrieveSendToDBStatus("...Sending extracted data to Database (please wait)")
  
      const url = properties.server_url
      axios.post(url, extractedData)
      .then(res => {
        setRetrieveSendToDBStatus("..."+res.data)
      })
      .catch(error => {
        setRetrieveSendToDBStatus("..."+error.message)
      })
    }
  

    const handleInputChange = (e) => {
      getAuthToken();
        const { name, value } = e.target;
        setPatinetInfo({ ...patientInfo, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Make an API request here using the tabletInfo state
        // For example, using Axios or fetch
    
        try {
          const response = await fetch('http://localhost:8080/fillForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(patientInfo),
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

    return(
        <div className="tablet-form-container">
      <h2>Add Your Information</h2>
      <form className="tablet-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tabletName">occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={patientInfo.occupation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletType">employer:</label>
          <input
            type="text"
            id="employer"
            name="employer"
            value={patientInfo.employer}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletPrice">currentHeight :</label>
          <input
            type="number"
            id="currentHeight"
            name="currentHeight"
            value={patientInfo.currentHeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dosage">currentWeight:</label>
          <input
            type="text"
            id="currentWeight"
            name="currentWeight"
            value={patientInfo.currentWeight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tabletDescription">drinkAlcohol :</label>
          <textarea
            id="drinkAlcohol"
            name="drinkAlcohol"
            value={patientInfo.drinkAlcohol}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tabletQuantity">exercise :</label>
          <input
            type="text"
            id="exercise"
            name="exercise"
            value={patientInfo.exercise}
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
