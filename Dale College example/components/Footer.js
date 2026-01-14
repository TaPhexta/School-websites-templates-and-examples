function Footer() {
    return (
        <footer className="bg-[var(--dale-black)] text-white pt-20 pb-10" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--dale-red)] text-white font-display font-bold text-xl">D</div>
                            <div>
                                <h3 className="font-display text-lg tracking-wider">DALE COLLEGE</h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Boys' High School</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Shaping men of character, integrity, and leadership since 1861. Per Ardua ad Astra.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-display text-lg mb-6 text-[var(--dale-red)]">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <div className="icon-map-pin mt-1 text-[var(--dale-red)]"></div>
                                <span>King William's Town,<br/>Eastern Cape, South Africa</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="icon-phone text-[var(--dale-red)]"></div>
                                <span>+27 43 642 1968</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="icon-mail text-[var(--dale-red)]"></div>
                                <span>admin@dalecollege.co.za</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg mb-6 text-[var(--dale-red)]">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                            <li><a href="sport.html" className="hover:text-white transition-colors">Sport & Culture</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Old Daleians</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">School Fees</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display text-lg mb-6 text-[var(--dale-red)]">Newsletter</h4>
                        <p className="text-xs text-white/60 mb-4">Subscribe to receive the latest news from the Heron.</p>
                        <form className="flex flex-col gap-3">
                            <input type="email" placeholder="Your Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--dale-red)]" />
                            <button className="btn btn-primary w-full text-xs">Subscribe</button>
                        </form>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Dale College Boys' High School. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}