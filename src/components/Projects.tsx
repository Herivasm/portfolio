import ProjectCard from './ProjectCard'

import devTree_1 from '../assets/projects/dev1.webp'
import devTree_2 from '../assets/projects/dev2.webp'
import devTree_3 from '../assets/projects/dev3.webp'
import devTree_4 from '../assets/projects/dev4.webp'
import devTree_5 from '../assets/projects/dev5.webp'
import devTree_6 from '../assets/projects/dev6.webp'

import admonProd1 from '../assets/projects/prod1.webp'
import admonProd2 from '../assets/projects/prod2.webp'
import admonProd3 from '../assets/projects/prod3.webp'

import cripto1 from '../assets/projects/cripto.webp'

import coctail1 from '../assets/projects/coc1.webp'
import coctail2 from '../assets/projects/coc2.webp'
import coctail3 from '../assets/projects/coc3.webp'
import coctail4 from '../assets/projects/coc4.webp'
import coctail5 from '../assets/projects/coc5.webp'

import pacientes from '../assets/projects/pacientes.webp'
import pacientes2 from '../assets/projects/pacientes2.webp'

import propinas from '../assets/projects/propinas.webp'

import guitarla from '../assets/projects/guitarla.webp'

import gastos1 from '../assets/projects/gastos1.webp'
import gastos2 from '../assets/projects/gastos2.webp'
import gastos3 from '../assets/projects/gastos3.webp'
import gastos4 from '../assets/projects/gastos4.webp'

import quiosco1 from '../assets/projects/qui1.webp'
import quiosco2 from '../assets/projects/qui2.webp'
import quiosco3 from '../assets/projects/qui3.webp'
import quiosco4 from '../assets/projects/qui4.webp'
import quiosco5 from '../assets/projects/qui5.webp'

import uptask1 from '../assets/projects/up1.webp'
import uptask2 from '../assets/projects/up2.webp'

import ct1 from '../assets/projects/home_page.webp'
import ct2 from '../assets/projects/Login.webp'
import ct3 from '../assets/projects/Register.webp'
import ct4 from '../assets/projects/reset_password.webp'
import ct5 from '../assets/projects/RecoveryPassword.webp'
import ct6 from '../assets/projects/confirmAccount.webp'
import ct7 from '../assets/projects/dashboard.webp'
import ct8 from '../assets/projects/edit_budget.webp'
import ct9 from '../assets/projects/delete_budget.webp'
import ct10 from '../assets/projects/expenses.webp'
import ct11 from '../assets/projects/edit_expense.webp'
import ct12 from '../assets/projects/delete_expense.webp'
import ct13 from '../assets/projects/limit_reached.webp'
import ct14 from '../assets/projects/update_profile.webp'
import ct15 from '../assets/projects/change_password.webp'

import pos1 from '../assets/projects/sudaderas_1.webp'
import pos2 from '../assets/projects/tenis_1.webp'
import pos3 from '../assets/projects/lentes.webp'
import pos4 from '../assets/projects/venta.webp'
import pos5 from '../assets/projects/cupon no valido.webp'
import pos6 from '../assets/projects/admin.webp'
import pos7 from '../assets/projects/productos.webp'
import pos8 from '../assets/projects/nuevo-prod.webp'
import pos9 from '../assets/projects/edit prod.webp'
import type { Language } from '../App'

interface ProjectsProps {
    language: Language
}

