function Header({ activePage }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navItems = [
        { name: 'Home', path: 'index.html' },
        { name: 'Academics', path: 'academics.html' },
        { name: 'Sport', path: 'sport.html' },
        { name: 'Life at School', path: 'life.html' },
        { name: 'Contact', path: 'contact.html' },
    ];

    const isActive = (path) => {
        // Handle root path vs index.html
        if (activePage === 'home' && (path === 'index.html' || path === '/')) return true;
        return activePage.toLowerCase() === path.replace('.html', '').toLowerCase();
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" data-name="header">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="index.html" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center text-white">
                            <span className="icon-graduation-cap text-2xl"></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[var(--primary-dark)] leading-tight">Green Valley</span>
                            <span className="text-xs text-[var(--primary-light)] font-medium tracking-wide">PRIMARY SCHOOL</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.path}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--primary-color)] 
                                    ${isActive(item.path) ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-gray-600'}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 text-gray-600 hover:text-[var(--primary-color)]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.path}
                                className={`text-base font-medium px-4 py-2 rounded-md
                                    ${isActive(item.path) ? 'bg-[var(--secondary-color)] text-[var(--primary-color)]' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}