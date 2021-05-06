/**
 *
 * config for react-select
 *
 */

import { CSSProperties } from 'react';

const heightStylesDefault = { height: '40px', minHeight: '40px' };

const stylesCustom = (heightStylesProps?: CSSProperties) => {
  const heightStyles = heightStylesProps || heightStylesDefault;

  return {
    control: (provided: any) => ({
      ...provided,
      borderColor: '#c0cce0',
      color: '#043468',
      ...heightStyles,
    }),

    valueContainer: (provided: any) => ({
      ...provided,
      ...heightStyles,
      padding: '0 6px',
    }),

    input: (provided: any) => ({
      ...provided,
      margin: '0px',
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),

    indicatorsContainer: (provided: any) => ({
      ...provided,
      ...heightStyles,
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: '#043468',
      minWidth: '100%'
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 20,
    }),
  };
};

export { stylesCustom };
