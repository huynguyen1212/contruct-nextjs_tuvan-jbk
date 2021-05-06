import styled from 'styled-components'
import theme from 'src/styles/theme'

export const NewsFooter = styled.div`
  background-color: ${theme.color.gray_bg};
  .border {
    width: 100%;
    height: 0;
    border-top: 2px dashed #8d95b0;
  }
  .row {
    padding: 80px 0;
    .column {
      .investers {
        display: flex;
      }
      .logo {
        width: 120px;
        height: auto;
      }
      h3 {
        color: #455a64;
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
      }
      p,
      span {
        color: #8d95b0;
      }
      p {
        font-size: 14px;
        line-height: 21px;
      }
      .right {
        /* text-align: center; */
        white-space: nowrap;
        margin-left: 30px;
        font-size: 16px;
        line-height: 24px;
        margin-top: 65px;
        margin-bottom: 0;
        span {
          color: #00de8e;
        }
      }
      .detail {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          display: inline-block;
          margin-left: 12px;
          text-decoration: none;
        }
      }
    }
    .column_1 {
      h3 {
        margin-top: 25px;
        margin-bottom: 10px;
      }
      p {
        margin-top: 0px;
        margin-bottom: 50px;
      }
    }
    .column_2,
    .column_3 {
      h3 {
        margin-top: 10px;
        margin-bottom: 30px;
      }
    }
    .column_2 {
      padding-left: 90px;
    }
    .column_3 {
      padding-left: 160px;
      .detail:nth-child(0) {
        transform: translateX(5px);
      }
    }
  }
  @media (max-width: 1199px) {
    .row {
      .column_3 {
        padding-left: 100px;
      }
    }
  }
  @media (max-width: 991px) {
    .row {
      .column_3,
      .column_2 {
        padding-left: 0px;
        .right {
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .border {
      margin: 0 15px;
    }
    .row {
      padding: 40px 0;
      .column {
        .investers {
          justify-content: space-between;
        }
        p,
        span {
          font-size: 14px;
        }
        p {
          margin-bottom: 20px;
        }
      }
      .column_1 {
        h3 {
          margin-top: 20px;
        }
      }
      .column_2,
      .column_3 {
        margin-top: 20px;
        h3 {
          margin-top: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (max-width: 679px) {
    .row {
      .column {
        .right {
          margin-left: 0;
          text-align: center;
        }
      }
    }
  }
`
