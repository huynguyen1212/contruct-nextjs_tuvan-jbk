import { mixinsFlexCenter } from '../../../../styles/mixins'
import styled from 'styled-components'
import theme from 'styles/theme'

interface NewsHeaderProps {
  isLoginRoute: boolean
}

export const NewsHeader = styled.div<NewsHeaderProps>`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  padding: 40px;
  transition: all 0.3s;
  .header-wrapper {
    max-width: ${(props) => (props.isLoginRoute ? 'auto' : '1140px')};
    ${mixinsFlexCenter};
    margin: auto;
    /* max-width: 1140px; */
    .logo {
      margin-left: ${(props) => (props.isLoginRoute ? 'auto' : '0')};
      width: ${(props) => (props.isLoginRoute ? 'calc(45%)' : 'auto')};
      display: flex;
      .logo-container {
        flex-grow: 1;
        max-width: calc(1140px * 0.45);
        margin-left: auto;
        img {
          display: inline-block;
          width: ${(props) => (props.isLoginRoute ? 'auto' : '123px')};
        }
      }
    }
    .links {
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        margin: ${(props) => (props.isLoginRoute ? '0px 15px' : '0 20px')};
      }
      flex-grow: ${(props) => (props.isLoginRoute ? '1' : '0')};
      margin-left: ${(props) => (props.isLoginRoute ? '0px' : 'auto')};
      padding-left: 5px;

      .link {
        color: ${(props) => (props.isLoginRoute ? theme.color.gray_2 : '#8D95B0')};
        text-decoration: none;
        padding: 10px 0;
        position: relative;
        transition: 0.3s;

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          transform: scaleX(0);
          transition: 0.3s;
          background-color: ${theme.color.green};
        }
        &:hover,
        &.active {
          font-weight: bold;
          color: black;
          &:after {
            transform: scaleX(0.7);
          }
        }
      }
      .button {
        color: #5c76a8;
        font-size: 16px;
        line-height: 20px;
        background-color: white;
        border: 1px solid #03cb83;
        border-radius: 8px;
        padding: 10px 35px;
        text-decoration: none;
        margin-right: 0;
      }
      .group-buttons * {
        transition: 0.3s;
      }
      .group-buttons {
        margin-left: 20px;
        border: 1px solid ${theme.color.green};
        border-radius: 30px;
        position: relative;
        a {
          text-decoration: none;
          padding: 8px 20px;
          border-radius: 30px;
          margin: 0;
        }
        .button_1 {
          background-color: ${theme.color.green};
          color: white;
        }
        .button_2 {
          color: ${theme.color.green};
        }
      }
    }
    #toggle-menu,
    #close-menu {
      display: none;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      font-size: 20px;
    }
  }
  @media (max-width: 1439px) {
    padding: 20px 40px !important;
  }

  @media (max-width: 1199px) {
    .header-wrapper {
      .logo {
        width: auto;
        margin-left: 0;
      }
      .links {
        width: auto;
        flex-grow: 0;
        margin-left: auto;
        .button {
          padding: 10px 15px;
        }
        .link {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 20px !important;
    .header-wrapper {
      .links {
        a {
          margin: ${(props) => (props.isLoginRoute ? '0px 15px' : '0 10px')};
        }
        .group-buttons {
          .button_2 {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 20px 15px !important;
    .header-wrapper {
      .logo {
        .logo-container {
          img {
            width: 110px;
          }
        }
      }
      .links {
        min-height: 100%;
        overflow-y: scroll;
        align-items: flex-start;
        position: fixed;
        z-index: 10;
        height: 100vh;
        top: 0;
        left: -200px;
        width: 200px;
        background-color: ${theme.color.green};
        display: flex;
        flex-direction: column;
        padding: 40px 20px 20px;
        transition: 0.3s all;
        .link,
        .button {
          margin: 8px 0;
        }
        .link {
          color: white;
          &:after {
            /* content: none; */
          }
          &.active {
            color: white;
            &:after {
              transform: scaleX(1);
              background-color: white;
            }
          }
        }
        .button {
          width: 100%;
          display: flex;
          justify-content: center;
          font-size: 14px;
        }
        .group-buttons {
          margin-left: 0;
          .button_1 {
            color: #5c76a8;
            width: 100%;
            font-size: 14px;
            line-height: 20px;
            background-color: white;
            border: 1px solid #03cb83;
            border-radius: 8px;
            padding: 10px 35px;
          }
        }
      }
      .logo {
        margin-right: auto;
      }
      #toggle-menu,
      #close-menu {
        display: block;
      }
      #close-menu {
        position: absolute;
        right: 0;
        color: white;
      }
    }
  }
`
