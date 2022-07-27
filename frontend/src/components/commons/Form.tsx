import React from 'react';
import styled from 'styled-components';
import { darkTheme } from "@/styles/Theme";

const { adaptiveGrey500, adaptiveGrey200, mainBadgeColor } = darkTheme;


const FormDIV = styled.form`
  width: 40rem;
  margin: 2rem auto;
    
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${adaptiveGrey200};
    
`
const Input = styled.input`
  width: 100%;
  font: inherit;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${adaptiveGrey500};
  border: none;
  margin-bottom: 0.5rem;
  &:focus{
    outline:2px solid ${mainBadgeColor} 
  }
    
`

const Form:React.FC<{text:string}> = (props) =>{
   return (
    <FormDIV>
        <Label htmlFor='text'>{props.text}</Label>
        <Input type="text" id="text"/>
    </FormDIV>
   )
}

export default Form;