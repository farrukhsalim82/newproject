import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import gal1 from "../images/gallery/Rectangle 22.png"
import gal2 from "../images/gallery/Rectangle 23.png"
import gal3 from "../images/gallery/Rectangle 24.png"
import gal4 from "../images/gallery/Rectangle 25.png"
import gal5 from "../images/gallery/Rectangle 26.png"
import gal6 from "../images/gallery/Rectangle 27.png"
import gal7 from "../images/gallery/Rectangle 28.png"
import gal8 from "../images/gallery/Rectangle 29.png"
import gal9 from "../images/gallery/Rectangle 30.png"
import gal10 from "../images/gallery/Rectangle 31.png"
import left from "../images/ico-shape (1).png"
import right from "../images/ico-shape.png"
import line from "../images/Line 3.png"


export default function Gallery(){
  return (
    <div>
  <Header/>
  <div className="gallery">
    <div className="gallery-top">
    <h1 className="gal-photo">Photo</h1>
    <h1 className="gal-gallery">Gallery</h1>
    </div>    
    <div className="photo">
        <div className="photo-top">
            <div className="photo-top-1 margin-10">
            <Image className="gal1" src={gal1} alt="/" />
            </div>
            <div className="photo-top-2 margin-10">
            <Image className="gal2" src={gal2} alt="/" />
            </div>
            <div className="photo-top-3 margin-10">
            <Image className="gal3" src={gal3} alt="/" />
            </div>
            <div className="photo-top-4 margin-10">
            <Image className="gal4" src={gal4} alt="/" />
            </div>
            <div className="photo-top-5 margin-10">
            <Image className="gal5" src={gal5} alt="/" />
            </div>
        </div>
        <div className="photo-bottom">
            <div className="photo-bottom-1 margin-10">
            <Image className="gal6" src={gal6} alt="/" />
            </div>
            <div className="photo-bottom-2 margin-10">
            <Image className="gal7" src={gal7} alt="/" />
            </div>
            <div className="photo-bottom-3 margin-10">
            <Image className="gal8" src={gal8} alt="/" />
            </div>
            <div className="photo-bottom-4 margin-10">
            <Image className="gal9" src={gal9} alt="/" />
            </div>
            <div className="photo-bottom-5 margin-10">
            <Image className="gal10" src={gal10} alt="/" />
            </div>
        </div>
    </div>


    <div className="numbers2">
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