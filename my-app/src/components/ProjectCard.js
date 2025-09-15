import ProjectImageFrame from "./ProjectImageFrame";
import BeautyButton from "./BeautyButton";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({index, project}) {

    const hasGlowLeft = index % 2 === 0? true : false;
    return (

        <div className="relative w-full flex flex-col items-center" data-aos="fade-up">
            {hasGlowLeft && (
            <div className="absolute top-[90%] left-0 -translate-y-1/2 -translate-x-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-50 opacity-60 blur-[150px] rounded-full pointer-events-none z-20"></div>)
            }
            {!hasGlowLeft && (
            <div className="absolute top-[90%] right-[-20%] translate-x-0 -translate-y-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 opacity-60 blur-[150px] rounded-full pointer-events-none z-20"></div>)
            }            
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <ProjectImageFrame project={project}/>
                </div>
                <div>
                    <div className="text-3xl text-bold mb-2 text-center lg:text-left">{project.Title}</div>
                    <div className="flex flex-wrap gap-2 mb-2 justify-center lg:justify-start">
                        <div className="text-lg text-nowrap text-center lg:text-left">Made with: </div>
                        {project.MadeWith.map((skill, index) => (
                            <p key={index} className="text-md text-pink-600">{skill}</p>
                        ))}
                    </div>
                    <div className="text-lg text-center lg:text-start">{project.Description}</div>
                    <div className="flex gap-8 md:16 lg:gap-8 justify-center lg:justify-start mt-auto lg:mb-2">
                        {project.Title !== "My Repo Reader" &&
                        (<a href={project.Link} target="_blank" rel="noopener noreferrer" className="no-underline">

                            <BeautyButton
                                theme="light"
                                text={
                                    <>
                                    <ExitToAppIcon className="mr-1" />
                                        Live
                                    </>
                                }
                            />
                        </a>)}
                        <a href={project.RepoLink} target="_blank" rel="noopener noreferrer" className="no-underline">
                            <BeautyButton
                                theme="light"
                                text={
                                    <>
                                    <GitHubIcon className="mr-1" />
                                        Code
                                    </>
                                }
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}