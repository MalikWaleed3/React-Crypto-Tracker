import React from 'react'

const Coin = ({ name, image, symbol, price, volume}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img  src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>

            </div>
            <div className='coin-data'></div>
            <p className='coin-price'>SEK{price}</p>
            <p className='coin-volume'>SEK{volume.toLocaleString()}</p>

        </div>

    </div>
  )
}

export default Coin