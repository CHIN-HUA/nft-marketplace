import { ethers } from 'ethers'
<<<<<<< Updated upstream
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
=======
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Music from './music'
import Filter from './filter'


import Darkmode from 'darkmode-js';

const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();

>>>>>>> Stashed changes

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
<<<<<<< Updated upstream
=======
// import { Link } from 'react-router-dom'
>>>>>>> Stashed changes

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
<<<<<<< Updated upstream
  useEffect(() => {
    loadNFTs()
  }, [])
=======
  const [activeTab, setActiveTab] = useState("Home");
  const [state, setTabstate] = useState(0);
  const [condition, setCondition] = useState("")
  const [chosenone, setchose] = useState([])

  useEffect(() => {
    loadNFTs()
  }, [])
  function compareNumbers(a, b) {
    return a.price > b.price;
  }
>>>>>>> Stashed changes
  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        music: meta.data.music,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
<<<<<<< Updated upstream
    setNfts(items)
    setLoadingState('loaded') 
=======
    items.sort(compareNumbers)
    setNfts(items)
    setLoadingState('loaded')
    const choseItems = items.filter(i => i.music)
    setchose(choseItems)
>>>>>>> Stashed changes
  }
  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
    const transaction = await contract.sellMarketItem(nftaddress, nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
<<<<<<< Updated upstream
  return (
=======
  if (loadingState === 'loaded' && !chosenone.length && condition === "music")
  {
    return (
    <>
      <Filter pattern={activeTab} prestate={state} setState={setTabstate} setActivefilter={setCondition} />
      <div>
      <h1 className="py-10 px-20 text-3xl">
      No music assets</h1>
      </div>
      </>
    )
  }
  return (
    <>
    <Filter pattern={activeTab} prestate={state} setState={setTabstate} setActivefilter={setCondition} />
    {condition}
>>>>>>> Stashed changes
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
<<<<<<< Updated upstream
                <img src={nft.image} />
                <audio
                controls
                src={nft.music}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
=======
                <Link href={{pathname: '/collections/'+nft.tokenId, query: { keyword: 'this way' }}}>
                <img src={nft.image} />
                </Link>
                <Music musicsrc={nft.music}/>
>>>>>>> Stashed changes
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
=======
    </>
>>>>>>> Stashed changes
  )
}