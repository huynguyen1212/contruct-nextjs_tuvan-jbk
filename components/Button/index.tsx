/**
 *
 * Button
 *
 */
import styled from 'styled-components';
import theme from 'styles/theme';

const color = {
  green: {
    text: theme.color.white,
    bgr: theme.color.green,
  },
  gray: {
    text: '#6E7B97',
    bgr: '#E4EFFA',
  },
  red: {
    text: 'white',
    bgr: 'red',
  },
};

type Props = {
  color?: 'green' | 'gray' | 'red';
};

const Button = styled.button<Props>`
  border-radius: 2px;
  height: 40px;
  font-weight: ${props => props.color === 'gray' ? 400 : 'bold'};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${props => color[props.color || 'green'].text};
  background: ${props => color[props.color || 'green'].bgr};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 15px;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 2px 2px 8px 0px rgb(0 0 0 / 30%);
  }
`;

export default Button;
