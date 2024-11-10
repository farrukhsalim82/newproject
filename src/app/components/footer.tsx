import Image from "next/image";
import blogo from "../images/Group 11 1.png"
import map from "../images/Vector.png"
import phone from "../images/Group (1).png"
import email from "../images/Group (2).png"
import fb from "../images/Shape.png"
import twit from "../images/Shape (1).png"
import lin from "../images/Shape (2).png"
import pin from "../images/pininterest.png"
import Link from "next/link"
export default function Footer(){
    return(
        
        <div className="footer">
             <div className="footer-top">
                <div className="footer-top-1">
                <Image className="blogo" src={blogo} alt="/" />
                </div>
                <div className="footer-top-2">
                    <p className="inf">Information</p>
                    <ul className="footer-links">        
                       <Link href={"/"}>
                       <li >Main</li> <br></br>
                       </Link> 
                       <Link href={"/gallery"}>
                       <li >Gallery</li> <br></br>
                       </Link>
                       <Link href={"/projects"}>
                       <li >Projects</li> <br></br>
                       </Link>
                       <Link href={"/certifications"}>
                       <li >Certifications</li> <br></br>
                       </Link>
                       <Link href={"/contacts"}>
                       <li >Contacts</li>
                       </Link>        
                    </ul> 
                </div>
                <div className="footer-top-3">
                <p className="inf">Contacts</p>
                  <div className="map">
                    <div className="map-left">
                    <Image className="map" src={map} alt="/" />
                    </div>
                    <div className="map-right">
                        <p>1234 Sample Street <br></br>Austin Texas 78704</p>
                    </div>
                   </div>

                   <div className="phone">
                    <div className="phone-left">
                    <Image className="phone" src={phone} alt="/" />
                    </div>
                    <div className="phone-right">
                        <p>512.333.2222</p>
                    </div>
                   </div>

                   <div className="email">
                    <div className="email-left">
                    <Image className="email" src={email} alt="/" />
                    </div>
                    <div className="email-right">
                        <p>sampleemail@gmail.com</p>
                    </div>
                   </div>

                </div>
                <div className="footer-top-4">
                  <p className="inf">Social Media</p>
                  <div className="social">
                    
                    <Image src={fb} alt="/" />
                                        
                    <Image src={twit} alt="/" />
                                       
                    <Image src={lin} alt="/" />
                    
                    
                    <Image src={pin} alt="/" />
                                 
                 
                  </div>
                </div>
             </div>
             <div className="footer-bottom">
                <p className="foo-para">@ 2021. All Rights Reserved</p>
             </div>
        </div>
        
    );
}