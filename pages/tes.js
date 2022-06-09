import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import Music from './music'



import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import { id } from 'ethers/lib/utils';

export default function tes({provider,signer,condition}) {
  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [chosenone, setchose] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])

//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider, // required
//       options: {
//         infuraId: "092d09dc24d1486f87f0fda9cc05a18f" // required
//       }
//     },
//     WalletLink:{
//       package: WalletLink,
//       options: {
//         appName: "N",
//         infuraId: "092d09dc24d1486f87f0fda9cc05a18f",
//         rpc:"",
//         chainId: 4,
//         applogoUrl: null,
//         darkMode: true
//       }
//     },
//   };
//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider, // required
//       options: {
//         infuraId: "INFURA_ID" // required
//       }
//     }
//   };
  
//   const web3Modal = new Web3Modal({
//     network: "mainnet",
//     cacheProvider: true,
//     providerOptions,
//     theme: {
//         background: "rgb(39, 49, 56)",
//         main: "rgb(199, 199, 199)",
//         secondary: "rgb(136, 136, 136)",
//         border: "rgba(195, 195, 195, 0.14)",
//         hover: "rgb(16, 26, 32)"
//       }
//   })

  async function compareprice(a, b) {
    return a.price > b.price;
  }

  async function loadNFTs() {

    // const web3Modal = new Web3Modal({
    //     network: "mainnet",
    //     cacheProvider: true,
    //   })
    
    // const connection = await web3Modal.connect()
    // const provider = new ethers.providers.Web3Provider(connection)
    // const signer = provider.getSigner()


    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchItemsCreated()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        sold: i.sold,
        image: meta.data.image,
        music: meta.data.music,
      }
      return item
    }))
    items.sort(compareprice)
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter(i => i.sold)
    setSold(soldItems)
    setNfts(items)
    setLoadingState('loaded')
    const choseItems = items.filter(i => i.music)
    setchose(choseItems)
  }
  if (loadingState === 'loaded' && !nfts.length)
  {
    return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>)
  }
  if (loadingState === 'loaded' && !chosenone.length && condition === "music")
  {
    return (<h1 className="py-10 px-20 text-3xl">No music assets</h1>)
  }
  if(loadingState === 'loaded' && chosenone.length && condition === "music")
  {
    return (
    <div className="px-4">
        <div>
          <h2 className="text-2xl py-2">music</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {
              chosenone.map((nft, i) => (
                <div key={i} className="border shadow rounded-xl overflow-hidden">
                  <img src={nft.image} className="rounded" />
                  <Music musicsrc={nft.music}/>
                  <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
    )
  }
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl py-2">Items Created</h2>{chosenone.length}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <Music musicsrc={nft.music}/>
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
        <div className="px-4">
        {
          Boolean(sold.length) && (
            <div>
              <h2 className="text-2xl py-2">Items sold</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {
                  sold.map((nft, i) => (
                    <div key={i} className="border shadow rounded-xl overflow-hidden">
                      <img src={nft.image} className="rounded" />
                      <Music musicsrc={nft.music}/>
                      <div className="p-4 bg-black">
                        <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
        </div>
     </div>
  )
}