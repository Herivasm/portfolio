const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full p-4 z-10 bg-neutral-950/50 backdrop-blur-sm">
            <nav className="flex justify-center items-center gap-x-8 text-neutral-300">
                <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
                <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
                <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;