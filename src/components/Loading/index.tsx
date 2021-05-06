/**
 *
 * Loading
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import IconLoading from './icon-loading.svg';

interface Props {
  active: boolean;
}

function Loading({ active }: Props) {
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [active]);

  if (active)
    return (
      <StylesLoading>
        <img src={IconLoading} alt="loading..." />
      </StylesLoading>
    );
  return null;
}
const StylesLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  align-items: center;
  display: flex;
  z-index: 9999;
  justify-content: center;
`;

export default memo(Loading);
