import styled from 'styled-components';

export const Content = styled.div`
  padding: 32px 16px;
  min-height: 1000px;
  padding-top: 12px;
  padding-right: 32px;

  @media (max-width: 991px) {
    padding: 15px;
  }
  @media (max-width: 767px) {
    padding: 5px;
    min-height: unset;
  }
`;
