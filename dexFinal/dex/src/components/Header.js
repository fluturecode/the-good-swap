import React from "react";
import Logo from "/Users/Fluture/Desktop/dexFinal/dexFinal/dex/src/goodswap.png";
import Eth from "/Users/Fluture/Desktop/dexFinal/dexFinal/dex/src/sol.png";
import { Link } from "react-router-dom";

function Header(props) {

  const {address, isConnected, connect} = props;

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" style={{ width: "120px", height: "120px"}} />
        <Link to="/" className="link">
          <div className="headerItem" style={{fontSize: 40}}>The Good Swap</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Solana
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
