function Footer() {
    return (
        <footer className="bg-[var(--primary-dark)] text-white pt-16 pb-8" data-name="footer">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white">
                                <span className="icon-graduation-cap text-2xl"></span>
                            </div>
                            <span className="text-xl font-bold">Green Valley</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Striving for excellence in every child. Providing a nurturing and inspiring environment for the leaders of tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-light)] transition-colors">
                                <span className="icon-facebook text-sm"></span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-light)] transition-colors">
                                <span className="icon-twitter text-sm"></span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--primary-light)] transition-colors">
                                <span className="icon-instagram text-sm"></span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[var(--accent-color)]">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="academics.html" className="text-gray-300 hover:text-white hover:pl-2 transition-all text-sm">Curriculum</a></li>
                            <li><a href="sport.html" className="text-gray-300 hover:text-white hover:pl-2 transition-all text-sm">School Sports</a></li>
                            <li><a href="life.html" className="text-gray-300 hover:text-white hover:pl-2 transition-all text-sm">Extracurriculars</a></li>
                            <li><a href="admissions.html" className="text-gray-300 hover:text-white hover:pl-2 transition-all text-sm">Admissions</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[var(--accent-color)]">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="icon-map-pin text-[var(--primary-light)] mt-1"></span>
                                <span className="text-gray-300 text-sm">123 Education Lane, Green Valley, GV1 2AB</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="icon-phone text-[var(--primary-light)]"></span>
                                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="icon-mail text-[var(--primary-light)]"></span>
                                <span className="text-gray-300 text-sm">info@greenvalley.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[var(--accent-color)]">Newsletter</h3>
                        <p className="text-gray-300 text-sm mb-4">Subscribe to stay updated with school news.</p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="bg-white/10 border border-white/20 rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-[var(--primary-light)] placeholder-gray-400"
                            />
                            <button className="bg-[var(--primary-light)] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© 2026 Green Valley Primary School. All rights reserved.</p>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}