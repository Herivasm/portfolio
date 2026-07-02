import type { Language } from '../App'

interface HeaderProps {
    language: Language
    onToggleLanguage: () => void
}

const Header = ({ language, onToggleLanguage }: HeaderProps) => {
    const labels = {
        es: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            contact: 'Contacto',
            toggle: 'EN',
        },
        en: {
            about: 'About me',
            projects: 'Projects',
            contact: 'Contact',
            toggle: 'ES',
        },
    }

    return (
        <header className="fixed top-0 left-0 w-full p-4 z-10 bg-neutral-950/50 backdrop-blur-sm">
            <nav className="relative flex items-center justify-center text-neutral-300">
                <div className="flex items-center gap-x-6">
                    <a href="#about" className="hover:text-white transition-colors">{labels[language].about}</a>
                    <a href="#projects" className="hover:text-white transition-colors">{labels[language].projects}</a>
                    <a href="#contact" className="hover:text-white transition-colors">{labels[language].contact}</a>
                </div>
                <button
                    type="button"
                    onClick={onToggleLanguage}
                    className="absolute right-0 rounded-full border border-neutral-700 bg-neutral-900/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-purple-500 hover:text-purple-300"
                    aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
                >
                    {labels[language].toggle}
                </button>
            </nav>
        </header>
    );
};

export default Header;