import { React, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ServiceSignUp } from '../services/user';
import Base from '../components/Base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const navigate=useNavigate();
  const initialValue = { fname: "", lname: "", email: "", password: "", phoneNumber: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isTrue,setIsTrue]=useState(false);

  const handleSubmit = (e) => {
    // prevent page refresh
    e.preventDefault();
    setFormErrors(validate(formValue));

    console.log('form submitted ✅');
    if(validate(formValue).length!=0)
    {
       ServiceSignUp(formValue);
       toast.success("SignUp Successfully")
       navigate("/logi")
    }else{
      toast.error("Please Check Form value")
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/i;
    const phoneNumberRegex=/^\d{10}$/;
    if (!values.fname) {
      errors.fname = "First name is required!";
    }
    if (!values.lname) {
      errors.lname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNum) {
      errors.phoneNumber = "Mobile number is required!";
    } else if (!phoneNumberRegex.test(values.phoneNum)) {
      errors.phoneNumber = "Please check mobile number digit!";
    } 
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
    }
    return errors;
  };

  return (
    <>
    <Base></Base>
    <div className="container mt-5 col-6 mb-3">
      <h3 className="text-primary">Registration</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" name="fname" value={formValue.fname} onChange={handleChange} />
        </div>
        <p>{formErrors.fname}</p>
        <div className="form-group mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" name="lname" value={formValue.lname} onChange={handleChange} />
        </div>
        <p>{formErrors.lname}</p>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="text" className="form-control" name="email" value={formValue.email} onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>
        <div className="form-group mb-3">
          <label>Mobile Number</label>
          <input type="text" className="form-control" name="phoneNumber" value={formValue.phoneNumber} onChange={handleChange} />
        </div>
        <p>{formErrors.phoneNum}</p>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={formValue.password} onChange={handleChange} />
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

export default SignUp