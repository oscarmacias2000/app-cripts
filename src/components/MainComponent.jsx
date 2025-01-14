import trx from "../assets/trx.svg";


export default function ComponentTable(){
  
let listUser = Array.from({length: 100}, (_, index)=> index + 1);
const imagenesCriptos = [
       'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400',
       'https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628',
       'https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409',
       'https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442',
       'https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661',
       'https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970',
       'https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193',
       'https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png?1696513206',
       'https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090',
       'https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694',
       'https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369',
       'https://assets.coingecko.com/coins/images/18834/standard/wstETH.png?1696518295',
       'https://assets.coingecko.com/coins/images/17980/standard/photo_2024-09-10_17.09.00.jpeg?1725963446',
       'https://assets.coingecko.com/coins/images/26375/standard/sui-ocean-square.png?1727791290',
       'https://assets.coingecko.com/coins/images/100/standard/fmpFRHHQ_400x400.jpg?1735231350',
       'https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800',
       'https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857',
       'https://assets.coingecko.com/coins/images/3688/standard/hbar.png?1696504364',
       'https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009',
       'https://assets.coingecko.com/coins/images/2518/standard/weth.png?1696503332',
       'https://static.coingecko.com/s/polkadot-73b0c058cae10a2f076a82dcade5cbe38601fad05d5e6211188f09eb96fa4617.gif',
       'https://assets.coingecko.com/coins/images/8418/standard/leo-token.png?1696508607',
       'https://assets.coingecko.com/coins/images/780/standard/bitcoin-cash-circle.png?1696501932',
       'https://assets.coingecko.com/coins/images/12504/standard/uniswap-logo.png?1720676669',
       'https://assets.coingecko.com/coins/images/11610/standard/icon_colour.png?1696511504',
       'https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400'
       // Agregar más imágenes según sea necesario
];

let Names =[
   'Bitcoin',
   'Ethereum',
   'XRP',
   'Tether',
   'BNB',
   'Solana',
   'Dogecoin',
   'USDC',
   'Cardano',
   'Lido Staked Ether',
   'TRON',
   'Avalanche',
   'Sui',
   'Toncoin',
   'Wrapped stETH',
   'Stellar',
   'Shib Inu',
   'Wrapped Bitcoin',
   'Chainlink',
   'Hedera',
   'WETH',
   'Polkadot',
   'LEO Token',
   'Bitcoin Cash',
   'Uniswap',
   'Bitget Token',
   'Litecoin'
];
let SubsNames =["ETH", "BTC","LTC", "TRX"];


    return(
       <div className="container">
           <div className="flex justify-center">
               <img src={trx}></img>
           </div>

    <div className="flex flex-wrap justify-center items-center m-auto text-gray-600 dark:bg-gray-300 h-full">
           <table className="w-full border-collapse">
          <thead>
          <tr>
            <th>#️⃣</th>
            <th className="flex w-100%">Nombre</th>
            <th>Precio</th>
            <th>1 h</th>
            <th>24 h</th>
            <th>Volumen en 24h</th>
            <th>Cap.Mercado</th>
            <th>Ultimos 7 Dias</th>
          </tr>
        </thead>
          
        <tbody>
          {listUser.map((id) => (
            <tr key={id}>
              <td>{id}</td>
              <td className="flex w-100%"><a href=""><img src={imagenesCriptos[id % imagenesCriptos.length]} alt="imagenes-criptos" className="w-10"></img>
                <span className="text-gray-800 hover:text-gray-600 text-base">{Names[id]} {SubsNames[id]} </span>
               </a>
              </td>
              <td>0.1% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
</svg></td>
              <td>94.672,49 US$</td>
              <td>0.7% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg></td> 
              <td>72.753.445.087 US$</td>
              <td>1.871.268.447.864 US$</td>
              <td className="flex w-100%"><a href="/"><img src="https://www.coingecko.com/coins/1/sparkline.svg"></img></a></td>
            </tr>
          ))}
        </tbody>
     
      </table>
           </div>
        <div className="flex  justify-center items-center w-10 border-collapse">
            <div className="flex-1 w-32">
            <div className="contenedor-img-items flex flex-wrap gap-3 mt-4 m-4 justify-center items-center  w-full relative">
                  <a href="/"><img src="https://assets.coingecko.com/markets/images/698/large/bybit_spot.png?1706864649" className="w-50 h-50 rounded-full transition-all duration-300 hover:scale-100 hover:bg-sky-500"></img> </a>
                  <img src="https://assets.coingecko.com/markets/images/589/large/h2oMjPp6_400x400.jpg?1706864542" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/540/large/2023-07-25_21.47.43.jpg?1706864507" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/25/large/htx.png?1721712842" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/60/large/gate_io_logo1.jpg?1706864280" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/61/large/kucoin.png?1706864282" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/29/large/kraken.jpg?1706864265" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/23/large/Coinbase_Coin_Primary.png?1706864258" className="w-50 h-50 rounded-full"></img>
                  <img src="https://assets.coingecko.com/markets/images/96/large/WeChat_Image_20220117220452.png?1706864283" className="w-50 h-50 rounded-full"></img>
              </div>
            </div>
        </div>
       </div>  
)}