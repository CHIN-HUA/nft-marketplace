import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Link from 'next/link'
import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

// const Web3Modal = window.Web3Modal.default;
// const WalletConnectProvider = window.WalletConnectProvider.default;
// const Fortmatic = window.Fortmatic;
// const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;

export default function Ne() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [state, changestate] = useState('not-login')
  useEffect(() => {
    loadNFTs()
  }, [])
  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    network: "mainnet",
    // providerOptions, // required
    // disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });


  async function loadNFTs() {
    // const web3Modal = new Web3Modal({
    //   network: "mainnet",
    //   cacheProvider: true,
    // })
    const connection = await web3Modal.connect()
    provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    // changestate('login')
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()
    
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
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function chan() {
    window.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('[role="tab"]');
        const tabList = document.querySelector('[role="tablist"]');
    
        // Add a click event handler to each tab
        tabs.forEach(tab => {
        tab.addEventListener('click', changeTabs);
        });
    
        // Enable arrow navigation between tabs in the tab list
        let tabFocus = 0;
    
        tabList.addEventListener('keydown', e => {
        // Move right
        if (e.keyCode === 39 || e.keyCode === 37) {
            tabs[tabFocus].setAttribute('tabindex', -1);
            if (e.keyCode === 39) {
            tabFocus++;
            // If we're at the end, go to the start
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
            // Move left
            } else if (e.keyCode === 37) {
            tabFocus--;
            // If we're at the start, move to the end
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
            }
    
            tabs[tabFocus].setAttribute('tabindex', 0);
            tabs[tabFocus].focus();
        }
        });
    });
  }
  async function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
  
    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute('aria-selected', false));
  
    // Set this tab as selected
    target.setAttribute('aria-selected', true);
  
    // Hide all tab panels
    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.setAttribute('hidden', true));
  
    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
  }
  async function Logout(){
    if(provider.close) {
      await provider.close();
  
      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      await web3Modal.clearCachedProvider();
      provider = null;
    }
  }
  if (loadingState === 'loaded' && !nfts.length) return (

  <div>
    
    <div>
      <button>On sale</button>
      &nbsp;&nbsp;
      <button>Items</button>
      &nbsp;&nbsp;
      <button>Offers</button>
      &nbsp;&nbsp;
      <Link href="/ne">
            <a className="mr-6 text-pink-500">
              Activities
            </a>
      </Link>
      &nbsp;&nbsp;
      <button>Activities</button>
      &nbsp;&nbsp;
      <button onClick={Logout}>Logout</button>
    </div>
    <div class="tabs">
        <div role="tablist" aria-label="Sample Tabs">
            <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0" onClick={changeTabs}>
                First Tab
                </button>
            <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1" onClick={changeTabs}>
                Second Tab
                </button>
            <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1" onClick={changeTabs}>
                Third Tab
                </button>
        </div>
        <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
            <p>Content for the first panel</p>
        </div>
        <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
            <p>Content for the second panel</p>
        </div>
        <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
            <p>Content for the third panel</p>
        </div>
        </div>
    <h1 className="py-10 px-20 text-3xl">No assets owned</h1>
  </div>
  )
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <audio
                controls
                src={nft.music}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
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