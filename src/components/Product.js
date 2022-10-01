
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { isLoggedIn } from '../authentication/Login';
import { CartState } from '../context/Context'
import { myAxios } from '../services/helper';

const Product = (props) => {
    //console.log(props)

    const initialValue = {id:0,scrapMaterial:0,user:0}
    const [cartData , setCartData] = useState(initialValue);
    // id=0, customer=0, scrapMaterial=0
    const { state, dispatch } = CartState();
    //  const {
    //    state: { cart },
    //     dispatch,
    //  } = CartState();


    //  useEffect(()=>{
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {

    //             let res = (await myAxios.get(`apiCart/getAllScrapMaterial/${Token.userDto.id}`, { headers }))
                
    //             dispatch({
    //                 type: "ADD_TO_CART",
    //                 payload: res.data
    //             })

    //             dispatch({
    //                 type: "REMOVE_FROM_CART",
    //                 payload: res.data
    //             })
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //         setLoading(false);
    //     }

    //     fetchData();
    //  },[])
    

     let Token = JSON.parse(localStorage.getItem("data"));
     const headers = {
         "Content-Type": "application/json",
         "Authorization": "Bearer " + Token.token,
     };

     const [loading, setLoading] = useState(true);

    const handleClickRemove= async (prod_id)=>{ 
        setLoading(true);
        try { 
         await myAxios.delete(`apiCart/deleteScrapMaterialFormCart/${prod_id}`, { headers })
         let res =(await myAxios.get(`apiCart/getAllScrapMaterial/${Token.userDto.id}`, { headers }))
          console.log(res.data);
          dispatch({
             type: "REMOVE_FROM_CART",
             payload: res.data,
         })
         }catch (error) {
             console.error(error.message);
         }

          setLoading(false);
     }

     

     const handleClickAdd= async (cust_id,scrap_id) => { 
        setCartData({scrapMaterial:scrap_id,user:cust_id,});
        console.log(cartData)
        
        setLoading(true);
        try { 
        await myAxios.post('/apiCart/addToCart', cartData,{ headers })
         let res =await myAxios.get(`apiCart/getAllScrapMaterial/${Token.userDto.id}`, { headers })
         console.log(res.data);
          dispatch({
             type: "ADD_TO_CART",
             payload: res.data,
         })
         }catch (error) {
             console.error(error.message);
         }

          setLoading(false);
     }
    
    return (
        <>

            {props.paperData &&
                props.paperData.map((data, index) => {
                    return (
                        <div className="col-lg-3 col-6 mb-4 pb-4 px-4" key={index} >
                        
                            <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                                <div className="title-lg pt-6 flex-fill px-lg-6 px-3" >
                                    {data.name}
                                </div>
                                <div className="px-3 px-lg-6 pb-6">
                                    <span className="pe-2 title-lg" style={{ color: "#44B31F" }}>
                                        {data.price}
                                    </span>
                                    <span className="fg-default-2 title-sm">/Kg</span>
                                </div>
                                <div className="form-group d-grid mt-2">
                                    {
                                       
                                        state.cart.some(p=> p.id===data.id )?
                                        (<Button onClick={() =>handleClickRemove(data.id)}   type='submit' className="btn btn-dark">Remove from Cart</Button>)
                                        :
                                        (<Button onClick={() => handleClickAdd(Token.userDto.id,data.id,)} type='submit' className="btn btn-secondary">Add To Cart</Button>)

                                                             
                                    }
                                       
                                </div>
                            </div>
                        </div>
                    )
                })
            };
        </>
    )
}

export default Product