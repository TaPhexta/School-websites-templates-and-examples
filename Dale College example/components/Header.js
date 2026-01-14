function Header({ activePage = 'home' }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: 'index.html' },
        { name: 'Our Story', href: 'about.html' },
        { name: 'Academics', href: 'academics.html' },
        { name: 'Sport', href: 'sport.html' },
        { name: 'Culture', href: 'culture.html' },
        { name: 'Boarding', href: 'boarding.html' },
        { name: 'News', href: 'news.html' },
    ];

    const handleNavClick = (href) => {
        if (href.startsWith('#')) {
            // If it's a hash link, check if we are on the home page (index.html)
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/app') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // If not on home page, go to index.html with hash
                window.location.href = `index.html${href}`;
            }
        } else {
            // Direct link
            window.location.href = href;
        }
        setMobileMenuOpen(false);
    };

    return (
        <header 
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
            data-name="header"
            data-file="components/Header.js"
        >
            <div className="container-custom flex justify-between items-center">
                <a href="index.html" className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${isScrolled ? 'border-[var(--dale-red)] bg-[var(--dale-red)]' : 'border-white bg-white/10 backdrop-blur-sm'}`}>
                         <div className={`font-display text-2xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>D</div>
                    </div>
                    <div>
                        <span className={`block font-display font-bold text-lg md:text-xl tracking-wider leading-none ${isScrolled ? 'text-[var(--dale-black)]' : 'text-white'}`}>
                            DALE COLLEGE
                        </span>
                        <span className={`block text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80 ${isScrolled ? 'text-[var(--dale-red)]' : 'text-white'}`}>
                            Boys' High School
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-[var(--dale-red)] ${
                                isScrolled ? 'text-slate-800' : 'text-white/90 hover:text-white'
                            } ${activePage === item.name.toLowerCase() ? 'text-[var(--dale-red)] border-b-2 border-[var(--dale-red)]' : ''}`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <a href="admissions.html" className={`btn ${isScrolled ? 'btn-primary' : 'btn-outline'} text-xs px-5 py-2`}>
                        Apply Now
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl ${isScrolled ? 'text-[var(--dale-black)]' : 'text-white'}`}></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-[var(--dale-black)] bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className="text-white text-2xl font-serif hover:text-[var(--dale-red)] transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                     <button className="btn btn-primary mt-4">
                        Apply Now
                    </button>
                </div>
            )}
        </header>
    );
}