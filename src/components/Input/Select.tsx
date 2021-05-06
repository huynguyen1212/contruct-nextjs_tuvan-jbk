import React from 'react';
import S, { Props } from 'react-select';
import { stylesCustom } from './SelectBase';

export default function Select(props: Props) {
  return <S {...props} styles={stylesCustom()} />;
}
