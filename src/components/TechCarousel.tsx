import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import './TechCarousel.css'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiMongodb, SiNextdotjs, SiExpress, SiJest, SiSwagger, SiJsonwebtokens, SiMongoose, SiSequelize, SiPrisma, SiNodemon, SiZod, SiReactquery, SiReacthookform, SiReactrouter, SiAxios, SiVite, SiNestjs, SiTypeorm, SiNatsdotio, SiSqlite, SiMysql } from 'react-icons/si';
import { DiDocker } from 'react-icons/di';
import { CgNpm } from 'react-icons/cg';

const technologies = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <CgNpm />, name: 'npm' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiNestjs />, name: 'NestJS' },
    { icon: <SiNodemon />, name: 'Nodemon' },
    { icon: <SiJsonwebtokens />, name: 'JWT' },
    { icon: <SiSwagger />, name: 'Swagger' },
    { icon: <SiJest />, name: 'Jest' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiSqlite />, name: 'SQLite' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiSequelize />, name: 'Sequelize' },
    { icon: <SiPrisma />, name: 'Prisma' },
    { icon: <SiTypeorm />, name: 'TypeORM' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMongoose />, name: 'Mongoose' },
    { icon: <DiDocker />, name: 'Docker' },
    { icon: <SiNatsdotio />, name: 'NATS' },
    { icon: <SiVite />, name: 'Vite' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaReact />, name: 'Context API' },
    { icon: <SiReactquery />, name: 'React Query' },
    { icon: <SiReacthookform />, name: 'React Hook Form' },
    { icon: <SiReactrouter />, name: 'React Router' },
    { icon: <SiAxios />, name: 'Axios' },
    { icon: <SiZod />, name: 'Zod' },
    { icon: <FaReact />, name: 'Zustand' },
];

const TechCarousel = () => {
    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Tecnologías que Manejo</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 7 },
                }}
                className="w-full"
            >
                {technologies.map((tech, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className="text-center text-neutral-400">
                            <div className="text-5xl md:text-6xl flex justify-center items-center">{tech.icon}</div>
                            <p className="mt-2 text-sm">{tech.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TechCarousel;