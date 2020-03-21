import React from 'react';
import './App.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import img1 from "../src/img/1.png"
import img2 from "../src/img/2.png"
import img3 from "../src/img/3.png"
import logo from "../src/img/helpy logo.png"
import headLeft from "../src/img/headLeft.png"
import headRight from "../src/img/headRight.png"

import { isMobile} from "react-device-detect";
import ReactTooltip from 'react-tooltip'
import Zoom from "react-reveal/Zoom"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div>

      <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between"}}>
        {isMobile ? <div></div> : <img className="Left" style={{ width: "250px" }} src={headLeft}></img>}
        {isMobile ? <Zoom><img style={{ width: "350px" }} src={logo}></img></Zoom> : <Zoom><img style={{ width: "600px" }} src={logo}></img></Zoom>}
        {isMobile ? <div></div> : <img className="Right" style={{ width: "250px" }} src={headRight}></img>}
      </div>
      


      <Zoom><div style={{ display: 'flex', justifyContent: 'center'}}>
        <button data-tip="Comming soon" className="download">IOS</button>
        <button data-tip="Comming soon" className="download">ANDROID</button>
      </div></Zoom>

      <Zoom><h2 style={{ fontSize: "20px" }}><p style={{ margin: "0" }}>It is currently difficult to classify an infected person's contacts.</p></h2></Zoom>

      <ReactTooltip place="bottom" type="error" effect="solid" textColor='#2F2E41' backgroundColor='#FF6366' />

      <Zoom><h2 style={{ paddingBottom: "10px", paddingTop: "100px" }}>How does helpy work?</h2></Zoom>

      {isMobile ? 
        <div style ={{width: "70%", margin: "auto"}}>
          <div className="card"><img src={img1} /></div>
            <span class="caption">Helpy finds and stores people with whom you have contact.</span>
          <div className="card"><img src={img2} /></div>
            <span class="caption">If you are infected by SARS-CoV-2 hold the button.</span>
          <div className="cardNotification"><img src={img3} /></div>
            <span class="caption">Get notified if one of your contact persons is infected.</span>
        </div> 
        :
        
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', marginTop: "30px" }}>
          <div class="item">
            <Zoom><div className="card"><img src={img1} /></div></Zoom>
            <Zoom><span className="caption">Helpy finds and stores people with whom you have contact.</span></Zoom>
          </div>
          <div class="item">
            <Zoom><div className="card"><img src={img2} /></div></Zoom>
            <Zoom><span className="caption">If you are infected with SARS-CoV-2, press and hold the button.</span></Zoom>
          </div>
          <div class="item">
            <Zoom><div className="cardNotification"><img src={img3} /></div></Zoom>
            <Zoom><span className="caption">Get notified when one of your contacts is infected.</span></Zoom>
          </div>
        </div> 
        }

      <h2 style={{ paddingTop: "50px" }}>Timeline</h2>

      <div style={{ margin: "50px 0px 50px 0px" }}>
        <VerticalTimeline style ={{color: "black"}}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
            contentStyle={{ background: '#FF6366', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  #FF6366' }}
            date=""
            iconStyle={{ background: '#FF6366', color: '#fff' }}
            icon ={<FaRegCheckCircle/>}
          >
          <h3 className="vertical-timeline-element-title">First Version of Helpy</h3>
        </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2F2E41', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  #2F2E41' }}
            date=""
            iconStyle={{ background: '#2F2E41', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Contacts searching improvement</h3>
            <h4 className="vertical-timeline-element-subtitle">Comming soon</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2F2E41', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  #2F2E41' }}
            date=""
            iconStyle={{ background: '#2F2E41', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Are you in quarantine?</h3>
            <h4 className="vertical-timeline-element-subtitle">Let others buy groceries for you.</h4>
            <h4 className="vertical-timeline-element-subtitle">Comming soon</h4>
          </VerticalTimelineElement>
        </VerticalTimeline></div>
      

      
        <div style={{ backgroundColor: "#2F2E41", padding: "50px", borderRadius: "20px 20px 0px 0px", boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.65)"}}>

        <div style={{ display: "flex", justifyContent: 'center' }}><a className="bmc-button" target="_blank"
          href="https://www.buymeacoffee.com/AliKarami"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy us a coffee"></img><span style={{ marginLeft: '15px', fontSize: '28px' }}>Buy us a coffee</span></a></div>
        

        <div style={{ display: "flex", justifyContent: 'center' }}><a style={{ color: "white", padding: "40px 10px 10px 10px", fontSize: "17px" }}>Contact us: <a style ={{fontWeight: "bold"}}>ceastartup@gmail.com</a></a></div>
      </div>
    </div>
  );
}

export default App;