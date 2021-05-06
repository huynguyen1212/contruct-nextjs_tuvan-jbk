import theme from 'styles/theme';
import styled from 'styled-components';
import IBgr from './bgr.svg';

export const Wrap = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${theme.color.background};
  
  background-image: url(${IBgr});
  background-position: top left;
  background-repeat: no-repeat;
`;
