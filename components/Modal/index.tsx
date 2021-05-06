/**
 *
 * Modal
 * make by  huyro1212
 */
import React, { ReactChild, ReactChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from 'styles/theme';

import IClose from '@assets/images/icon-close.svg';
import { mixinsScrollBar, mixinsScrollBarNone } from 'styles/mixins';

interface Props {
  title: string;
  isShowing: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>> | Function;
  children: ReactChild | ReactChildren;
  overwrite?: React.HTMLAttributes<HTMLDivElement>;
  overwriteChild?: React.HTMLAttributes<HTMLDivElement>;
}

const Modal = ({
  isShowing,
  toggleModal,
  title,
  children,
  overwrite,
  overwriteChild,
}: Props) => {
  // clear scroll bar
  useEffect(() => {
    if (isShowing) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShowing]);

  return isShowing
    ? ReactDOM.createPortal(
      <Styles {...overwrite}>
        <div className="modal" {...overwriteChild}>
          <div className="modal-header">
            {title}
            <img
              src={IClose}
              alt="close modal"
              onClick={() => toggleModal(!isShowing)}
            />
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </Styles>,
      document.body,
    )
    : null;
};

export default Modal;

const Styles = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 35px 0;
  overflow: auto;
  z-index: 999;
  ${mixinsScrollBar};

  .modal {
    min-width: 300px;
    max-width: 1200px;
    background-color: ${theme.color.white};
    padding: 52px 44px;
    border-radius: 4px;
    margin: 0 auto;
    overflow-y: auto;
    ${mixinsScrollBarNone};
    animation: open 0.2s forwards ease-out;
    opacity: 0;

    .modal-header {
      position: relative;
      padding-bottom: 72px;
      font-family: ${theme.fonts['K2D-Regular']};
      font-size: 24px;
      line-height: 28px;

      img {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  @media (max-width: 991px) {
    .modal {
      padding: 40px 20px;
      .modal-header {
        padding-bottom: 40px;
      }
    }
  }

  @media (max-width: 767px) {
    .modal {
      padding: 20px 15px;
      .modal-header {
        padding-bottom: 20px;
      }
    }
  }

  @keyframes open {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
