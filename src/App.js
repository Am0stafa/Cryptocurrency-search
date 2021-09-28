/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect, useContext, useState} from 'react'
import axios from 'axios'
import './index.scss'
import { CoinContext } from './context/CoinContext'
import CoinSearch from './components/CoinSearch'
import CoinsList from './components/CoinsList'

const App = () => {
  const {coin, setCoin} = useContext(CoinContext)
  const [search , setSearch] = useState('');
  const [targetval , setTargetval] = useState('');
  
                         // 3 ways to fetch data //                                                       
  // useEffect(() => {
  // axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false').then(response => {
  //   setCoin(response.data)
  //   console.log(coin)
  // }).catch(err => {console.log(err)});
  // },[]);
  
  // useEffect(() => {
  //     const fetchpost = async ()=>{
  //       const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false');
  //      const data = await response.json();
  //      setCoin(data);
  //      console.log(coin)
  //     }
  //     fetchpost();
  // },[])
  
  useEffect(() =>{
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      .then(response => response.json())
      .then(data =>{
       setCoin(data);
       console.log(coin)
      })
  
  },[])
  
  const handelchange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  

  const searchvalue = coin.filter((coin) => 
  coin.name.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div className="coin-app">
        <CoinSearch handelchange={handelchange}/>
        
        <CoinsList 
        searchvale={searchvalue}
        />
    </div>
  )
}

export default App
