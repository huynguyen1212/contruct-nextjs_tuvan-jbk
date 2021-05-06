import styled from 'styled-components';

// icon
import Icon from './radio.svg';
import IconActive from './radio-active.svg';

type Props = {
  width?: number;
  height?: number;
};

const Radio = styled.input.attrs(props => ({ type: 'radio' }))<Props>`
  position: relative;
  transition: all 0.25s ease;
  width: 0;
  height: 20px;
  cursor: pointer;
  margin: 5px 10px 5px 20px;
  visibility: hidden;

  &::after {
    visibility: visible;
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    left: -15px;
    background-size: ${props =>
      `${props.width || 20}px ${props.height || 20}px`};
    background-repeat: no-repeat;
    background-position: center;
    transition: 0s all;
  }

  &::after {
    background-image: url(${Icon});
  }

  &:checked {
    &::after {
      background-image: url(${IconActive});
    }
  }
`;
export default Radio;
