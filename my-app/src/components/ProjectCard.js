import ProjectImageFrame from "./ProjectImageFrame";
import BeautyButton from "./BeautyButton";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({index, project}) {

    const hasGlow = index % 2 === 0? true : false;
    return (

        <div className="relative w-full flex flex-col items-center" data-aos="slide-up">
            {hasGlow && (
            <div className="absolute top-[90%] left-0 -translate-y-1/2 -translate-x-1/2 w-[20vw] h-[30vh] bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-50 opacity-60 blur-[130px] rounded-full pointer-events-none z-20"></div>)
            }
            <div className="grid w-full grid-cols-2 gap-10">
                <div className="">
                    <ProjectImageFrame project={project}/>
                </div>
                <div className="">
                    <div className="text-3xl text-bold mb-2">{project.Title}</div>
                    <div className="flex gap-2 mb-2">
                        <div className="text-lg">Made with: </div>
                        {project.MadeWith.map((skill, index) => (
                            <div key={index} className="text-md text-pink-600">{skill}</div>
                        ))}
                    </div>
                    <div className="text-lg">{project.Description}</div>
                    <div className="flex gap-4">
                        <BeautyButton
                            theme="light"
                            text={
                                <>
                                <ExitToAppIcon className="mr-1" />
                                    Live
                                </>
                            }
                        />
                        <BeautyButton
                            theme="light"
                            text={
                                <>
                                <GitHubIcon className="mr-1" />
                                    Code
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}