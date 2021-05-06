import styled from 'styled-components'
import theme from 'src/styles/theme'

const CheckboxSmall = styled.input.attrs((props) => ({ type: 'checkbox' }))`
  position: relative;
  transition: all 0.15s ease;
  width: 0;
  cursor: pointer;
  margin-right: 30px;

  &::after,
  &::before {
    position: absolute;
    content: '';
    transition: all 0.35s ease;
  }

  &::before {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid ${theme.color.icon_2};
    bottom: 0;
    left: 0;
  }
  &::after {
    bottom: 4px;
    left: 7px;
  }
  &:checked {
    &::after {
      content: '✓';
      display: inline-block;
      height: 15px;
      width: 8px;
      color: red;
      font-size: 26px;
      left: 0;
      bottom: 10px;
    }
  }
`

export default CheckboxSmall
