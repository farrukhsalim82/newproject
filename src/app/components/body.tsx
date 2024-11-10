import Image from "next/image";

import rec8 from "../images/Rectangle 8.png"
import rec10 from "../images/Rectangle 10.png"
import rec9 from "../images/Rectangle 9.png"
import rec17 from "../images/Rectangle 17.png"
import ima15 from "../images/15.png"
import ima16 from "../images/image 16.png"
import ima17 from "../images/image 17.png"
import ima18 from "../images/image 18.png"

import ima12 from "../images/image 12.png"
import left from "../images/ico-shape (1).png"
import right from "../images/ico-shape.png"
import right2 from "../images/ico-shape (2).png"
import line from "../images/Line 3.png"




export default function Body(){
    return(
        
        <div className="body">
             <div className="project">
                <div className="project-left">
                    <h1 className="pro">project</h1>
                    <h1 className="lorem">Lorem</h1>
                    <div className="pro-buttons">
                        <button className="btn-left-arr"><Image className="left-arr" src={left} alt="/" /></button>
                        <button className="btn-right-arr"><Image className="right-arr" src={right} alt="/" /></button>
                    </div>
                    <div className="numbers">
                        <div className="numbers-left">
                            <p className="num">0</p>
                            <p className="num">1</p>
                        </div>
                        <div className="numbers-mid">
                        <Image className="line" src={line} alt="/" />
                        </div>
                        <div className="numbers-right">
                        <p className="num">02</p>
                        </div>
                    </div>
                </div>
                <div className="project-right">
                <button className="abt-button"><span className="arr-btn"><span className="read">Read More</span><span><Image className="right-arr" src={right} alt="/" /></span></span></button>
                </div>
             </div>

             <div className="about">
                <div className="about-left">
                    <div className="about-left-left">
                    <Image className="rec8" src={rec8} alt="/" />
                    <br></br>
                    <Image className="rec10" src={rec10} alt="/" />
                    </div>
                    <div className="about-left-right">
                    <Image className="rec9" src={rec9} alt="/" />
                    </div>
                </div>
                <div className="about-right">
                <h1 className="abt">About</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.</p>
                     <button className="abt-button"><span className="arr-btn"><span className="read">Read More</span><span><Image className="right-arr" src={right} alt="/" /></span></span></button>
                </div>
             </div>

             <div className="main-focus">
                 <h1 className="mf">Main Focus/Mission Statement</h1>
                 <div className="main-focus2">
                    <div className="main-focus2-left">
                        <div className="main-focus2-left-left">
                            <p className="focus-num"><span className="one">1</span></p>
                        </div>
                        <div className="main-focus2-left-right">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </div>
                    <div className="main-focus2-right">
                    <div className="main-focus2-right-left">
                            <p className="focus-num"><span className="two">2</span></p>
                        </div>
                        <div className="main-focus2-right-right">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                        </div>
                    </div>
                 </div>
             </div>

             <div className="projects">
                <h1 className="pro2">Our Projects</h1>
                <div className="projects2">
                   <div className="projects2-top">
                     <div className="projects2-top-left">
                       <div className="projects2-top-left-1">
                       <Image className="rec17" src={rec17} alt="/" />
                       </div>
                       <div className="projects2-top-left-2">
                            <p className="pro-para">Sample <br></br>Project</p>                          
                                
                                <a href=""> <span className="arr-btn"><span className="read2">view more</span><span><Image className="right-arr" src={right2} alt="/" /></span></span></a>
                        
                       </div>
                     
                     </div>
                     <div className="projects2-top-right">
                     <Image className="ima15" src={ima15} alt="/" />
                     </div>                     
                    </div>
                    
                   <div className="projects2-bottom">
                    <div className="projects2-bottom-left">
                    <Image className="ima16" src={ima16} alt="/" />
                    </div>
                    <div className="projects2-bottom-middle">
                    <Image className="ima17" src={ima17} alt="/" />
                    </div>
                    <div className="projects2-bottom-right">
                    <Image className="ima18" src={ima18} alt="/" />
                    </div>
                   </div>
                   <div className="project-button">
                   <button className="abt-button2"><span className="arr-btn"><span className="read2">All Projects</span><span><Image className="right-arr" src={right2} alt="/" /></span></span></button>  
                   </div>                
                </div>        

             </div>

<div className="contact">
    <h1 className="cont">Contact Us</h1>
    <div className="contact2">
        <div className="contact2-left">
            <form>
                <fieldset>
                    <input className="con-form" type="text" placeholder="Enter Your Name"/>
                </fieldset>
                <fieldset>
                    <input className="con-form" type="number" placeholder="Enter Your Phone Number*"/>
                </fieldset>
                <fieldset>
                    <input className="con-form" type="email" placeholder="Enter Your Email*"/>
                </fieldset>
                <fieldset>
                    <input className="con-form" type="text" placeholder="Interested In"/>
                </fieldset>
                <fieldset>
                    <textarea className="con-form-textarea" placeholder="Message*"></textarea>
                </fieldset>
            </form>
            <button className="abt-button2"><span className="arr-btn"><span className="read2">Send Email</span><span><Image className="right-arr" src={right2} alt="/" /></span></span></button>
 
        </div>
        <div className="contact2-right">
        <Image className="ima12" src={ima12} alt="/" />       
        </div>
    </div>
</div>

        </div>
        
    );
}