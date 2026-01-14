function Hero({ title, subtitle, bgImage, ctaText, ctaLink, bgImages = [] }) {
    // If bgImages is provided, use it; otherwise fallback to single bgImage
    const images = bgImages.length > 0 ? bgImages : (bgImage ? [bgImage] : []);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden" data-name="hero">
            {/* Background Carousel */}
            <div className="absolute inset-0 z-0 bg-black">
                {images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img 
                            src={img} 
                            alt={`Hero Background ${index + 1}`} 
                            className="w-full h-full object-cover animate-hero-bg opacity-70"
                        />
                    </div>
                ))}
                
                {/* Gradient Overlays for better text readability and theme integration */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
                <div className="max-w-4xl mx-auto reveal-hidden reveal-visible">
                    <div className="mb-6 inline-block">
                        <span className="py-2 px-4 rounded-full bg-[var(--primary-light)]/90 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-sm animate-float">
                            Welcome to Excellence
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg">
                        {title}
                    </h1>
                    
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md opacity-90">
                            {subtitle}
                        </p>
                    )}
                    
                    {ctaText && ctaLink && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href={ctaLink} 
                                className="btn-primary transform transition-transform hover:scale-105"
                            >
                                {ctaText}
                                <span className="icon-arrow-right"></span>
                            </a>
                            <button 
                                onClick={handleScrollDown}
                                className="btn-outline transform transition-transform hover:scale-105"
                            >
                                Learn More
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={handleScrollDown}>
                <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-widest text-white/80">Scroll</span>
                    <span className="icon-chevron-down text-white text-2xl"></span>
                </div>
            </div>

            {/* Decorative bottom curve */}
            <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white w-full h-auto block">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                </svg>
            </div>
        </div>
    );
}