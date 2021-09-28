import React from 'react'
import './Coin.styles.scss'

const Coin = ({name, img, symbol, price, volume, pricechange,supply}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={img} alt="coin" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                     <p className="coin-price">${price}</p>
                     <p className="coin-volume">${volume.toLocaleString()}</p>
                     
                     {
                        pricechange<0? ( <p className="coin-percentage red">{pricechange.toFixed(2)}%</p>  ) : ( <p className="coin-percentage green">{pricechange.toFixed(2)}%</p>  )
                     }
                     {
                     supply? (<p  className="coin-marketcap">{supply} coins</p>):(<p  className="coin-marketcap">NaN</p>)
                     }
                </div>
            </div>
        </div>
    )
}

export default Coin
