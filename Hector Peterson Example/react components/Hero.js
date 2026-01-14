function Hero({ title, subtitle, bgImage, ctaText, ctaLink }) {
    return (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20" data-name="hero">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 font-light">
                        {subtitle}
                    </p>
                )}
                {ctaText && ctaLink && (
                    <a 
                        href={ctaLink} 
                        className="bg-[var(--accent-color)] text-[var(--text-dark)] px-8 py-3 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                    >
                        {ctaText}
                        <span className="icon-arrow-right"></span>
                    </a>
                )}
            </div>
            
            {/* Decorative Curve at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white w-full h-auto block">
                    <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                </svg>
            </div>
        </div>
    );
}