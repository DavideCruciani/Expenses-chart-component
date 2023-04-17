import React, {useState} from 'react'
import Logo from '../assets/logo.svg'
import MoneySpent from './MoneySpent';

const Card = (props) => {

  const moneyData = props.data;
  const [money, setMoney] = useState("")
  const [hover, setHover] = useState(false)
  const [dayID, setDayID] = useState("")

  const showMoneySpent = (id) => {
    setMoney(moneyData[id].amount)
    setHover(true)
    setDayID(id)
  }

  const HideMoney = () => {
    setHover(false)
  }
  return (
    <div className='flex flex-col w-full h-full md:min-w-[500px] gap-8'>

      <div className='flex bg-[var(--Soft-red)] p-8 rounded-2xl justify-between items-center'>

        <div>
          <p className='text-white mb-2'>My balance</p>
          <p className='text-white text-3xl font-bold'>$921.48</p>
        </div>

        <div>
          <img src={Logo} alt="/" />
        </div>

      </div>

      <div className='flex flex-col bg-[var(--Very-pale-orange)] p-8 rounded-2xl min-h-[450px]'>
        <h1 className='font-bold text-3xl'>Spending - Last 7 days</h1>
        <div className='flex gap-3 md:gap-5 items-end w-full h-full'>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[20%] rounded-md cursor-pointer hover:opacity-70 relative' id='0' onMouseLeave={HideMoney}  onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 0 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[0].day}</p>
          </div>
          
          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[40%] rounded-md cursor-pointer hover:opacity-70 relative' id='1' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 1 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[1].day}</p>
          </div>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Cyan)] w-full h-[60%] rounded-md cursor-pointer hover:opacity-70 relative' id='2' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 2 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[2].day}</p>
          </div>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[35%] rounded-md cursor-pointer hover:opacity-70 relative' id='3' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 3 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[3].day}</p>
          </div>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[25%] rounded-md cursor-pointer hover:opacity-70 relative' id='4' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 4 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[4].day}</p>
          </div>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[50%] rounded-md cursor-pointer hover:opacity-70 relative' id='5' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 5 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[5].day}</p>
          </div>

          <div className='h-full w-full flex flex-col items-center justify-end'>
            <div className='bg-[var(--Soft-red)] w-full h-[30%] rounded-md cursor-pointer hover:opacity-70 relative' id='6' onMouseLeave={HideMoney} onMouseOver={(e) => {showMoneySpent(e.target.id)}}>
              {hover && dayID == 6 ? <MoneySpent money={money} /> : null}
            </div>
            <p className='mt-2 text-[var(--Medium-brown)]'>{moneyData[6].day}</p>
          </div>

        </div>

        <hr className='my-8' />

        <div className='flex justify-between items-end'>
          <div>
            <p className='text-[var(--Medium-brown)]'>Total this month</p>
            <p className='text-[var(--Dark-brown)] text-4xl font-bold'>$478.33</p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-[var(--Dark-brown)] font-bold'>+2.4%</p>
            <p className='text-[var(--Medium-brown)]'>from last month</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card