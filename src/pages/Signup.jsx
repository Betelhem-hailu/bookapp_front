/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { logo_p } from "../assets";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

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
  color: #333;`

const LinkStyle = styled.span`
  font-size: 14px;
  color: #00ADB5;
  cursor: pointer;
  text-decoration: underline;
  `

const SignupForm = () => {
    const [selected, setSelected] = useState(null);

  const handleCheckboxChange = (event) => {
    setSelected(event.target.id);
  };
  return (
    <FormContainer>
      <LogoContainer>
        <Logo src={logo_p} alt="Logo" />
      </LogoContainer>
      <FormWrapper>
        <div>
          <Label>Email</Label>
          <InputField type="email" placeholder="Enter your email"/>
        </div>
        <div>
          <Label>Password</Label>
          <InputField type="password" placeholder="Enter your password"/>
        </div>
        <div>
          <Label>Confirm Password</Label>
          <InputField type="password" placeholder="Retype your password"/>
        </div>
        <div className="w-full flex">
        <CheckboxContainer>
          <Checkbox type="checkbox" id="admin" checked={selected === 'admin'}
          onChange={handleCheckboxChange}/>
          <Label htmlFor="admin">Admin</Label>
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox type="checkbox" id="customer" checked={selected === 'customer'}
          onChange={handleCheckboxChange}/>
          <Label htmlFor="customer">customer</Label>
        </CheckboxContainer>
        </div>
        <Button variant="primary">Register</Button>
        <Text>Already have an Account? <LinkStyle><Link to="/login">Login</Link></LinkStyle></Text>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignupForm;
