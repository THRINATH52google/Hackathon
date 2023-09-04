import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
let flag = false;
  const { id } = useParams();

  const [user, setUser] = useState({
    parentId:"",
    customerIdentifier:"",
    name:"",
    stateCode:"",
    zip:"",
    line1:"",
    postalCode:"",
    countryCode:"",
  });


  const onInputChange = (value,attr,user) => {
    user[attr] = value
    setUser(user);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
     await axios.put("http://localhost:8080/update/"+id, user);
    navigate("/home");
  };

  const loadUser = async () => {
    if(!flag){
      flag=true;
      const result = await axios.get("http://localhost:8080/getValue/"+id);
       setUser(result.data);
    }
   
  };

  return (
    <div className="container">
      <div className="checking">
        <div className="col-md-5 offset-md-3 border roun ded p-2 mt-2 shadow">
          <h2 className="text-center m-4">Edit Details</h2>

          <form className="form-class" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="parentId" className="form-label">
              parentId
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your parentId"
                name="parentId"
                value={user.parentId}
                onChange={(e) => setUser({...user,parentId: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customerIdentifier" className="form-label">
              customerIdentifier
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your customerIdentifier"
                name="customerIdentifier"
                value={user.customerIdentifier}
                onChange={(e) => setUser({...user,customerIdentifier: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                defaultValue={user.name}

                onChange={(e) => setUser({...user,name: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="stateCode" className="form-label">
              stateCode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your stateCode"
                name="stateCode"
                value={user.stateCode}
                defaultValue={user.stateCode}
                onChange={(e) => {
                  setUser({...user,stateCode: e.target.value})
                  console.log(user)
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="zip" className="form-label">
              zip
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your zip"
                name="zip"
                value={user.zip}
                onChange={(e) => setUser({...user,zip: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="line1" className="form-label">
              line1
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your line1"
                name="line1"
                value={user.line1}
                onChange={(e) => setUser({...user,line1: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">
              postalCode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your postalCode"
                name="postalCode"
                value={user.postalCode}
                onChange={(e) => setUser({...user,postalCode: e.target.value})}
              />
            </div>
          
            <div className="mb-3">
              <label htmlFor="countryCode" className="form-label">
              countryCode
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your countryCode"
                name="countryCode"
                value={user.countryCode}
                onChange={(e) => setUser({...user,countryCode: e.target.value})}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}