const misProyectos: {
    title: Record<Language, string>;
    description: Record<Language, string>;
    images: string[];
    technologies: ('TypeScript' | 'Swagger ' | 'Jest' | 'Express.js' | 'React' | 'Tailwind CSS' | 'Nodemon' | 'JWT' | 'MongoDB' | 'Axios' | 'Mongoose' | 'Prisma' | 'AI' | 'Next.js' | 'Zustand' | 'Sequelize' | 'React Router' | 'PostgreSQL' | 'React Query' | 'React Hook Form' | 'Zod' | 'TypeORM' | 'NestJS')[];
    link?: string;
}[] = [
        {
            title: { es: "Punto de Venta (NestJS/Next.js)", en: "Point of Sale (NestJS/Next.js)" },
            description: { es: "Punto de venta con funcionalidades de gestión de productos, categorías y ventas. Implementando sistema de cupones de descuento.", en: "Point of sale with product, category, and sales management features, including a discount coupon system." },
            images: [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9],
            technologies: ['TypeScript', 'PostgreSQL', 'TypeORM', 'NestJS', 'Next.js', 'Tailwind CSS', 'React Query', 'Zod', 'Zustand'],
            link: 'https://www.linkedin.com/posts/heribertoya%C3%B1ez_el-d%C3%ADa-de-hoy-he-concluido-el-tercer-y-%C3%BAltimo-activity-7366649873091231744-EmzK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFc16cBEjQ9uoQulXc3DH2fVt5JEI3okD0'
        },
        {
            title: { es: "CashTrackr", en: "CashTrackr" },
            description: { es: "Aplicación para la administración de gastos y gestión de presupuestos.", en: "An app for expense management and budget tracking." },
            images: [ct1, ct2, ct3, ct4, ct5, ct6, ct7, ct8, ct9, ct10, ct11, ct12, ct13, ct14, ct15],
            technologies: ['TypeScript', 'PostgreSQL', 'Sequelize', 'Express.js', 'Nodemon', 'JWT', 'Jest', 'Next.js', 'Tailwind CSS', 'Zod'],
            link: 'https://www.linkedin.com/posts/heribertoya%C3%B1ez_segundo-proyecto-terminado-tras-3-activity-7362259955082559489-FVT_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFc16cBEjQ9uoQulXc3DH2fVt5JEI3okD0'
        },
        {
            title: { es: "UpTask", en: "UpTask" },
            description: { es: "Una plataforma colaborativa para la gestión de proyectos y tareas. Con funcionalidades de autenticación, gestión de tareas y proyectos.", en: "A collaborative platform for project and task management with authentication, task, and project features." },
            images: [uptask1, uptask2],
            technologies: ['TypeScript', 'MongoDB', 'Mongoose', 'Express.js', 'Nodemon', 'JWT', 'React', 'Tailwind CSS', 'Axios', 'React Query', 'React Router', 'React Hook Form'],
            link: 'https://www.linkedin.com/posts/heribertoya%C3%B1ez_aunque-un-tanto-lento-el-proceso-termin%C3%A9-activity-7337895187773370368-JEOR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFc16cBEjQ9uoQulXc3DH2fVt5JEI3okD0'
        },
        {
            title: { es: "DevTree", en: "DevTree" },
            description: { es: "Una plataforma donde desarrolladores pueden compartir sus enlaces de GitHub y LinkedIn, entre otros y crear un árbol de desarrollo personal.", en: "A platform where developers can share links such as GitHub and LinkedIn and create a personal development tree." },
            images: [devTree_1, devTree_2, devTree_3, devTree_4, devTree_5, devTree_6],
            technologies: ['TypeScript', 'MongoDB', 'Mongoose', 'Express.js', 'Nodemon', 'JWT', 'React', 'Tailwind CSS', 'React Query', 'React Router', 'React Hook Form', 'Zod', 'Axios'],
            link: 'https://heri-devtree.netlify.app/'
        },
        {
            title: { es: "Quiosco de Comida", en: "Food Kiosk" },
            description: { es: "Una aplicación web para un quiosco de comida con funcionalidades de gestión de pedidos y productos en tiempo real.", en: "A web app for a food kiosk with real-time order and product management features." },
            images: [quiosco1, quiosco2, quiosco3, quiosco4, quiosco5],
            technologies: ['TypeScript', 'PostgreSQL', 'Prisma', 'Next.js', 'Tailwind CSS', 'Zod', 'Axios', 'Zustand'],
        },
        {
            title: { es: "Administrador de Productos", en: "Product Manager" },
            description: { es: "Una aplicación web para la gestión de productos. ", en: "A web app for product management. " },
            images: [admonProd1, admonProd2, admonProd3],
            technologies: ['TypeScript', 'PostgreSQL', 'Sequelize', 'Express.js', 'Nodemon', 'Jest', 'Swagger ', 'React', 'Tailwind CSS', 'React Router', 'React Hook Form', 'Zod', 'Axios', 'Zustand'],
        },
        {
            title: { es: "Cocktail App", en: "Cocktail App" },
            description: { es: "Una aplicación web para buscar recetas de cócteles con implementación de IA para sugerencias personalizadas.", en: "A web app for searching cocktail recipes with AI-powered personalized suggestions." },
            images: [coctail1, coctail2, coctail3, coctail4, coctail5],
            technologies: ['TypeScript', 'React', 'Tailwind CSS', 'React Router', 'Zod', 'Axios', 'Zustand', 'AI'],
            link: 'https://heri-drinks-ai.netlify.app/'
        },
        {
            title: { es: "Cotizador de Criptomonedas", en: "Crypto Quoter" },
            description: { es: "Una aplicación web para cotizar criptomonedas en tiempo real por medio de una API de criptomonedas.", en: "A web app for getting real-time cryptocurrency quotes through a crypto API." },
            images: [cripto1],
            technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Zod', 'Axios', 'Zustand'],
            link: 'https://crypto-heri.netlify.app/'
        },
        {
            title: { es: "Seguimiento de Pacientes", en: "Patient Tracking" },
            description: { es: "Una aplicación web para gestionar el seguimiento de pacientes de una veterinaria.", en: "A web app for managing patient tracking in a veterinary clinic." },
            images: [pacientes, pacientes2],
            technologies: ['TypeScript', 'React', 'Tailwind CSS', 'React Hook Form', 'Zustand'],
            link: 'https://heri-pacientes.netlify.app/'
        },
        {
            title: { es: "Aplicación para el Control de Gastos", en: "Expense Tracker" },
            description: { es: "Una aplicación web para gestionar gastos personales y presupuestos.", en: "A web app for managing personal expenses and budgets." },
            images: [gastos1, gastos2, gastos3, gastos4],
            technologies: ['TypeScript', 'React', 'Tailwind CSS'],
            link: 'https://expenses-controller-hericontextapi.netlify.app/'
        },
        {
            title: { es: "Calculador de Propinas", en: "Tip Calculator" },
            description: { es: "Una aplicación web para calcular propinas de manera sencilla y rápida con una interfaz amigable.", en: "A simple and fast web app for calculating tips with a friendly interface." },
            images: [propinas],
            technologies: ['TypeScript', 'React', 'Tailwind CSS'],
            link: 'https://heri-calculadora-propinas.netlify.app/'
        },
        {
            title: { es: "Carrito de Compras", en: "Shopping Cart" },
            description: { es: "Una aplicación web para gestionar un carrito de compras de una tienda de guitarras online.", en: "A web app for managing the shopping cart of an online guitar store." },
            images: [guitarla],
            technologies: ['TypeScript', 'React', 'Tailwind CSS'],
            link: 'https://heri-guitarla-ts.netlify.app/'
        },
    ];

const Projects = ({ language }: ProjectsProps) => {
    const heading = language === 'es' ? 'Mis Proyectos Destacados' : 'Featured Projects'

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">{heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {misProyectos.map((project, index) => (
                    <ProjectCard
                        key={index}
                        language={language}
                        project={{
                            title: project.title[language],
                            description: project.description[language],
                            images: project.images,
                            technologies: project.technologies,
                            link: project.link,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;