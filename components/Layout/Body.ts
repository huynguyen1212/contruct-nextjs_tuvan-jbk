import styled from 'styled-components';
import CSLayout from './CS';
import { SideBar } from './SideBar';

export const Body = styled.div`
  position: relative;
  padding-left: ${CSLayout.sidebar.width + 23 + 'px'};
  min-height: 100vh;
  transition: all 0.3s ease;

  @media (min-width: 1440px) {
    padding-left: 214px;
  }

  @media (max-width: 991px) {
    padding-left: unset;

    ${SideBar} {
      position: fixed;
      top: 0;
      z-index: 9;
    }
  }
`;
