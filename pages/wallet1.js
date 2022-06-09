import Web3Modal from "web3modal";

export default function Wallet (){
    const web3Modal = new Web3Modal({
        network: "mainnet",
        cacheProvider: true, // optional
      });
      return <div>ok</div>;
}
