import Image from 'next/image';

export default function ProjectImageFrame({ project}) {

    return(
        <div className="relative aspect-[5/3] border-4 border-pink-600 shadow-[0_0_30px_rgba(236,72,153,0.5)] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <Image
            src={project.Image}
            alt={project.Title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
        />
        </div>

    )
}