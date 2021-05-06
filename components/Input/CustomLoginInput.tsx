import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import theme from 'styles/theme';

interface CustomLoginInputProps {
  name: string;
  placeholder: string;
  icon: any;
  type?: string;
  register: any;
}

const CustomInputStyle = styled.div`
  ${Input} {
    font-size: 16px;
    border: none;
  }
  display: flex;
  background-color: white;
  align-items: center;
  padding: 5px 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  button {
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${theme.color.icon_2};
  }
`;

const eyeOn = <FontAwesomeIcon icon={faEye} />;
const eyeOff = <FontAwesomeIcon icon={faEyeSlash} />;

function CustomLoginInput({
  name,
  placeholder,
  icon,
  type,
  register,
}: CustomLoginInputProps) {
  const [isSecured, setIsSecured] = useState<boolean>(true);

  return (
    <CustomInputStyle>
      <img src={icon} alt="" />
      <Input
        {...{ placeholder, name }}
        ref={register}
        type={type && type === 'password' && isSecured ? 'password' : 'text'}
      />
      {type === 'password' && (
        <button type='button' onClick={() => setIsSecured(prev => !prev)}>
          {isSecured ? eyeOff : eyeOn}
        </button>
      )}
    </CustomInputStyle>
  );
}

export default CustomLoginInput;
