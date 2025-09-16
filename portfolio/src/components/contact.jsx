import { useState } from "react";
import {MailIcon, MapPin, Phone } from "lucide-react";

const Contact = ()=>{
    const [formatData,setFormatData]=useState({
        name:"",
        email:"",
        message:""
    });

    const handleChange=(e)=>{
        setFormatData({
            ...formatData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const phoneNumber = "+94712977396"; 
        const encodedMessage = encodeURIComponent(
        `Name: ${formatData.name}\nEmail: ${formatData.email}\nMessage: ${formatData.message}`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };
    return(
        <div className="px-10 py-25 bg-[#20365e] font-[Inter]">
            <div className="flex text-3xl font-bold justify-center ">
                <span className="text-white ">Get In&nbsp;</span>
                <span className="text-[#af8028] ">Touch</span>
            </div>
            <p className="text-center mt-4 md:mx-90 text-white">Feel free to get in touch with me for any opportunities or collaborations.
                I'm always open to connecting and exploring new ideas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-40">
                <div className="mt-20 space-y-8">
                    <h3 className="text-xl font-semibold text-center mb-6 text-orange-300">Contact Information</h3>
                    <div className="space-y-6 md:px-20">
                        <div className="p-4 flex space-x-4 bg-[#414974] w-90 rounded-xl">
                            <div className="p-2 mt-2 bg-white w-8 h-8 rounded-full">
                                <MailIcon className="w-4 h-4 items-center"/>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-300">Email</h4>
                                <a href="mailto:dinuvitharushika@gmail.com" className="text-white hover:text-blue-600 transition-colors">dinuvitharushika@gmail.com</a>
                            </div>
                        </div>
                        <div className="p-4 flex space-x-4 bg-[#414974] w-90 rounded-xl">
                            <div className="p-2 mt-2 bg-white w-8 h-8 rounded-full">
                                <Phone className="w-4 h-4 items-center"/>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-300">Phone</h4>
                                <a href="tel:(+94)71 297 7396" className="text-white hover:text-blue-600 transition-colors">(+94)71 297 7396</a>
                            </div>
                        </div>
                        <div className="p-4 flex space-x-4 bg-[#414974] w-90 rounded-xl">
                            <div className="p-2 mt-2 bg-white w-8 h-8 rounded-full">
                                <MapPin className="w-4 h-4 items-center"/>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-300">Location</h4>
                                <a className="text-white hover:text-blue-600 transition-colors">Colombo, Sri Lanka</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 bg-[#414974] -ml-5 rounded-lg w-100 p-4">
                    <h3 className="text-xl font-semibold text-center text-orange-300">Send a message</h3>
                    <form onSubmit={handleSubmit} className="ml-8 p-2 text-center shadow-[0px_0px_15px_rgba(255,204,153,0.2)] rounded-lg mt-4 w-80">
                        <div>
                            <label htmlFor="name" className=" text-gray-300 block text-sm font-medium">Your Name</label>
                            <input 
                                id="name"
                                type="text"
                                name="name"
                                required
                                placeholder="Peter Perera" 
                                value={formatData.name}
                                onChange={handleChange}
                                className="border border-input border-gray-400 rounded-md px-1 mb-2 focus:outline-hidden"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className=" text-gray-300 block text-sm font-medium">Your Email</label>
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="hello@gmail.com"
                                value={formatData.email}
                                onChange={handleChange}
                                className="border border-input border-gray-400 rounded-md mb-2 px-1 focus:outline-hidden"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-gray-300 block text-sm font-medium">Your Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                required
                                placeholder="Hello,I have idea..." 
                                value={formatData.message}
                                onChange={handleChange}
                                className="border border-input border-gray-400 mb-2 w-58 min-h-30 rounded-md px-1 focus:outline-hidden"
                            />
                        </div>
                        <button type="submit" 
                        className="border cursor-pointer px-3 rounded-full border-orange-300 font-semibold bg-orange-300 hover:opacity-50 hover:shadow-md">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;