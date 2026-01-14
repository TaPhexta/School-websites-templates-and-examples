function CheckerboardSection({ title, text, headImage, images = [], isReversed, icon }) {
    // A simple carousel logic
    const [currentImage, setCurrentImage] = React.useState(0);
    
    React.useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images]);

    // Safety check if no images are provided
    if (!images || images.length === 0) {
        return null; // Or render a placeholder
    }

    return (
        <div className="flex flex-col md:flex-row min-h-[500px] w-full bg-white">
            {/* Text Block */}
            <div className={`w-full md:w-1/2 p-12 lg:p-20 relative flex flex-col justify-center bg-white ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                {/* Head of Code Image in Top Corner */}
                <div className={`absolute top-0 ${isReversed ? 'right-0' : 'left-0'} w-24 h-24 lg:w-32 lg:h-32 bg-[var(--dale-gray)] z-10 overflow-hidden border-b-4 border-[var(--dale-red)]`}>
                    <img src={headImage} alt="Head of Code" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 mt-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`icon-${icon} text-[var(--dale-red)] text-2xl`}></div>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--dale-black)] uppercase">{title}</h2>
                    </div>
                    <div className="h-1 w-20 bg-[var(--dale-red)] mb-8"></div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {text}
                    </p>
                    <button className="text-[var(--dale-red)] font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2 group">
                        View Schedule <span className="icon-arrow-right group-hover:translate-x-1 transition-transform"></span>
                    </button>
                </div>
            </div>

            {/* Carousel Block */}
            <div className={`w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden bg-black ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                {images.map((img, idx) => (
                    <div 
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={img} alt="Carousel" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                ))}
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-[var(--dale-red)] w-6' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}