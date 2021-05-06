/**
 *
 * Text
 * make by  huyro1212
 */
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import theme from 'styles/theme';
import React from 'react';

export const Warning = styled.p``;

export const SError = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  text-align: right;
  color: ${theme.color.red};
`;

export const ErrorMessage = ({
  message,
  messages,
}: {
  message: string;
  messages?: import('react-hook-form').MultipleFieldErrors | undefined;
}): any => <SError>{message}</SError>;
