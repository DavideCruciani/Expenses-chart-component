import React from 'react'

const MoneySpent = ({ money }) => {
  return (
    <div className='bg-[var(--Dark-brown)] text-sm md:text-base text-white rounded mb-2 p-1 absolute bottom-[100%] left-1/2 -translate-x-1/2'>${money}</div>
  )
}

export default MoneySpent