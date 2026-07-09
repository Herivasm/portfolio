import type { Language } from '../App'

interface ContactProps {
    language: Language
}

const copy = {
    es: {
        title: 'Envíame un correo',
        description:
            'Si deseas comunicarte conmigo para algún proyecto o simplemente quieres saludar, no dudes en enviarme un correo.',
        button: 'Enviar Correo',
    },
    en: {
        title: 'Send me an email',
        description:
            'If you want to contact me about a project or just say hello, feel free to send me an email.',
        button: 'Send Email',
    },
}

const Contact = ({ language }: ContactProps) => {
    const texts = copy[language]

    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{texts.title}</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">{texts.description}</p>
            <a
                href="mailto:sheribertoyanez@gmail.com"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
            >
                {texts.button}
            </a>
        </section>
    );
};

export default Contact;