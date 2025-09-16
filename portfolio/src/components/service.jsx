import {Globe,Layers, Smartphone,Palette} from 'lucide-react';
const Services = ()=>{
    const services=[
        {
            id:1,
            label:"Web Development", 
            icon:<Globe color="#2c89c3"  size="40"/>,
            description:"I create responsive and user-friendly websites using modern tools and technologies.I focus on building clean layouts, simple designs and functional features while improving my skills through practice and projects."
        },
        {
            id:2,
            label:"Full-Stack Application Development",
            icon:<Layers color="yellow" size="40" />,
            description:"I design and develop simple applications that include both the frontend and backend. As I continue learning, I focus on writing clean code, connecting databases and creating solutions that work smoothly from start to finish."
        },
        {
            id:3,
            label:"Mobile App Development",
            icon:<Smartphone color="#1289d3" size="40" />,
            description:"I develop simple and responsive mobile applications that work smoothly on different devices. I focus on building apps with clear design, useful features and a good user experience."
        },
        {
            id:4,
            label:"UI/UX Design",
            icon:<Palette color="pink" size="40"/>,
            description:"I create clean and simple user interfaces that are easy to use and understand. I focus on improving designs by keeping them clear, user-friendly and responsive across different devices."
        }
        ]
    return(
        <div className="px-10 py-25 bg-[#20365e] font-[Inter]">
            <div className="flex text-2xl md:text-3xl font-bold justify-center">
                <span className=" text-white">My&nbsp;</span>
                <span className=" text-[#af8028] ">Services</span>
            </div>
            <div className="grid md:grid-cols-4 px-30 py-20 gap-3 ">
                {services.map((service)=>(
                    <div key={service.id} className='flex flex-col text-center items-center shadow-[0px_0px_20px_rgba(255,204,153,0.5)] px-5 py-5 rounded-lg'>
                        <div>{service.icon}</div>
                        <span className='mt-2 text-orange-300 font-semibold text-lg'>{service.label}</span>
                        <p className='mt-5 text-white'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;