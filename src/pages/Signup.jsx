/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { logo_p } from "../assets";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../slices/auth.slices";

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

// Checkbox and label
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
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
  color: #dc2f02;
  font-size: 16px;
`;
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};
const SignupForm = () => {
  const [user, setUser] = useState(initialState);
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

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      role: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    dispatch(register(user))
      .unwrap()
      .then((response) => {
        // setSignupError("Registered successfuly.");
        // setSuccessful(true);
        // router.push(
        //   `../attendance/Employee/${response.value.employeeInfo.employee_id}`
        // );
        navigate("/login");
      })
      .catch((error) => {
        if (error) {
          console.log(error)
          setError(error.message);
        } else {
          // If there is no specific error message in the response, set a general message
          setError("Registration failed. Please try again later.");
        }
      });
    setError(null);
    setUser(initialState);
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
          <div>
            <Label>Confirm Password</Label>
            <InputField
              type="password"
              placeholder="Retype your password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={onInputChange}
            />
          </div>
          <div className="w-full flex">
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="admin"
                name="role"
                value="Admin"
                checked={user.role === "Admin"}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor="admin">Admin</Label>
            </CheckboxContainer>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="customer"
                name="role"
                value="User"
                checked={user.role === "User"}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor="customer">Customer</Label>
            </CheckboxContainer>
          </div>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Text>
            Already have an Account?{" "}
            <LinkStyle>
              <Link to="/login">Login</Link>
            </LinkStyle>
          </Text>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignupForm;
