import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button, NavItem, NavLink, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { doLogin, doLogout, getCurrentDetail, isLoggedIn } from '../authentication/Login';
import { FaShoppingCart } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartState } from '../context/Context';
import { AiFillDelete } from "react-icons/ai";
import { myAxios } from '../services/helper';

const ScrapYardNavbar = () => {
  let [count, setCount] = useState(0);
  let num = 0;
  if (isLoggedIn()) {

    let Token = JSON.parse(localStorage.getItem("data"));
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + Token.token,
    };

    myAxios.get('/apiCart/countOfData', { headers }).then(Response => { setCount(Response.data) })

  }

  const {
    state: { cart },
    dispatch,
  } = CartState();

  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentDetail)
  }, [login])

  const logout = () => {
    doLogout(() => {
      toast.success("Logout Succesfully")
      setLogin(false)
      navigate("/home");
    })
  }
  return (
    <>

      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">ScrapYard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="">
            {
              login && (
                <>


                  <Dropdown >
                    <Dropdown.Toggle variant="secondary">
                      <FaShoppingCart color="white" fontSize="25px" />
                      {/* <Badge className='badge-secondary'>{10}</Badge>*/}
                      <span className="badge badge-light">{count}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                      {/*cart.length*/count > 0 ?
                        (<>
                          <table class="table" >
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                              </tr>
                            </thead>
                            {cart.map(prod => (

                              <tbody key={prod.id}>
                                <tr>
                                  <th scope="row">{++num}</th>
                                  <td>{prod.name}</td>
                                  <td>{prod.price}</td>
                                  <td>{1}</td>
                                </tr>
                              </tbody>


                            ))}
                          </table>
                          <Link to="/Cart">
                            <Button className="btn btn-dark" style={{ width: "95%", margin: "0 10px" }}>
                              Go To Cart
                            </Button>
                          </Link>
                        </>) :
                        (<span style={{ padding: 10 }}
                        >Cart is Empty !</span>)}

                    </Dropdown.Menu>
                  </Dropdown>


                  <Button onClick={logout} variant="secondary">Logout</Button>
                  <NavItem>
                    <NavLink>
                      {user.email}
                    </NavLink>
                  </NavItem>
                </>
              )
            }
            {
              !login && (
                <>
                                 
                <Button as={Link} to="/collectorLogin" variant="secondary">Collector</Button>
                  <DropdownButton id="dropdown-basic-button" title="Customer" variant="secondary">
                    
                    <Dropdown.Item as={Link} to="/signUp">SignUp</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/logi">Login</Dropdown.Item>
                    
                  </DropdownButton>

                </>
              )
            }
<ToastContainer/>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
     
    </>


  )
}

export default ScrapYardNavbar