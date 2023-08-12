import { useState } from "react";
import NftCard from "./components/nftcard";
import { fetchNFTs } from "./components/fetchNFTs";
import "./App.css";

const App = () => {
  const [owner, setOwner] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");

  return (
    <div>
      <header className=" py-24  mb-12 w-full   alchemy">
        <div className="flex-grow flex justify-end mr-12 mb-12"></div>
        <div className="flex flex-col items-center mb-12">
          <div className="mb-16 text-white text-center">
            <h1 className="text-5xl  font-bold font-body mb-2" align="center">
              MatriX NFT Explorer
            </h1>
            <center>
              <p>An inspector to find NFTs by owner and contract address </p>
            </center>
          </div>
          <div className=" ">
            <section className="addre">
              <input
                className="ss"
                size="100px"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Insert your wallet address"
              ></input>
            </section>
            {/*<input
              className="focus:outline-none rounded-sm py-2 px-3 w-full"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="Insert NFT Contract address (optional)"
            ></input>*/}
          </div>
          <div className="sereche">
            <center>
              <button
                //className="py-3 bg-white rounded-sm w-full hover:bg-slate-100"
                onClick={() => {
                  fetchNFTs(owner, contractAddress, setNFTs);
                }}
              >
                Search
              </button>
            </center>
          </div>
        </div>
      </header>

      <div className="fle">
        {NFTs ? (
          NFTs.map((NFT) => {
            return (
              <NftCard
                image={NFT.media[0].gateway}
                id={NFT.id.tokenId}
                title={NFT.title}
                address={NFT.contract.address}
                description={NFT.description}
                attributes={NFT.metadata.attributes}
              ></NftCard>
            );
          })
        ) : (
          <div>No NFTs found</div>
        )}
      </div>
    </div>
  );
};

export default App;
