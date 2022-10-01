import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import Base from "../components/Base";
import { useLocation } from "react-router-dom";
import { myAxios } from "../services/helper";

function VerifyScrapMaterial(props) {
    let count = 0;

    const [subTotal, setSubTotal] = useState(0);
    const location = useLocation();
    const [UserOrderData, setUserOrderData] = useState([]);
    
    
   
    const [customerData, setCustomerData] = useState({ id: 0, email: "", phoneNumber: 0, fname: "", lname: " " });
    const [loading, setLoading] = useState(true);
    let Token = JSON.parse(localStorage.getItem("data"));
    const [data, setData] = useState([]);
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Token.token,
    };

   // console.log(location.state);

    useEffect(() => {
        const fetchOrderData = () => {
            setLoading(true);
            try {
                myAxios.get(`apiOrder/getCustomerOrder/${location.state}`, { headers }).then((resp) => {
                    console.log(resp.data);
                    setUserOrderData(resp.data)
                    console.log(UserOrderData);
                   
                })
                myAxios.get(`/api/${location.state}`, { headers }).then((res) => {
                    console.log(res.data)

                   
                })

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchOrderData();
    }, [])

    //useEffect(()=>{setOrder(UserOrderData)},[])
      let temp=0;
    const handleChange=(value,id)=>{
       // UserOrderData=UserOrderData;
        UserOrderData[id].quantity = value;
        UserOrderData[id].totalPrice = value * UserOrderData[id].price;
        setCustomerData([...UserOrderData]);
        setSubTotal(UserOrderData[id].totalPrice)
         //console.log(value,id)
      }
      console.log(subTotal);
      

    return (
        <>
            <Base />
            <div className="container mt-5 mb-5">
                <h3 className="d-flex justify-content-center fg-default-1">Name:     PhoneNumber:   Email:  </h3>
            </div>
            <div className="mt-5">

                <div className="container">

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Scrap Name</th>
                                <th scope="col">Scrap Price/kg</th>
                                <th scope="col">Qty in Kg</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserOrderData.map((element, id) => {
                                return (
                                    <>
                                        <tr key={id}>
                                            <th scope="row">{element.id}</th>
                                            <td>{element.scrapMaterialName}</td>
                                            <td>{element.price}</td>
                                            <td >  <input onChange={(e)=>handleChange(e.target.value,id)}  type="Text"/></td>
                                            <td> {element.totalPrice}</td>

                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div class="col-md-12 mt-4 text-center">
                    <button className='btn btn-primary'>Total Amount = {subTotal}</button>
                </div>
                <div class="col-md-12 mt-4 text-center">
                    <button className='btn btn-primary' >Done</button>
                </div>
            </div>


        </>
    )
}

export default VerifyScrapMaterial