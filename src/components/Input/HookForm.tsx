// icon
import React from 'react';
import Input from './index';
import { Controller, ControllerProps } from 'react-hook-form';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import Select from './Select';
import { SelectComponentsProps } from 'react-select/src/Select';

type PropsInputNumberFormat = {
  controller: ControllerProps<any>;
  numberFormat: NumberFormatProps;
};

const InputNumberFormat = ({
  controller,
  numberFormat,
}: PropsInputNumberFormat) => (
  <Controller
    {...controller}
    render={({ name, onChange, value }) => (
      <NumberFormat
        onValueChange={obj => onChange(obj.floatValue)}
        value={value}
        name={name}
        customInput={Input}
        {...numberFormat}
      />
    )}
  />
);

type PropsSelect = {
  controller: ControllerProps<any>;
  select: SelectComponentsProps;
};

const InputSelect = ({ controller, select }: PropsSelect) => (
  <Controller
    {...controller}
    render={props => <Select {...props} {...select} />}
  />
);

export default { InputNumberFormat, InputSelect };
