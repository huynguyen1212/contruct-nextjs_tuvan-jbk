import { TSelect } from 'src/configs/types'
import React from 'react'
import styled from 'styled-components'
import { Select } from '..'

const options = Array.from({ length: 5 }, (_, i) => ({
  label: String((i + 1) * 5),
  value: String((i + 1) * 5),
}))

interface TShowSelectProps {
  onChange: (val: TSelect | null) => void
  defaultValue?: any
}

export default function ShowSelect({ onChange, defaultValue }: TShowSelectProps) {
  return <SSelect options={options} defaultValue={defaultValue} onChange={onChange} />
}

const SSelect = styled(Select)`
  min-width: 78px;
  margin-left: 12px;
  & > div {
    border: 1px solid #e3e8f0;
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`
