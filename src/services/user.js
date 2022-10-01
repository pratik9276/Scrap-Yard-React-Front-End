import { myAxios } from "./helper";

export const ServiceSignUp=(userDto)=>{

    return myAxios.post('/api/v1/auth/register/customer',userDto);
}


export const ServiceLogin=(loginDetail)=>{
    
    return myAxios.post('/api/v1/auth/login',loginDetail).then((response)=>response.data);
}