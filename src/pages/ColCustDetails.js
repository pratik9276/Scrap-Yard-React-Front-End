import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Base from '../components/Base'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { myAxios } from '../services/helper';
import VerifyScrapMaterial from './VerifyScrapMaterial';


const ColCustDetails = () => {
    let count=0;
    const [loading, setLoading] = useState(true);
    const [cusData, setCusData] = useState([]);
    const[userId,setUserId]=useState(null);
    const navigate =useNavigate();

    let Token = JSON.parse(localStorage.getItem("data"));
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Token.token,
    };
     useEffect(()=>{
    const fetchCusDataFromOrder = () => {
        setLoading(true);
        try {
       myAxios.get("/apiOrder/getAllCustomer",{headers}).then((resp) => {
            console.log(resp.data);
            setCusData(resp.data)
            
        })
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    }
    fetchCusDataFromOrder();
 },[])

 const getUserId = (uId) =>{
    setUserId(uId);
    console.log(uId);
    if(userId!==null)
    navigate("/verify",{state:uId})
  };
    return (
        <>
           <Base></Base>
           <div className="container mt-5 mb-5">
                <h3 className="d-flex justify-content-center fg-default-1">Todays List</h3>
            </div>
            <div className="mt-5">
                <div className="container">

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Number</th>
                                <th scope="col">Verify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cusData.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row" key={id}>{++count}</th>
                                            <td>{element.fname+" "+element.lname}</td>
                                            <td>{}</td>
                                            <td>{element.phoneNumber}</td>
                                            <td className="d-flex justify-content-between">
                                                
                                         < button className='btn btn-primary' onClick={()=>getUserId(element.id)}>Accept</button>
                                                    
                                            
                                        </td>
                                    </tr>
                                   </>
                        );
                                 })} 
                    </tbody>
                </table>
            </div>
        </div>
       
        </>
    )
}
export default ColCustDetails