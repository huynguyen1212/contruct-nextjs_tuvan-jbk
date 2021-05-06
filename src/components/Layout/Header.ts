import theme from 'styles/theme'
import styled from 'styled-components'
import Input from 'src/components/Input'
import { mixinsFlexCenter } from 'styles/mixins'

export const Header = styled.header`
  /* margin-bottom: 50px; */
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 32px;

  .logo {
    ${mixinsFlexCenter};
    position: relative;
    z-index: 2;
    cursor: pointer;

    button {
      margin-right: 24px;
    }
    @media (max-width: 479px) {
      svg.icon-logo {
        width: 100px;
      }
    }
  }

  .info-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 -15px;

    a {
      text-decoration: none !important;
      color: #5f6169;
    }

    .info-user__child:nth-child(n) {
      margin: 0 15px;
    }

    @media (max-width: 991px) {
      .info-user__child:nth-child(n) {
        margin: 0;
      }
    }

    .search {
      position: relative;

      .icon-search {
        position: absolute;
        top: 50%;
        left: 3px;
        cursor: pointer;
        transform: translateY(-50%);
      }

      ${Input} {
        padding-left: 35px;
      }
    }

    .notify {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      box-shadow: '0px 4px 12px rgba(118, 120, 133, 0.15)';
      background: white;
      position: relative;
      ${mixinsFlexCenter};
      cursor: pointer;

      img.icon {
      }

      .number-count {
        border-radius: 50%;
        position: absolute;
        width: 14px;
        height: 14px;
        right: 7px;
        top: 7px;
        background: ${theme.color.red};
        color: ${theme.color.white};
        ${mixinsFlexCenter};

        font-weight: 300;
        font-size: 10px;
        line-height: 13px;
      }
    }

    .user {
      ${mixinsFlexCenter};
      margin: 0 -5px;
      transition: all 0.45s ease;
      height: 55px;
      padding: 0 10px;
      border-radius: 30px;

      & > * {
        margin: 0 5px;
      }

      &-name {
      }

      &-avatar {
        ${mixinsFlexCenter};
        border-radius: 50%;
        height: 47px;
        width: 46px;
        position: relative;
        display: block;
        overflow: hidden;
        border: 2px solid white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-handle {
        cursor: pointer;
      }

      &:hover {
        background-color: ${theme.color.gray};
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 36px 24px;
    z-index: 1;
    position: relative;
  }
  @media (max-width: 1440px) {
    padding: 24px 32px;
  }
  @media (max-width: 767px) {
    padding: 32px 14px;

    .info-user {
      margin: 0;
    }
  }
`
