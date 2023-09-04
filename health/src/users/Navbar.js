import { Button } from "@mui/material";
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios'

export default function Navbar() {
    let navigate = useNavigate();
   

  return (
    <div>
      {/* <nav className="navbar"> */}
        <div className="navbar">
          <p >HealthCare Application</p>
        </div>
      {/* </nav> */}
    </div>
  );
}