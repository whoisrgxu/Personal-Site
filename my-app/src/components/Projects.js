import projects from "@/Common/Projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    
    return (
        <div id="projects" className="flex flex-col gap-y-20"> 
            <h2 className="text-7xl my-30 text-center">Projects</h2>       
            {projects.map((project, index) => (
                <ProjectCard key={index} index={index} project={project}/>
            ))}
        </div>

    )
}