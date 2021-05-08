import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuthenticationStore } from './store/selecters'

export default function Authentication() {
  const [test, setTest] = useState('hi')
  const bay = useSelector(selectAuthenticationStore)

  console.log(test)
  const handleClick = () => {
    setTest(`${bay}`)
    console.log(test)
  }

  return (
    <div>
      authentication
      <button
        onClick={() => {
          handleClick()
        }}
      >
        click
      </button>
    </div>
  )
}
