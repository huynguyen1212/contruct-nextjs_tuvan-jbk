/**
 *
 * Input
 * make by  huyro1212
 */
import styled from 'styled-components';
import theme from 'styles/theme';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';
import DatePicker from './DatePicker';
import * as SelectBase from './SelectBase';

const Input = styled.input`
  height: 40px;
  background: ${theme.color.white};
  border: 1px solid #e3e8f0;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;

  // text
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 0 16px;
  color: ${theme.color.text_chinh};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.color.text_phu_2};
  }
  &:disabled {
    background: #e3e8f0;
  }
`;

export { Checkbox, Radio, Select, SelectBase, DatePicker };

export default Input;
