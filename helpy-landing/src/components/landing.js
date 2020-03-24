import React, { useState } from 'react';
import './../App.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import img1 from "../../src/img/1.png"
import img2 from "../../src/img/2.png"
import img3 from "../../src/img/3.png"
import img1en from "../../src/img/1 en.png"
import img2en from "../../src/img/2 en.png"
import img3en from "../../src/img/3 en.png"
import logo from "../../src/img/helpy logo.png"
import headLeft from "../../src/img/headLeft.png"
import headRight from "../../src/img/headRight.png"

import { isMobile } from "react-device-detect";
import ReactTooltip from 'react-tooltip'
import Zoom from "react-reveal/Zoom"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "video-react/dist/video-react.css";
import { Player } from 'video-react';

import {

    Link
} from "react-router-dom";

function Landing() {

    const [language, setlanguage] = useState("de");
    const [apk, setApk] = useState(false);

    const style =
    {
        t:
        {
            padding: '10px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#FF6366',
            borderRadius: '20px',
            width: '120px',
            margin: '10px',
            marginLeft: '5px',
            marginRight: '5px',
            textAlign: 'center',
            color: '#2F2E41',
            border: 'none',
            textDecoration: 'none',
            outline: 'none'
        },
        f:
        {
            padding: '10px',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#2F2E41',
            borderRadius: '20px',
            width: '120px',
            margin: '10px',
            marginLeft: '5px',
            marginRight: '5px',
            textAlign: 'center',
            color: '#FF6366',
            border: 'none',
            textDecoration: 'none',
            outline: 'none',
            opacity: '0.5'
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setlanguage("de")} style={language == "de" ? style.t : style.f} className="language">Deutsch</button>
                <button onClick={() => setlanguage("en")} style={language == "en" ? style.t : style.f} className="language">English</button>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {isMobile ? <div></div> : <img className="Left" style={{ width: "250px" }} src={headLeft}></img>}
                {isMobile ? <Zoom><img style={{ width: "350px" }} src={logo}></img></Zoom> : <Zoom><img style={{ width: "600px" }} src={logo}></img></Zoom>}
                {isMobile ? <div></div> : <img className="Right" style={{ width: "250px" }} src={headRight}></img>}
            </div>



            <Zoom><div style={{ display: 'flex', justifyContent: 'center' }}>
                <button data-tip="Comming soon" className="download">IOS</button>
                <button data-tip="Comming soon" className="download">ANDROID</button>
                
            </div></Zoom>
            <Zoom><div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setApk(!apk)} className="download2" style={{ width: '250px', marginTop: "-30px" }}>{language == "de" ? <a href='/Helpy-78fcdd7e9ecb49b7b388a99a0f16aaa7-signed.apk' download>Download Apk für Android</a> : <a href='/Helpy-78fcdd7e9ecb49b7b388a99a0f16aaa7-signed.apk' download>Download APK for Android</a>}</button>
                
            </div></Zoom >
            {apk ? <div style={{ maxWidth: "400px", margin: '0 auto', marginBottom: "50px" }}>
                
                {language == "de" ? <h2 style={{ paddingBottom: "20px" }}>Wie installiert man eine APK?</h2> : <h2 style={{ paddingBottom: "20px" }}>How to install an APK?</h2>}
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div> 
            : 
            <div></div>}
            

            <Zoom><h2 style={{ fontSize: "20px" }}>{language == "de" ? <p style={{ margin: "0" }}>
                Es ist schwierig und mühsam die Personen auszusortieren, mit welchen die
        infizierte Person Kontakt hatte.</p> : <p style={{ margin: "0" }}>It is currently difficult to classify an infected person's contacts.</p>}</h2></Zoom>

            <ReactTooltip place="top" type="error" effect="solid" textColor='#2F2E41' backgroundColor='#FF6366' />

            <Zoom><h2 style={{ paddingBottom: "10px", paddingTop: "100px" }}>{language == "de" ? <div>
                Wie funktioniert helpy?</div> : <div>How does helpy work?</div>}</h2></Zoom>

            {isMobile ?
                <div style={{ width: "70%", margin: "auto" }}>
                    <div className="card">{language == "de" ? <img src={img1} /> : <img src={img1en} /> }</div>
                    {language == "de" ? <span class="caption">Helpy findet und speichert Personen, mit denen du Kontakt hast.</span> : <span class="caption">Helpy finds and stores people with whom you have contact.</span>}
                    <div className="card">{language == "de" ? <img src={img2} /> : <img src={img2en} />}</div>
                    {language == "de" ? <span class="caption">Wenn du mit SARS-CoV-2 infiziert bist, halte den Knopf gedrückt.
                    </span> : <span class="caption">If you are infected by SARS-CoV-2 hold the button.</span>}
                    <div className="cardNotification">{language == "de" ? <img src={img3} /> : <img src={img3en} />}</div>
                    {language == "de" ? <span class="caption">Du bekommst eine Nachricht, wenn einer deiner Kontaktpersonen infiziert ist.</span> : <span class="caption">Get notified if one of your contact persons is infected.</span>}
                </div>
                :

                <div style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', marginTop: "30px" }}>
                    <div class="item">
                        <Zoom><div className="card">{language == "de" ? <img src={img1} /> : <img src={img1en} />}</div></Zoom>
                        {language == "de" ? <span className="caption">Helpy findet und speichert Personen, mit denen du Kontakt hast.</span> : <span className="caption">Helpy finds and stores people with whom you have contact.</span>}
                    </div>
                    <div class="item">
                        <Zoom><div className="card">{language == "de" ? <img src={img2} /> : <img src={img2en} />}</div></Zoom>
                        {language == "de" ? <span className="caption">Wenn du mit SARS-CoV-2 infiziert bist, halte den Knopf gedrückt.</span> : <span className="caption">If you are infected with SARS-CoV-2, press and hold the button.</span>}
                    </div>
                    <div class="item">
                        <Zoom><div className="cardNotification">{language == "de" ? <img src={img3} /> : <img src={img3en} />}</div></Zoom>
                        {language == "de" ? <span className="caption">Du bekommst eine Nachricht, wenn einer deiner Kontaktpersonen infiziert ist.</span> : <span className="caption">Get notified when one of your contacts is infected.</span>}
                    </div>
                </div>
            }

            <h2 style={{ paddingTop: "50px" }}>Timeline</h2>

            <div style={{ margin: "50px 0px 50px 0px" }}>
                <VerticalTimeline style={{ color: "black" }}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FF6366', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FF6366' }}
                        date=""
                        iconStyle={{ background: '#FF6366', color: '#fff' }}
                        icon={<FaRegCheckCircle />}
                    >
                        {language == "de" ? <h3 className="vertical-timeline-element-title">Erste Version von Helpy</h3> : <h3 className="vertical-timeline-element-title">First Version of Helpy</h3>}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2F2E41', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2F2E41' }}
                        date=""
                        iconStyle={{ background: '#2F2E41', color: '#fff' }}
                    >
                        {language == "de" ? <h3 className="vertical-timeline-element-title">
                            Verbesserung der Kontaktsuche</h3> : <h3 className="vertical-timeline-element-title">Contacts searching improvement</h3>}
                        {language == "de" ? <h4 className="vertical-timeline-element-subtitle">Kommt bald</h4> : <h4 className="vertical-timeline-element-subtitle">Comming soon</h4>}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2F2E41', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2F2E41' }}
                        date=""
                        iconStyle={{ background: '#2F2E41', color: '#fff' }}
                    >
                        {language == "de" ? <h3 className="vertical-timeline-element-title">
                            Bist du in Quarantäne?</h3> : <h3 className="vertical-timeline-element-title">Are you in quarantine?</h3>}
                        {language == "de" ? <h4 className="vertical-timeline-element-subtitle">
                            Lass andere für dich Lebensmittel kaufen.</h4> : <h4 className="vertical-timeline-element-subtitle">Let others buy groceries for you.</h4>}
                        {language == "de" ? <h4 className="vertical-timeline-element-subtitle">Kommt bald</h4> : <h4 className="vertical-timeline-element-subtitle">Comming soon</h4>}
                    </VerticalTimelineElement>
                </VerticalTimeline></div>



            <div style={{ backgroundColor: "#2F2E41", padding: "50px", borderRadius: "20px 20px 0px 0px", boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.65)" }}>

                <div style={{ display: "flex", justifyContent: 'center' }}><a className="bmc-button" target="_blank"
                    href="https://www.buymeacoffee.com/AliKarami"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                        alt="Buy us a coffee"></img><span style={{ marginLeft: '15px', fontSize: '28px' }}>Buy us a coffee</span></a></div>

                <Link to="/agb"><div className ="agb">AGB</div></Link>

                <div style={{ display: "flex", justifyContent: 'center' }}><a style={{ color: "white", padding: "40px 10px 10px 10px", fontSize: "17px" }}>Contact us: <a style={{ fontWeight: "bold", color: "white" }}>ceastartup@gmail.com</a></a></div>
            </div>
        </div>
    );
}

export default Landing;