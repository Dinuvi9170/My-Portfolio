import {ArrowDownToLine} from 'lucide-react';
import { motion } from "framer-motion";
const About= ()=>{
    return(
        <div className="px-4 md:px-20 lg:px-40 py-10 bg-[#20365e]  font-[Inter] ">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <div className="flex text-2xl md:text-3xl font-bold justify-center mt-15">
                    <span className="text-white">About&nbsp;</span>
                    <span className="text-[#af8028]"> Me</span>
                </div>
                <div className="px-4 py-8 md:px-30 flex flex-col md:flex-row gap-2 md:gap-10 ">
                    <div className="px-4 flex md:flex-1 mt-10 ml-5 md:-ml-10 items-center ">
                        <div className="border border-t-8 border-8 rounded-full border-[#43687c]">
                            <img src={"./Dinuvi 11.jpg"} className="w-[300px] h-auto rounded-full"/>
                        </div>
                    </div>
                    <div className="md:flex-2 mt-20 ml-10 text-base leading-normal text-white">
                        <p>I am pursuing a BSc (Hons) in Computer Science at the University of Plymouth, with a strong passion for web and software development.
                        I enjoy exploring modern technologies, solving problems and creating applications that are both functional and impactful.
                        My academic journey has given me a solid foundation in programming, databases and full-stack development which I continue
                        to enhance through personal and collaborative projects.
                        </p><br/>
                        <p>
                        Beyond academics, I am deeply motivated to grow as a full-stack developer by applying my skills in real-world
                        scenarios. I focus on writing clean, maintainable code and designing solutions that improve user experiences. 
                        I thrive in environments that encourage creativity, teamwork and continuous learning and I look forward to contributing
                        to meaningful projects that drive innovation.
                        </p>
                        <div className="flex items-center -ml-15 mt-20 justify-center">
                            <a
                                href=""  
                                download
                                className="bg-[#af8028] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-60 hover:shadow-md"
                            >
                                <ArrowDownToLine color="#ffffff" className='inline' />Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About;