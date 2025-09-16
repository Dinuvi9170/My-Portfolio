import { useState, useEffect,useRef } from "react";
const Skills= ()=>{
    const skills=[
        // Frontend
        { name: "HTML", level: "95", category: "frontend", path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
        { name: "CSS", level: "90", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
        { name: "JavaScript", level: "85", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  },
        { name: "React", level: "80", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  },
        { name: "Tailwind CSS", level: "75", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"  },
        { name: "Dart", level: "70", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg"  },
        { name: "flutter", level: "70", category: "frontend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg"  },
        
        // Backend
        { name: "Node.js", level: "80", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"  },
        { name: "Express.js", level: "70", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  },
        { name: "MongoDB", level: "70", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"  },
        { name: "MySQL", level: "70", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"  },
        { name: "Python", level: "70", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"  },
        { name: "c#", level: "70", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"  },
        { name: "PHP", level: "60", category: "backend",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"  },
        { name: "Java", level: "60", category: "backend" ,path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" },

        // Tools
        { name: "Git/GitHub", level: "80", category: "tools",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  },
        { name: "VS Code", level: "90", category: "tools",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg"  },
        { name: "Postman", level: "75", category: "tools",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg"  },
        { name: "Figma", level: "70", category: "tools",path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg"  }
    ]
    
    const [widths,setwidths]=useState(skills.map(()=>"0%"));
    const [activeCategory, setActivecategory]= useState("all");
    const sectionRef = useRef(null);

    const categories=[{id:"all",label:"All"},
        {id:"frontend",label:"Frontend"},
        {id:"backend",label:"Backend"},
        {id:"tools",label:"Tools"}];
    
    //change button elements according to clicking
    const handleclickbutton =((id)=>{
        setActivecategory(id);
    })

    //fiter catergory
    const filterCategory=skills.filter((skill)=>{
        if(activeCategory==="frontend")
            return skill.category==="frontend";
        else if(activeCategory==="backend")
            return skill.category==="backend";
        else if(activeCategory==="tools")
            return skill.category==="tools";
        else 
            return true;
    })

    //gaph animation
     useEffect(()=>{
        const timer= setTimeout(()=>{
            setwidths(skills.map((skill)=>skill.level+'%'));
        },100);
        return()=> clearTimeout(timer);
    },[])
    

    return(
        <div className="px-10 py-25 bg-[#020c45] font-[Inter]">
            <div className="flex text-3xl font-bold justify-center ">
                <span className=" text-[#af8028]">My&nbsp;</span>
                <span className=" text-white">Skills</span>
            </div>
            <button className="flex flex-cols-4 gap-2 px-30 mt-10 cursor-pointer">
                {categories.map((category)=>(
                    <span 
                        key={category.id}
                        className={`px-2 py-1 rounded-lg font-semibold hover:opacity-50 hover:shadow-md 
                            ${activeCategory===category.id?"bg-orange-300":"text-orange-300 border border-2"}`}
                        onClick={()=>handleclickbutton(category.id)}
                    >{category.label}</span>
                ))}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-30">
                {filterCategory.map((skill,key)=>(
                    <div key={key} className="bg-[#414974] text-base p-6 rounded-lg shadow-xs">
                        <div className="flex gap-1">
                            <img src={skill.path} className="w-6 h-6"/>
                            <h3 className="text-white">{skill.name}</h3>
                        </div>
                        <div className=" w-full h-2 rounded-full overflow-hidden mt-2">
                            <div className=" h-2 rounded-full bg-[#af8028] transition-all duration-1000 ease-out "
                            style={{width:widths[key]}}/>
                        </div>
                        <span className="text-sm text-white mt-1 ml-25 md:ml-70">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;