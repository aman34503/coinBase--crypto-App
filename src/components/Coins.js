import React from 'react'
import CoinItem from './Coinitem';

import './coin.css'

const Coins = (props) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>

        <p>S.no</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market Cap.</p>
        </div>
        {props.coins.map(coins => {
          return (
            <CoinItem coins = {coins} key={coins.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Coins