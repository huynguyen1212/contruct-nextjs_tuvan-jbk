/**
 *
 * Table
 * make by  huyro1212
 */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from 'styles/theme';
import Skeleton from 'react-loading-skeleton';
import VALIDATE from '@helpers/validate';
import { mixinsScrollBarHeight } from 'styles/mixins';

type PropsStyle = {
  border?: boolean;
  minWidth?: number;
};

type Props = {
  style?: PropsStyle;
  isLoading?: boolean;
  thead: any;
  tbody: any;
};

const b = `1px solid ${theme.color.line}`;

const Table = ({ style, isLoading, thead, tbody }: Props) => {
  return (
    <STable {...style}>
      <table>
        <thead>{thead}</thead>
        <tbody>
          {isLoading ? (
            Array(10)
              .fill(null)
              .map(k => (
                <tr>
                  <td colSpan={100}>
                    <Skeleton height={52} duration={0.8} />
                  </td>
                </tr>
              ))
          ) : tbody.length > 0 ? (
            tbody
          ) : (
            <tr>
              <td colSpan={100}>{VALIDATE.NOTHING_HERE}</td>
            </tr>
          )}
        </tbody>
      </table>
    </STable>
  );
};

export const STable = styled.div<PropsStyle>`
  padding: 28px 16px 12px;
  border: ${props => (props.border ? b : 'unset')};
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.color.text_phu};
  overflow: auto;
  ${mixinsScrollBarHeight};

  table {
    border: none;
    border-spacing: 0 4px;
    width: 100%;
    border-collapse: separate;
    text-align: center;
    min-width: ${props => (props.minWidth ? props.minWidth + 'px' : '500px')};

    thead {
      font-size: 16px;
      line-height: 19px;
      font-style: normal;
      color: ${theme.color.text_chinh};
      th {
        font-weight: normal;
        padding-bottom: 16px;
      }
    }
    tbody {
      tr {
        height: 52px;
        td {
          border-top: ${b};
          border-bottom: ${b};
          max-width: 250px;

          &:nth-child(1) {
            border-left: ${b};
          }
          &:nth-last-child(1) {
            border-right: ${b};
          }
        }
      }
    }
  }
`;

export default Table;
