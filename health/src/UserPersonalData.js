import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import Navbar from "./users/Navbar";
import Sidebar from './Sidebar';



export default function UserPersonalData(props) {
  const[users ,setUsers]  = useState(props.data);
  let dataLoaded = false; 

  useEffect(()=>{
    console.log("entered tidafldkfjsalkj")
    setUsers(props.data)
  },[]);

  const loadUsers=async()=>{
    if(!dataLoaded){
      dataLoaded = true;
    const result = await axios.get("http://localhost:8080/getValues");
    console.log(result.data)
    setUsers(result.data)
    }
    
  }

  const deleteUser = async(id)=>{
     await axios.delete("http://localhost:8080/delete/"+id);
     window.alert("record is deleted")
     loadUsers();
  }

  
  return (
    
    <div className="container">
        <div >
      <Sidebar />
    </div>
    <div className="tablePagenat">
      <div className="data"><h3>Patient Record Information</h3></div>
      <table className="table table-bordered">
      <thead>
      <tr>
              <th>Patient ID</th>
              <th>Occupation</th>
              <th>Employer</th>
              <th>Employment Status</th>
              <th>Insurance Plan</th>
              <th>Marital Status</th>
              <th>Living With</th>
              <th>Emergency Contact Person</th>
              <th>Emergency Contact Relation</th>
              <th>Referral Source</th>
              <th>Desired Therapies</th>
              <th>Health Concerns</th>
              <th>Health Goals</th>
              <th>Previous Conditions</th>
              <th>Previous Surgeries</th>
              <th>Previous Hospitalizations</th>
              <th>Allergies</th>
              <th>Medications</th>
              <th>Supplements</th>
              <th>Healthcare Providers</th>
              <th>Current Height</th>
              <th>Current Weight</th>
              <th>Ideal Weight</th>
              <th>Max Weight</th>
              <th>General Health</th>
              <th>Cholesterol Checked</th>
              <th>Cholesterol Check Date</th>
              <th>Pap Smear</th>
              <th>Abnormal Pap</th>
              <th>Abnormal Pap Treatment Date</th>
              <th>Mammogram</th>
              <th>Mammogram Date</th>
              <th>Bone Density Test</th>
              <th>Bone Density Test Date</th>
              <th>Received Vaccinations</th>
              <th>Known Vaccine Reaction</th>
              <th>Difficulty Falling Asleep</th>
              <th>Uninterrupted Sleep</th>
              <th>Hours of Sleep Per Night</th>
              <th>Wake Refreshed</th>
              <th>Take Sleep Aids</th>
              <th>Sleep Aid Type</th>
              <th>Dietary Preferences</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Snacks</th>
              <th>Drinks</th>
              <th>Daily Water Intake</th>
              <th>Happy With Diet</th>
              <th>Drink Alcohol</th>
              <th>Alcohol Details</th>
              <th>Drink Caffeine</th>
              <th>Caffeine Details</th>
              <th>Use Tobacco</th>
              <th>Tobacco Details</th>
              <th>Recreational Drug Use</th>
              <th>Recreational Drug Details</th>
              <th>Exercise</th>
              <th>Exercise Frequency</th>
              <th>Fatigue or Low Energy</th>
              <th>Insomnia</th>
              <th>Appetite Changes</th>
              <th>Unexplained Weight Changes</th>
              <th>Fevers or Chills</th>
              <th>Cold Intolerance</th>
              <th>Heat Intolerance</th>
              <th>Appointment Date</th>
            </tr>
      </thead>
      <tbody>

      {users.map((patientData, index) => (
              <tr>
              <td>{patientData.patientId}</td>
              <td>{patientData.occupation}</td>
              <td>{patientData.employer}</td>
              <td>{patientData.employmentStatus}</td>
              <td>{patientData.insurancePlan}</td>
              <td>{patientData.maritalStatus}</td>
              <td>{patientData.livingWith}</td>
              <td>{patientData.emergencyContactPerson}</td>
              <td>{patientData.emergencyContactRelation}</td>
              <td>{patientData.referralSource}</td>
              <td>{patientData.desiredTherapies}</td>
              <td>{patientData.healthConcerns}</td>
              <td>{patientData.healthGoals}</td>
              <td>{patientData.previousConditions}</td>
              <td>{patientData.previousSurgeries}</td>
              <td>{patientData.previousHospitalizations}</td>
              <td>{patientData.allergies}</td>
              <td>{patientData.medications}</td>
              <td>{patientData.supplements}</td>
              <td>{patientData.healthcareProviders}</td>
              <td>{patientData.currentHeight}</td>
              <td>{patientData.currentWeight}</td>
              <td>{patientData.idealWeight}</td>
              <td>{patientData.maxWeight}</td>
              <td>{patientData.generalHealth}</td>
              <td>{patientData.cholesterolChecked ? 'Yes' : 'No'}</td>
              <td>{patientData.cholesterolCheckDate}</td>
              <td>{patientData.papSmear ? 'Yes' : 'No'}</td>
              <td>{patientData.abnormalPap ? 'Yes' : 'No'}</td>
              <td>{patientData.abnormalPapTreatmentDate}</td>
              <td>{patientData.mammogram ? 'Yes' : 'No'}</td>
              <td>{patientData.mammogramDate}</td>
              <td>{patientData.boneDensityTest ? 'Yes' : 'No'}</td>
              <td>{patientData.boneDensityTestDate}</td>
              <td>{patientData.receivedVaccinations ? 'Yes' : 'No'}</td>
              <td>{patientData.knownVaccineReaction ? 'Yes' : 'No'}</td>
              <td>{patientData.difficultyFallingAsleep ? 'Yes' : 'No'}</td>
              <td>{patientData.uninterruptedSleep ? 'Yes' : 'No'}</td>
              <td>{patientData.hoursOfSleepPerNight}</td>
              <td>{patientData.wakeRefreshed ? 'Yes' : 'No'}</td>
              <td>{patientData.takeSleepAids ? 'Yes' : 'No'}</td>
              <td>{patientData.sleepAidType}</td>
              <td>{patientData.dietaryPreferences}</td>
              <td>{patientData.breakfast}</td>
              <td>{patientData.lunch}</td>
              <td>{patientData.dinner}</td>
              <td>{patientData.snacks}</td>
              <td>{patientData.drinks}</td>
              <td>{patientData.dailyWaterIntake}</td>
              <td>{patientData.happyWithDiet ? 'Yes' : 'No'}</td>
              <td>{patientData.drinkAlcohol ? 'Yes' : 'No'}</td>
              <td>{patientData.alcoholDetails}</td>
              <td>{patientData.drinkCaffeine ? 'Yes' : 'No'}</td>
              <td>{patientData.caffeineDetails}</td>
              <td>{patientData.useTobacco ? 'Yes' : 'No'}</td>
              <td>{patientData.tobaccoDetails}</td>
              <td>{patientData.recreationalDrugUse ? 'Yes' : 'No'}</td>
              <td>{patientData.recreationalDrugDetails}</td>
              <td>{patientData.exercise ? 'Yes' : 'No'}</td>
              <td>{patientData.exerciseFrequency}</td>
              <td>{patientData.fatigueOrLowEnergy ? 'Yes' : 'No'}</td>
              <td>{patientData.insomnia ? 'Yes' : 'No'}</td>
              <td>{patientData.appetiteChanges ? 'Yes' : 'No'}</td>
              <td>{patientData.unexplainedWeightChanges ? 'Yes' : 'No'}</td>
              <td>{patientData.feversOrChills ? 'Yes' : 'No'}</td>
              <td>{patientData.coldIntolerance ? 'Yes' : 'No'}</td>
              <td>{patientData.heatIntolerance ? 'Yes' : 'No'}</td>
              <td>{patientData.appointmentDate}</td>
            </tr>
            ))}
       
      </tbody>
    </table>
 
 </div>
 </div>

  )
}
