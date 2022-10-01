import {React,useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doLogin, getCurrentDetail } from '../authentication/Login';
import Base from '../components/Base';

import { ServiceLogin } from '../services/user';


const Login = () => {
 
let navigate=useNavigate();
const initialValue={username:"",password:""};
const[formValue,setFormValue]=useState(initialValue);
const [formErrors, setFormErrors] = useState({});

const handleChange=(e)=>{
  const{name,value}=e.target;
  setFormValue({...formValue,[name]:value});
 // console.log(formValue);
};

  const handleSubmit= (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    
    ServiceLogin(formValue).then((jwtTokenData)=>{
      // save the data to localStorage
      doLogin(jwtTokenData,()=>{
        console.log("login details saved in localStorage");
        toast.success("Login Sucessfuly");
        // redirect to home page
        navigate("/scrapMaterial")
        
      })
      
      //console.log(jwtTokenData);
    }).catch(error=>{
      toast.error("please check credentials !")
        console.log(error);
    });
    
  };

 

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/i;
    
    if (!values.username) {
      errors.username = "Email is required!";
    } else if (!emailRegex.test(values.username)) {
      errors.username = "This is not a valid email format!";
    }
    /*
    if (!values.password) {
      errors.password = "Password is required";
    } else if(!passwordRegex.test(values.password)){
      errors.password="Password contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
    }
    */
    return errors;
  };
  
return (
  <>
  <Base></Base>
  <div className="container mt-5 col-6">
  <h3 className="text-primary">Login</h3>
  <hr />

  <form onSubmit={handleSubmit}>
    <div className="form-group mb-3">
      <label>Email</label>
      <input type="text" className="form-control" name='username' placeholder='Email' value={formValue.username} onChange={handleChange} />
    </div>
    <p>{formErrors.username}</p>
    <div className="form-group mb-3">
      <label>Password</label>
      <input type="password" className="form-control" name='password' placeholder='Password' value={formValue.password} onChange={handleChange}/>
    </div>
    <p>{formErrors.password}</p>
    <div className="form-group d-grid mt-2">
      <Button type='submit' className="btn btn-primary">Submit</Button>
    </div>
    
  </form>
</div>
<ToastContainer/>
</>
  )
} 

export default Login