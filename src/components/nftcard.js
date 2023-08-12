import "./nftcard.css";
const NftCard = ({ image, id, title, address, description, attributes }) => {
  return (
    <div className="ad">
      <img className="hl" key={id} src={image}></img>
      <div className="bv">
        <div className="hj">
          <div className="af">
            <h5 className="text">{title}</h5>
            <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
          </div>
          <div className="fl">
            <a
              target="_blank"
              className="tsd"
              href={`https://etherscan.io/token/${address}`}
            >{`${address.slice(0, 4)}...${address.slice(
              address.length - 4
            )}`}</a>
          </div>
        </div>
        <section className="desc">
          <p>{description ? description.slice(0, 200) : "No Description"}</p>
        </section>
      </div>
      <div className="ite ">
        {attributes?.length > 0 &&
          attributes.map((attribute) => {
            return (
              <div className="jk">
                <p className="aad">{attribute.trait_type}:</p>
                <p className="sssd">{attribute.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NftCard;
