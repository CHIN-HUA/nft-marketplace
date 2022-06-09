import React, { useEffect, useState, useMemo } from 'react'
import { ethers } from 'ethers'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Music from '../music'

import {
  nftaddress, nftmarketaddress
} from '../../config'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

const Collection = () => {
  const router = useRouter()
  // const { provider } = useWeb3()
  const collectionId = router.query.collectionid
  // const [collection, setCollection] = useState({})
  // const [nfts, setNfts] = useState([])
  // const [listings, setListings] = useState([])
  const [nfts, setNfts] = useState([])
  const [collec, setCol] = useState([])

  //
  useEffect(() => {
    loadNFTs(),loadnft()
  }, [nfts])

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
    setNfts(items)
  
  // const a = nfts.filter(i => (i.name==collectionId))
  // console.log(a)
  // console.log(nfts)
  // setCol(a) 
  // tes('s')
  }
  console.log(nfts)
  async function loadnft() {
    // console.log(nfts)
    const a = nfts.filter(i => (i.tokenId==collectionId))
    setCol(a) 
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
  // console.log(nfts)
  // const nftModule = useMemo(() => {
  //   if (!provider) return

  //   const sdk = new ThirdwebSDK(
  //     provider.getSigner(),
  //     'https://rinkeby.infura.io/v3/a464b9152d8c466c8a94a514fce8e837'
  //   )
  //   return sdk.getNFTModule(collectionId)
  // }, [provider])

  // // get all NFTs in the collection
  // useEffect(() => {
  //   if (!nftModule) return
  //   ;(async () => {
  //     const nfts = await nftModule.getAll()

  //     setNfts(nfts)
  //   })()
  // }, [nftModule])

  // const marketPlaceModule = useMemo(() => {
  //   if (!provider) return

  //   const sdk = new ThirdwebSDK(
  //     provider.getSigner(),
  //     'https://rinkeby.infura.io/v3/a464b9152d8c466c8a94a514fce8e837'
  //   )
  //   return sdk.getMarketplaceModule(
  //     '0x93A771F7ce845C33381f677489cF21a5964EDD0b'
  //   )
  // }, [provider])

  // // get all listings in the collection
  // useEffect(() => {
  //   if (!marketPlaceModule) return
  //   ;(async () => {
  //     setListings(await marketPlaceModule.getAllListings())
  //   })()
  // }, [marketPlaceModule])

  // const fetchCollectionData = async (sanityClient = client) => {
  //   const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
  //     "imageUrl": profileImage.asset->url,
  //     "bannerImageUrl": bannerImage.asset->url,
  //     volumeTraded,
  //     createdBy,
  //     contractAddress,
  //     "creator": createdBy->userName,
  //     title, floorPrice,
  //     "allOwners": owners[]->,
  //     description
  //   }`

  //   const collectionData = await sanityClient.fetch(query)

  //   console.log(collectionData, '🔥')

  //   // the query returns 1 object inside of an array
  //   await setCollection(collectionData[0])
  // }

  // useEffect(() => {
  //   fetchCollectionData()
  // }, [collectionId])

  // console.log(router.query)
  // console.log(collectionId)
  // console.log(collectionId=='a')
  // console.log(collec)
  console.log(collec)

  // console.log(nfts)
  return (
    <>
    <div className="overflow-hidden">
      
    </div>
    <div>
      
          {
      
            collec.map((nft, i) => (

              
              <div key={i}>
                <p style={{ height: '64px' }} className="text-2xl font-semibold">name: {nft.name}</p>
                image:
                <img src={nft.image} />
                music:
                <Music musicsrc={nft.music}/>
                <div className="p-4">
                
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    description: {nft.description}
                  </div>
                </div>
                <div>
                  price: {nft.price} ETH
                </div>
              </div>
            // <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
            ))
  
            
          }
      
          {/* {
            

              
              <div key={i}>
                <p style={{ height: '64px' }} className="text-2xl font-semibold">name: {collec.name}</p>
                image:
                <img src={collec.image} />
                music:
                <Music musicsrc={collec.music}/>
                <div className="p-4">
                
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    description: {collec.description}
                  </div>
                </div>
                <div>
                price: {collec.price} ETH
                </div>
              </div>
            
            
          } */
          }
          {collec.price}
          {collec.name}
          {/* <img src={collec.image} /> */}
        {/* <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button> */}
      </div>
      
    </>
  )
  
}

export default Collection