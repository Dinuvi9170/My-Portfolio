import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar=()=>{
    const [isClicked,setIsClicked]=useState("home");
    const [isOpen, setIsOpen] = useState(false);

    const items=[{id:"home",label:"Home", path:'/#home'},
        {id:"about",label:"About",path:'/#about'},
        {id:"skills",label:"Skills",path:'/#skills'},
        // {id:"resume",label:"Resume",path:'/#resume'},
        {id:"services",label:"Services",path:'/#services'},
        {id:"projects",label:"Projects",path:'/#projects'},
        {id:"contact",label:"Contact",path:'/#contact'}
    ]
    const handleclickbutton=(id)=>{
        setIsClicked(id);
        console.log(id);
        setIsOpen(false);
    }
    
    return(
        <nav className="pl-6 md:pl-20 pr-6 md:pr-24 py-4 flex justify-between items-center bg-[#020c45] text-[#af8028] fixed top-0 left-0 w-full shadow-md z-50">
            <div className="flex justify-center items-center gap-2 ">
                <div className="border rounded-full w-12 h-12 border-[#af8028] border-3">
                    <img src={"/My-Portfolio/D-removebg.png"} className="w-8 h-7 m-2"/>
                </div>
                <span className="font-[Inter] text-xl md:text-2xl font-bold">DinuviPerera</span>
            </div>
            {/* desktop menu */}
            <div className="hidden md:flex gap-8 text-lg items-center cursor-pointer font-[Inter]">
                {items.map((item)=>(
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={()=>handleclickbutton(item.id)}
                        className={`${isClicked===item.id?"text-white underline":"text-[#af8028]"} hover:underline hover:decoration-white`}
                    >{item.label}</Link>
                ))}
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#af8028]" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={28} />}
            </button>
            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-16 right-0 left-0 bg-[#020c45] flex flex-col items-center py-4 space-y-4 shadow-md md:hidden z-50">
                {items.map((item) => (
                    <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => handleclickbutton(item.id)}
                    className={`${
                        isClicked === item.id
                        ? "text-white underline"
                        : "text-[#af8028]"
                    } hover:underline hover:decoration-white`}
                    >
                    {item.label}
                    </Link>
                ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;