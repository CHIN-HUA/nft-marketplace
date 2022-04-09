import Test from "../test"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MyAssets from "../my-assets";
import TabNav from "./tabnav";
import TabContent from "./tabcontent";
import Tes from "../tes";
import Filter from "../filter";

import Web3 from "web3";
import { ethers } from 'ethers'
import axios from 'axios'
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider";

function UserInterface() {
    const [activeTab, setActiveTab] = useState("On sale");
    const [provider, change1] = useState();
    const [signer, change2] = useState();
    const [address, setAddress] = useState()
    const [condition, setCondition] = useState("")
    // const [account, setAccount] = useState('');

    // useEffect(() => {
    //     connect()
    //   }, [])

    useEffect(() => {
    if (window.web3) {
        connect();
    }
    }, []);
    
    // var provider;
    // var signer;

    const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
    })

    async function connect() {
        
        const connection = await web3Modal.connect()
        // provider = new ethers.providers.Web3Provider(connection)
        // signer = provider.getSigner()
        const prov = new ethers.providers.Web3Provider(connection)
        change1(prov)
        const sig = prov.getSigner()
        change2(sig)

        setAddress(await sig.getAddress());
    }

    async function disconnect() {
        await web3Modal.clearCachedProvider()
        change1(null)
        change2(null)
        window.location.reload();
    }

    if(signer === null && provider === null)
        return <h3>did'n connect</h3>
    else{
        return (
            <>
            <h3>wallet connected: {address}</h3>
            <button onClick={()=>disconnect()}>disconnect</button>
            <div>
                <ul>
                    <TabNav title="Items" id="Items" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNav title="On sale" id="On sale" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabNav title="Offers" id="Offers" activeTab={activeTab} setActiveTab={setActiveTab} />
                </ul>
                <Filter pattern={activeTab} setActivefilter={setCondition} />
                <a>{condition}</a>
                <div>
                    {/* <Filter /> */}
                </div>
                <div>
                    <TabContent id="Items" activeTab={activeTab}>
                        <MyAssets signer={signer} provider={provider}/>
                        {/* <MyAssets/> */}
                    </TabContent>
                    <TabContent id="On sale" activeTab={activeTab}>
                        <Test/>
                    </TabContent>
                    <TabContent id="Offers" activeTab={activeTab}>
                        <Tes signer={signer} provider={provider}/>
                        {/* <Tes/> */}
                    </TabContent>
                </div>
            </div>
            </>
            )
    }
}
export default UserInterface