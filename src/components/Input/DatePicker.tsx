import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import Input from './index';
import { mixinAbsolute } from 'styles/mixins';

interface Props extends DayPickerInputProps {
  left?: boolean;
}

export default function DatePicker(props: Props) {
  return (
    <Style left={props.left}>
      <DayPickerInput component={Input} placeholder="Chọn ngày" {...props} />
      <IconDatePicker />
    </Style>
  );
}

type PropsStyle = { left?: boolean };

export const IconDatePicker = () => (
  <svg
    className="icon-input"
    width="25"
    height="17"
    viewBox="0 0 25 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M12.6667 3.66634H12V2.99967C12 2.63301 11.7 2.33301 11.3333 2.33301C10.9667 2.33301 10.6667 2.63301 10.6667 2.99967V3.66634H5.33333V2.99967C5.33333 2.63301 5.03333 2.33301 4.66667 2.33301C4.3 2.33301 4 2.63301 4 2.99967V3.66634H3.33333C2.59333 3.66634 2.00667 4.26634 2.00667 4.99967L2 14.333C2 15.0663 2.59333 15.6663 3.33333 15.6663H12.6667C13.4 15.6663 14 15.0663 14 14.333V4.99967C14 4.26634 13.4 3.66634 12.6667 3.66634ZM12.6667 13.6663C12.6667 14.033 12.3667 14.333 12 14.333H4C3.63333 14.333 3.33333 14.033 3.33333 13.6663V6.99967H12.6667V13.6663ZM6 8.33301H4.66667V9.66634H6V8.33301ZM7.33333 8.33301H8.66667V9.66634H7.33333V8.33301ZM11.3333 8.33301H10V9.66634H11.3333V8.33301Z"
      fill="#93A9C7"
    />
    <line x1="24.5" y1="2.18557e-08" x2="24.5" y2="17" stroke="#E3E8F0" />
  </svg>
);

const Style = styled.div<PropsStyle>`
  position: relative;

  .DayPickerInput {
    padding-left: 0;
    width: 100%;

    input {
      padding-left: 40px;
    }

    .DayPickerInput-OverlayWrapper .DayPickerInput-Overlay {
      right: ${props => (props.left ? '0' : 'unset')};
      left: ${props => (props.left ? 'unset' : '0')};
    }
  }
  .icon-input {
    cursor: pointer;
    ${mixinAbsolute};
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
  }
`;
