import React from 'react';
import './App.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import img1 from "../src/img/1.png"
import img2 from "../src/img/2.png"
import img3 from "../src/img/3.png"
import { isMobile} from "react-device-detect";
import ReactTooltip from 'react-tooltip'

function App() {
  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1>helpy</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>STAY <a className="red">HEALTHY</a> WITH <a className="red">HELPY</a></h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <button data-tip="Comming soon" className="download">IOS</button>
        <button data-tip="Comming soon" className="download">ANDROID</button>
      </div>

      <ReactTooltip place="bottom" type="error" effect="solid" textColor='#2F2E41' backgroundColor='#FF6366' />

      <h2 style={{paddingBottom: "10px"}}>How does helpy work?</h2>

      {isMobile ? 
        <div style ={{width: "70%", margin: "auto"}}>
          <div className="card"><img src={img1} /></div>
          <span class="caption">Contact persons will be added when you walk around. </span>
          <div className="card"><img src={img2} /></div>
          <span class="caption">If you are infected by SARS-CoV-2 hold the button.</span>
          <div className="cardNotification"><img src={img3} /></div>
          <span class="caption">Get notified if one of your contact persons is infected.</span>
        </div> 
        :
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', marginTop: "30px" }}>
          <div class="item">
            <div className="card"><img src={img1} /></div>
            <span className="caption">Contacts are added when you walk around.</span>
          </div>
          <div class="item">
            <div className="card"><img src={img2} /></div>
            <span className="caption">If you are infected with SARS-CoV-2, press and hold the button.</span>
          </div>
          <div class="item">
            <div className="cardNotification"><img src={img3} /></div>
            <span className="caption">Get notified when one of your contacts is infected.</span>
          </div>
        </div> 
        }
      
      <div style={{ display: "flex", justifyContent: 'center' }}><a style={{ color: "#2F2E41", padding: "10px", fontSize: "20px" }}>Donate: <a href="https://paypal.me/pools/c/8ny5af3B7u" target="_blank" style={{ fontWeight: "bold" }}>www.paypal.com</a></a></div>

      <div style={{ display: "flex", justifyContent: 'center' }}><a style={{ color: "#2F2E41", padding: "10px", fontSize: "20px" }}>Contact us: <a style ={{fontWeight: "bold"}}>ceastartup@gmail.com</a></a></div>
      
    </div>
  );
}

export default App;