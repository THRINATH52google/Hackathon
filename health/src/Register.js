import { useState } from "react";
import { Navigate } from "react-router-dom";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios'
import './App.css'
function Register () {
    const[values,setValues] = useState("")
    const [selectedField, setSelectedField] = useState('Patient'); // Default selection


    const [user, setUser] = useState({
      name:"",
      password:"",
      email:"",
      userType:"",
      phone:"",
      aadharNo:"",
      age:"",
      userType:"Patient"
    });

    const navigate = useNavigate();
    function goBack(){
        navigate("/");
      }

      const checkCredentials = async() =>{
        //setValues(Event)
         console.log(values.value,(user.password).toString())
         if(!values.value=="" && !user.password=="" && user.phone.length==10){
        
        
          const result = await axios.get("http://localhost:8080/getValidate/"+user.name+"/"+"passwordddfddfdfad");
          if(result.data=="fail"){
            window.alert("user already existed")
          }
         else{
          var res = values.value.localeCompare((user.password).toString())
          console.log(res)
          if(res == 0){
           const result = await axios.post("http://localhost:8080/register",user);
           console.log(result.data);
           window.alert("user is created please login for more")
           navigate("/")
           }else{
             window.alert("please check the password and re-entered password")
           }
         }
        }else{
          alert("please enter mandatory fields properly")
        }
        
        //  user["parentId"] = result.data.parentId
        
        
      }

      const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
        setUser({...user,userType:event.target.value})
      };
    
return(
    <div class="registerUser">
       <div className="cen">
        <h3>Registration Form</h3>
       </div>

    <div className="mb-3">
    <label for="uname" ><b>Username*</b></label>
    <input type="text"  placeholder="Enter Username" name="name" required   onChange={(e) => setUser({...user,name: e.target.value})} />
    </div>

    <div className="mb-3">
    <label for="psw"><b>Password*</b></label>
    <input type="password"   placeholder="Enter Password" name="password" required  onChange={(e) => setUser({...user,password: e.target.value})}/>
     </div>

     <div className="mb-3">
    <label for="psw"><b>ReEnter Password*</b></label>
    <input type="password" placeholder="Enter Password again" name="rpsw" required onChange={(e) =>setValues({value: e.target.value})}/>
    </div>
<br></br>
    <div className="mb-1">
      <label>
        <input
          type="radio"
          value="Patient"
          checked={selectedField === 'Patient'}
          onChange={handleFieldChange}
        />
Patient      </label>

      <label>
        <input
          type="radio"
          value="Doctor"
          checked={selectedField === 'Doctor'}
          onChange={handleFieldChange}
        />
Doctor      </label>
    </div>

    <div className="mb-3">
    <label for="uemail" ><b>Email</b></label>
    <input type="text" placeholder="Enter mailId" name="email" required   onChange={(e) => setUser({...user,email: e.target.value})} />
    </div>

    <div className="mb-3">
    <label for="uphone" ><b>Phone Number*</b></label>
    <input type="text" placeholder="Enter phone Number" name="phoneNumber" required   onChange={(e) => setUser({...user,phone: e.target.value})} />
    </div>
        

    <div className="mb-3">
    <label for="uadhar" ><b>Aadhar Number</b></label>
    <input type="text" placeholder="Enter Aadhar Number" name="aadharNumber" required   onChange={(e) => setUser({...user,aadharNo: e.target.value})} />
    </div>

    <div className="mb-3">
    <label for="uage" ><b>Age</b></label>
    <input type="text" placeholder="Enter Age" name="age" required   onChange={(e) => setUser({...user,age: e.target.value})} />
    </div>

    <button  type="modify" className="small-input" onClick={checkCredentials}>Register</button>
    </div>
);
}

export default Register;