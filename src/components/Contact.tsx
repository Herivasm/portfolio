const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Envíame un correo</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
                Si deseas comunicarte conmigo para algún proyecto o simplemente quieres saludar, no dudes en enviarme un correo.
            </p>
            <a
                href="mailto:sheribertoyanez@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105"
            >
                Enviar Correo
            </a>
        </section>
    );
};

export default Contact;