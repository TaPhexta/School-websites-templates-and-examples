function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/Hero.js">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1974&auto=format&fit=crop" 
                    alt="Dale College Main Building" 
                    className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110 ease-linear"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--dale-black)]/70 via-[var(--dale-black)]/40 to-[var(--dale-black)]/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-20">
                <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[var(--dale-red)] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 animate-fade-in-down">
                        <div className="font-display text-4xl md:text-5xl font-bold">D</div>
                    </div>
                </div>
                
                <h2 className="text-lg md:text-xl uppercase tracking-[0.4em] mb-4 text-[var(--dale-gold)] font-medium animate-fade-in-up">
                    Est. 1861
                </h2>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight animate-fade-in-up delay-100 text-shadow">
                    Per Ardua<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Ad Astra</span>
                </h1>
                
                <p className="text-lg md:text-2xl font-light text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
                    More than a school. A brotherhood. A legacy.<br/>
                    <span className="italic opacity-80 text-base mt-2 block">Through adversity to the stars.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <button className="btn btn-primary min-w-[180px]">
                        Our Story
                    </button>
                    <button className="btn btn-outline min-w-[180px]">
                        Virtual Tour
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60">
                <div className="icon-arrow-down text-2xl"></div>
            </div>
        </section>
    );
}