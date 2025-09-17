import { useState, useEffect } from "react";
import VantaBackground from "./vanta.jsx";
import {Link} from "react-router-dom";
import {Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const Home = () => {

  const Texts=["Web Developer","Mobile App Developer","Learner"]
  const [text,setText]=useState("");
  const [moveText,setMoveText]=useState(0);
  const [charText,setCharText]=useState(0);
  const [deleting,setDeleting]=useState(false);

  const Tabs=[
    {id:"hireme",label:"Hire Me", path:"/#contact"},
    {id:"mywork",label:"My Work", path:"/#projects"}  
  ]

  useEffect(()=>{
    const currentText = Texts[moveText];
    let typingSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentText.substring(0, charText + 1));
        setCharText((prev) => prev + 1);

        if (charText + 1 === currentText.length) {
          setDeleting(true);
          typingSpeed = 1000; // pause before deleting
        }
      } else {
        setText(currentText.substring(0, charText - 1));
        setCharText((prev) => prev - 1);

        if (charText === 0) {
          setDeleting(false);
          setMoveText((prev) => (prev + 1) % Texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charText, deleting, moveText, Texts]);


  return (
    <div className="relative w-full h-screen bg-[#020c45] font-[Inter]">
      <VantaBackground />
      
      <div className="absolute inset-0 flex flex-col-reverse px-6 gap-10 md:flex-row md:px-20 md:gap-20 items-center">
        <div className="leading-8 md:mr-10 text-center -mt-6 w-full md:w-1/2 md:-mt-1 md:text-left ">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="block text-lg text-[#af8028] font-semibold ml-1">Hello, It's me</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
                  >
            <span className="block text-4xl md:text-6xl font-bold text-white">Dinuvi Perera</span>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center md:justify-start ml-1 mt-10">
            <span className="text-lg md:text-xl text-white font-semibold ">And I am a&nbsp; </span>
            <span className="text-xl md:text-2xl font-bold text-[#af8028]  animate-pulse h-[1.5em]">{text}</span>
          </div>
          <p className="block mt-5 ml-1 justify-center md:justify-start text-lg text-white">I build web and mobile applications to solve real-world problems.</p>

          <div className="flex flex-col-2 gap-3 mt-5 ml-1 text-base font-semibold justify-center md:justify-start">
            {Tabs.map((tab)=>(
              <Link
                key={tab.id}
                to={tab.path}
                className={`border ${tab.id==="hireme"?"bg-orange-300 border-orange-300":"border-orange-300 border-2 text-orange-300"} 
                  px-3 py-1 rounded-lg hover:opacity-50 hover:shadow-md`}
              >{tab.label}</Link>
            ))}
          </div>
          <div className="flex flex-col-2 gap-3 justify-center md:justify-start mb-10 md:ml-10 mt-5 ">
            <Link to="https://github.com/Dinuvi9170">
              <Github fill="white" stroke="white" className="pt-1 border border-2 border-white rounded-full w-5 h-5 "/>
            </Link>
            <Link to="https://www.linkedin.com/in/dinuvi-tharushika-957061255/">
              <Linkedin color="#ffffff" className="w-5 h-5 " />
            </Link>  
          </div>
        </div>
        
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center mt-24 mb-2 md:mb-0"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          whileInView={{ clipPath: "circle(75% at 50% 50%)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full items-center">
            <svg viewBox="0 0 100 100" className="w-52 h-64 sm:w-52 sm:h-64  md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[500px]">
              <defs>
                <clipPath id="pentagonClip">
                  <polygon points="60,0 100,28 82,90 28,100 0,38" />
                </clipPath>

                {/* Blur filter */}
                <filter id="blurBorder" x="-70%" y="-100%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>

              {/* image clipped to pentagon */}
              <image
                href="./Dinuvi 11.jpg"
                width="115"
                height="100"
                clipPath="url(#pentagonClip)"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* pentagon border */}
              <polygon
                points="60,0 100,28 82,90 28,100 0,38"
                fill="transparent"
                stroke="#8080ff"
                strokeWidth="1"
                filter="url(#blurBorder)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


