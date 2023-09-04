import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import Navbar from "../users/Navbar";


export default function Userlist() {
  const[users ,setUsers]  = useState([]);
  let dataLoaded = false; 

  useEffect(()=>{
    loadUsers()
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
    <Navbar/>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>parentId</th>
          <th>customerIdentifier</th>
          <th>name</th>
          <th>stateCode</th>
          <th>zip</th>
          <th>line1</th>
          <th>postalCode</th>
          <th>countryCode</th>
        </tr>
      </thead>
      <tbody>

      {users.map((user, index) => (
              <tr key={index}>
                {/* <th scope="row" key={index}>
                  {index + 1}
                </th> */}
                <td>{user.parentId}</td>
                <td>{user.customerIdentifier}</td>
                <td>{user.name}</td>
                <td>{user.stateCode}</td>
                <td>{user.zip}</td>
                <td>{user.line1}</td>
                <td>{user.postalCode}</td>
                <td>{user.countryCode}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to = {`/editUser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                  
                </td>
              </tr>
            ))}
       
      </tbody>
    </table>
  </div>
  )
}
