import Image from "next/image";
import logo from "../images/logo.png"
import Link from "next/link"

export function Header(){
return (

<div className="header"> 
 <div className="left ">
 <Image className="my-image"
      src={logo}
      
      alt="/"
      />
 </div>
 
 <div className="right ">
 <ul className="header-buttons">
        
 <Link className="link" href={"/"}>
        <li >main</li>
        </Link>
        <Link href={"/gallery"} className="link">
        <li >gallery</li>
        </Link>
        <Link href={"/projects"} className="link">
        <li >projects</li>
        </Link>
        <Link href={"/certifications"} className="link">
        <li >certifications</li>
        </Link>
        <Link href={"/contacts"} className="link">
        <li >contacts</li>
        </Link>        
    </ul>    
    </div>  
    
</div>
)
}