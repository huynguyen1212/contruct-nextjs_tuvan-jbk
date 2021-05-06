import React from 'react';
import styled from 'styled-components';

const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  /* display: none; */
`;
const Overlay = ({ show }: { show: boolean }) => {
  return (
    <OverlayStyle id="overlay" style={{ display: show ? ' block' : 'none' }} />
  );
};

export default Overlay;
