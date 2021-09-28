import React from 'react'

const CoinSearch = ({handelchange}) => {
    return (
        <div className="coin-search">
            <h1  className="text">Search a coin</h1>
            <form onChange={handelchange} >
                <input type="text" placeholder="Search..." className="coin-input"/>
            </form>
        </div>
    )
}

export default CoinSearch
