import React, { useState } from "react";
import styled from "@emotion/styled";
import { logo_p } from "../assets";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slices/auth.slices";

// Container for the entire form
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
`;

// Form wrapper
const FormWrapper = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

// Logo
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.h6`
  font-size: 14px;
  color: #333;
`;

const LinkStyle = styled.span`
  font-size: 14px;
  color: #00adb5;
  cursor: pointer;
  text-decoration: underline;
`;

const Error = styled.p`
color: #DC2F02;
font-size: 16px;
`;

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user))
      .unwrap()
      .then((response) => {
        // setSignupError("Registered successfuly.");
        // setSuccessful(true);
        // router.push(
        //   `../attendance/Employee/${response.value.employeeInfo.employee_id}`
        // );
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          setError(error);
        } else {
          // If there is no specific error message in the response, set a general message
          setError("Login failed. Please try again later.");
        }
      });

    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <FormContainer>
      <LogoContainer>
        <Logo src={logo_p} alt="Logo" />
      </LogoContainer>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          {error && <Error>{error}</Error>}
          <div>
            <Label>Email</Label>
            <InputField 
            type="email" 
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={onInputChange}
            />
          </div>
          <div>
            <Label>Password</Label>
            <InputField 
            type="password" 
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={onInputChange}
            />
          </div>
          <Button variant="primary">Login</Button>
          <Text>
            Don't have an Account?{" "}
            <LinkStyle>
              <Link to="/signup">Sign up</Link>
            </LinkStyle>
          </Text>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
