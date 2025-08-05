import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="py-8 border-t border-neutral-800">
            <div className="flex justify-center items-center gap-6">
                <a href="https://github.com/Herivasm/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-2xl transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/heribertoya%C3%B1ez/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-2xl transition-colors"><FaLinkedin /></a>
                <a href="https://instagram.com/herivasm" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-2xl transition-colors"><FaInstagram /></a>
                <a href="mailto:sheribertoyanez@gmail.com" className="text-neutral-400 hover:text-white text-2xl transition-colors"><MdEmail /></a>
            </div>
            <p className="mt-6 text-center text-neutral-500 text-sm">
                © {new Date().getFullYear()} Heriberto Yañez. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;