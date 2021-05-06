import styled from 'styled-components';
import CSLayout from './CS';
import {
  mixinsFlexCenter,
  mixinAbsolute,
  mixinsScrollBar,
} from 'styles/mixins';
import theme from 'styles/theme';

type TSidebar = {
  show: boolean;
};
export const WrapSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .psu {
    display: block;
    transition: all 0.3s ease;
  }

  @media (max-width: 991px) {
    z-index: 3;
  }
`;
export const SideBar = styled.div<TSidebar>`
  position: sticky;
  top: 0;
  left: 0;
  width: ${CSLayout.sidebar.width + 'px'};

  height: 100%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 0px 200px 0px 0px;
  box-shadow: 0 0 0 21px #f7f9fd, 0 0 0 23px white;
  padding: 85px 10px 0px;
  min-height: 100vh;
  /* transition: all 0.05s ease; */
  text-decoration: none !important;

  margin-top: 24px;
  padding-top: 74px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .nav {
    ${mixinsScrollBar};

    a,
    .item {
      text-decoration: none !important;
      color: ${theme.color.text_phu};
    }

    .item {
      ${mixinsFlexCenter};
      flex-direction: column;
      margin-top: 32px;
      position: relative;
      cursor: pointer;
      text-decoration: none;

      svg,
      path {
        fill: ${theme.color.icon_2};
      }

      &_icon {
        ${mixinsFlexCenter};
        margin-bottom: 12px;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
        transition: all 0.2s ease-in;
        transition-delay: 0.5s;
      }

      &_text {
        font-family: ${theme.fonts['K2D-Light']};
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #5f6169;
      }

      &:hover {
        .child-item {
          pointer-events: auto;
          z-index: 1;
          display: block;
        }
      }

      &.active {
        position: relative;

        &::after {
          position: absolute;
          content: '';
          width: 4px;
          height: 32px;
          background: #03cb83;
          border-radius: 4px 0px 0px 4px;
          right: -9px;
          top: 13px;
        }

        .item_icon {
          background: #e5fef5;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 55px;
          height: 55px;
        }

        .item_text {
          font-weight: bold;
          line-height: 19px;
          color: #03cb83;
        }

        .child-item {
          .active {
            /* color: red !important; */
          }
          &__text {
          }
        }

        svg,
        path {
          fill: ${theme.color.green};
        }
      }

      .child-item {
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: -999;
        position: absolute;
        background: #ffffff;
        box-shadow: 5px 10px 20px rgba(113, 119, 150, 0.1);
        border-radius: 4px;
        left: calc(100% + 10px);
        min-width: 215px;
        padding: 32px 24px 32px 46px;
        display: none;

        &::before {
          position: absolute;
          content: '';
          top: 0;
          left: -10px;
          height: 100%;
          width: 10px;
          background: transparent;
        }

        &__item {
          display: block;
          position: relative;
          padding-bottom: 24px;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: ${theme.color.text_chinh};

          &:nth-last-child(1) {
            padding-bottom: 0;
          }

          &::before {
            ${mixinAbsolute};
            width: 5px;
            height: 5px;
            left: -16px;
            top: 8px;
            border-radius: 50%;
            background: #93a9c7;
          }
          &.active {
            &::before {
              background: #03cb83;
              box-shadow: 0 0 0 3px rgb(3 203 131 / 10%);
            }
          }
        }
      }
    }
  }

  .close {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .footer {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #5f6169;
    background: #f3f7fe;
    border-radius: 4px;
    padding: 16px 9px;
    text-align: center;
    margin-bottom: 54px;

    margin-top: 46px;
  }

  @media (min-width: 1440px) {
    width: 174px;
  }

  @media (max-width: 991px) {
    left: ${props => (props.show ? '0' : '-100%')};
    position: fixed;
    top: 0;
    z-index: 15;
    min-height: unset;
    height: 100vh;
    overflow-y: auto;
    border-radius: 0;
    padding: 0 0 0 0;
    box-shadow: none;
    margin-top: 0;
    width: 200px;

    .close {
      display: block;
      padding: 10px;
    }

    .item {
      &::after {
        display: none;
      }

      &:hover {
        .child-item {
          all: unset;
          transition: height 0.2s ease;
          padding: 25px 15px 0;
        }
      }

      .child-item {
        position: unset;
        height: 0;
        overflow: hidden;
        padding: 0;
      }
    }

    .nav {
      overflow: auto;
    }

    .footer {
      margin-bottom: 0;
      margin-top: 24px;
    }
  }

  @media (max-width: 577px) {
    width: 100%;
  }
`;
