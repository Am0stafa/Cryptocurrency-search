import React from 'react'
import Coin from './Coin'

const CoinsList = ({searchvale}) => {
    return (
        <div>
        
        {
            searchvale.map((coin)=>{
            return(
            <Coin  
                    key={coin.id}
                    name={coin.name}
                    img={coin.image}
                    symbol={coin.symbol}
                    volume={coin.market_cap}
                    price={coin.current_price} 
                    pricechange={coin.price_change_percentage_24h}
                    supply={coin.total_supply}
                    />
            )
            } )
        }
        
        </div>
    )
}

export default CoinsList
