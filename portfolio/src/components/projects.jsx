import { ExternalLink, Github } from "lucide-react";

const Projects=()=>{
    const projects=[
        {
            id:1,
            title:"Dress platform landing page",
            description:"A beautiful landing page app using React and Tailwind.",
            image:"./projects/tailoring-image.png",
            tags:["React","Javascript","CSS"],
            demourl:"#",
            gitlink:"#"
        },
        {
            id:2,
            title:"Dress platform landing page",
            description:"A beautiful landing page app using React",
            image:"./projects/tailoring-image.png",
            tags:["React","Javascript","CSS"],
            demourl:"#",
            gitlink:"#"
        },
        {
            id:3,
            title:"Dress platform landing page",
            description:"A beautiful landing page app using React",
            image:"./projects/tailoring-image.png",
            tags:["React","Javascript","CSS"],
            demourl:"#",
            gitlink:"#"
        },
    ];
    return(
        <div className="px-10 py-25 bg-[#020c45] font-[Inter]">
            <div className="flex text-3xl font-bold justify-center ">
                <span className=" text-[#af8028]">Featured&nbsp;</span>
                <span className=" text-white ">Projects</span>
            </div>
            <p className="text-center mt-4 md:mx-90 text-white">Here are some of my recent projects. Each projects were carefully 
                crafted with attention to details and user experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-45 md:px-68">
                {projects.map((project)=>(
                    <div key={project.id} className="flex flex-col bg-[#20365e] rounded-lg hover:scale-110">
                        <div className="h-48 overflow-hidden ">
                            <img src={project.image} 
                                alt={project.title} 
                                className=" w-full w-full rounded-t-lg object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-5 rounded-b-lg">
                            <div className="flex flex-wrap mb-4 gap-2">
                                {project.tags.map((tag,key)=>(
                                    <span key={key} 
                                    className="px-2 py-1 text-xs border text-[#af8028] border-[#af8028] rounded-full font-medium ">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-center mt-2 text-xl font-semibold">{project.title}</h3>
                            <p className="text-xs mb-4 text-center">{project.description}</p>
                            <div className="flex items-center">
                                <div className="flex space-x-3 w-5">
                                    <a href={project.demourl}>
                                        <ExternalLink className="w-5"/>
                                    </a>
                                    <a href={project.gitlink}>
                                        <Github className="w-5"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="justify-center mt-8 border border-orange-300 bg-orange-300 w-40 rounded-full px-1 py-1 ml-10 md:mx-80">
                    <a href="https://github.com/Dinuvi9170" 
                    className="flex text-black font-semibold items-center mx-2 hover:opacity-60">Check my Github</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;