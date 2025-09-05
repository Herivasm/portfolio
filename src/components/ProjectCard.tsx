import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiAxios, SiDocker, SiExpress, SiJest, SiJsonwebtokens, SiMongoose, SiNatsdotio, SiNestjs, SiNextdotjs, SiNodemon, SiPrisma, SiReacthookform, SiReactquery, SiReactrouter, SiSequelize, SiSwagger, SiTailwindcss, SiTypeorm, SiTypescript, SiZod } from 'react-icons/si';

const ICONS = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  'Node.js': <FaNodeJs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Zustand': <FaReact />,
  'context API': <FaReact />,
  'JWT': <SiJsonwebtokens />,
  'Swagger': <SiSwagger />,
  'Jest': <SiJest />,
  'Sequelize': <SiSequelize />,
  'Nodemon': <SiNodemon />,
  'Mongoose': <SiMongoose />,
  'Prisma': <SiPrisma />,
  'PostgreSQL': <DiPostgresql />,
  'MongoDB': <DiMongodb />,
  'Next.js': <SiNextdotjs />,
  'Zod': <SiZod />,
  'React Router': <SiReactrouter />,
  'React Hook Form': <SiReacthookform />,
  'React Query': <SiReactquery />,
  'Express.js': <SiExpress />,
  'Axios': <SiAxios />,
  'Swagger ': <SiSwagger />,
  'AI': <GiArtificialIntelligence />,
  'NestJS': <SiNestjs />,
  'TypeORM': <SiTypeorm />,
  'Docker': <SiDocker />,
  'NATS': <SiNatsdotio />
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    images: string[];
    technologies: (keyof typeof ICONS)[];
    link?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const lightboxSlides = project.images.map(image => ({ src: image }));

  return (
    <>
      <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/50 flex flex-col">
        <div className="w-full h-56">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-full"
          >
            {project.images.map((image, index) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setImageIndex(index);
                  setOpen(true);
                }}
                className="cursor-pointer"
              >
                <img src={image} alt={`Captura del proyecto ${project.title}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-neutral-300">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <span className="text-white font-semibold">Tecnologías:</span>
            {project.technologies.map((techName) => (
              <div key={techName} className="text-2xl text-purple-400" title={techName}>
                {ICONS[techName]}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-400 hover:text-purple-300 font-semibold"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={imageIndex}
      />
    </>
  );
};

export default ProjectCard;