import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MiFoto from '../assets/mifoto.jpg'
import type { Language } from '../App'

interface AboutProps {
    language: Language
}

const content = {
    es: {
        title: 'Hola, soy Heriberto Yañez 👋',
        description:
            'Ingeniero en Desarrollo y Gestión de Software con experiencia práctica y apasionado en el desarrollo de aplicaciones web utilizando TypeScript, Node.js y React, creando aplicaciones web eficientes y escalables, con implementación de APIs RESTful y el manejo de bases de datos gestionadas con Sequelize, Prisma, Mongoose y TypeORM.',
        download: 'Descargar Currículum',
        resumeHref: '/curriculum.pdf',
        resumeFilename: 'CV_HeribertoYanez_ES.pdf',
        alt: 'Foto de Heriberto Yañez',
    },
    en: {
        title: 'Hi, I am Heriberto Yañez 👋',
        description:
            'Software Development and Management Engineer with hands-on experience and a passion for building web applications using TypeScript, Node.js, and React, creating efficient and scalable apps with RESTful APIs and databases managed with Sequelize, Prisma, Mongoose, and TypeORM.',
        download: 'Download Resume',
        resumeHref: '/curriculum-en.pdf',
        resumeFilename: 'CV_HeribertoYanez_EN.pdf',
        alt: 'Photo of Heriberto Yañez',
    },
}

const About = ({ language }: AboutProps) => {
    const texts = content[language]

    return (
        <section id="about" className="py-24 sm:py-32 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">{texts.title}</h1>
                <p className="mt-4 text-lg text-neutral-300">{texts.description}</p>
                <div className="mt-6 flex justify-center md:justify-start items-center gap-4">
                    <a href="https://github.com/Herivasm/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white text-3xl transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/heribertoya%C3%B1ez/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white text-3xl transition-colors"><FaLinkedin /></a>
                    <a href="mailto:sheribertoyanez@gmail.com" className="text-neutral-300 hover:text-white text-3xl transition-colors"><MdEmail /></a>
                </div>
                <a
                    href={texts.resumeHref}
                    download={texts.resumeFilename}
                    className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    {texts.download}
                </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={MiFoto}
                    alt={texts.alt}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500 shadow-lg"
                />
            </div>
        </section>
    );
};

export default About;