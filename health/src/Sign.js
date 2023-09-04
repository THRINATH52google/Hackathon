import { useEffect, useState } from 'react'
import './Sign.css';
import {Link,json,useNavigate} from "react-router-dom";
// import Register from './Register';
import axios  from 'axios';

function Sign() {
   const [Username,setUserName] = useState()
   const [password,setPassword] = useState()
   const [data, setData] = useState(null);
   const [formValues,setFormValues] = useState();

   const handleChange = (e) =>{
     console.log("entered");
     //const { uname,psw} = e.target;

   };

 const navigate = useNavigate();
   function registerUser(){
  console.log("hello");
   navigate("/register");
   }

   const loginUser = async() =>{
    console.log("registed so enteerd to the data page");
    console.log(Username)
    console.log(password)

    const result = await axios.get("http://localhost:8080/getValidate/"+Username+"/"+password);
 
     if(result.data=="success"){
      navigate("/home")
     }else{
     if(result.data=="user not found"){
      alert("user not found please register")
     }
     else{
      alert("please enter the valid details")
     }
    }
   }

  return (
   <div>
    <div className="Sign">
      <img src="health.png" className='Sign'/>
      <br></br>
      <div>
    <label for="uname"><b>Username/PhoneNumber/Email</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onChange ={e => setUserName(e.target.value)} required/>
    </div>

    <div>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw"  onChange={e => setPassword(e.target.value)} required/>
    </div>
        
      <div>
    <button class="w3-button w3-border" onClick={loginUser}>Login</button>
    </div>  <br/
    >

    <div>
    <button class="w3-button w3-border" type="modify" onClick={registerUser}>Register</button>
    </div>
    </div>
    {/* <Link to ={'/register'}>cgedkjkf</Link> */}
    </div>
  );
}

export default Sign;