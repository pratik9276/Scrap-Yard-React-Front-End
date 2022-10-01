
import { CartState } from "../context/Context";
import { myAxios } from "./helper";

let Token = JSON.parse(localStorage.getItem("data"));
//const { state, dispatch } = CartState();

const headers = {
    "Content-Type": "application/json",
     "Authorization": "Bearer "+Token.token,
  };

 export const handleClick=(prod_id)=>{  
    let res = myAxios.delete(`apiCart/deleteScrapMaterialFormCart/${prod_id}`, { headers })
    .then(Response =>{
         return Response.data;                   
    });

     console.log(res.data);
      return({
         type: "REMOVE_FROM_CART",
        payload: res,
     })
}

