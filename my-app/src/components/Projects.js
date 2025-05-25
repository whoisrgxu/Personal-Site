import projects from "@/Common/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    
    return (
        <div id="projects">
            <h2 className="text-6xl md:text-7xl mt-30 mb-16 text-center">Projects</h2>   
            <div  className="flex flex-col gap-y-20"> 
                {projects.map((project, index) => (
                    <ProjectCard key={index} index={index} project={project}/>
                ))}
            </div>
        </div>

    )
}