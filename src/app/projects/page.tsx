import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

import sample1 from "../images/sampleprojects/image 30.png"
import sample2 from "../images/sampleprojects/image 32.png"
import sample3 from "../images/sampleprojects/image 33.png"

import left from "../images/ico-shape (1).png"
import right from "../images/ico-shape.png"
import line from "../images/Line 3.png"


export default function Gallery(){
  return (
    <div>
  <Header/>
  <div className="sample-pro">
    <div className="sample-pro-top">
    <h1 className="gal-photo">Our</h1>
    <h1 className="gal-gallery">Projects</h1>
    </div>    
    
    <div className="sample-projects">
        <div className="sample-projects1">
            <div className="sample-projects1-left">
            <Image className="sample1" src={sample1} alt="/" />
            </div>
            <div className="sample-projects1-right">
                <h1 className="sam-pro">Sample Project 1</h1>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="abt-button3"><span className="arr-btn"><span className="read">Read More</span><span><Image className="right-arr" src={right} alt="/" /></span></span></button>
            </div>
        </div>
        
        <div className="sample-projects1">
            <div className="sample-projects1-left">
            <Image className="sample2" src={sample2} alt="/" />
            </div>
            <div className="sample-projects1-right">
                <h1 className="sam-pro">Sample Project 2</h1>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="abt-button3"><span className="arr-btn"><span className="read">Read More</span><span><Image className="right-arr" src={right} alt="/" /></span></span></button>
            </div>
        </div>

        <div className="sample-projects1">
            <div className="sample-projects1-left">
            <Image className="sample3" src={sample3} alt="/" />
            </div>
            <div className="sample-projects1-right">
                <h1 className="sam-pro">Sample Project 3</h1>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="abt-button3"><span className="arr-btn"><span className="read">Read More</span><span><Image className="right-arr" src={right} alt="/" /></span></span></button>
            </div>
        </div>

    </div>


    <div className="numbers3">
                        <div className="numbers-left2">
                            <p className="num2">0</p>
                            <p className="num2">1</p>
                        </div>
                        <div className="numbers-mid2">
                        <Image className="line" src={line} alt="/" />
                        </div>
                        <div className="numbers-right2">
                        <p className="num">05</p>
                        </div>
                        <div className="pro-buttons-2">
                        <button className="btn-left-arr2"><Image className="left-arr" src={left} alt="/" /></button>
                        <button className="btn-right-arr2"><Image className="right-arr" src={right} alt="/" /></button>
                        </div>
                    </div>    

  </div>
  <Footer/>

  </div>
  );
}