function AboutApp() {
    const sections = [
        {
            year: "1861",
            title: "The Foundation",
            text: "It began with a vision. In the dusty streets of King William's Town, a decision was made to establish an institution that would not merely educate boys, but forge men. The foundation stone was laid, marking the birth of a legacy that would echo through centuries.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop"
        },
        {
            year: "1877",
            title: "The Dale Name",
            text: "Named after Sir Langham Dale, Superintendent General of Education, the college adopted its identity. The name 'Dale' became synonymous with a specific breed of toughness and intellect—a duality that defines us to this day.",
            image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=1974&auto=format&fit=crop"
        },
        {
            year: "1910s",
            title: "Brothers in Arms",
            text: "The Great War tested the resolve of the Daleian spirit. Hundreds of Old Boys answered the call, trading rugby jerseys for military fatigues. Their sacrifice is etched into the very stones of our campus, a somber reminder of duty.",
            image: "https://images.unsplash.com/photo-1528659570884-6d2c49c71675?q=80&w=2000&auto=format&fit=crop"
        },
        {
            year: "1950s",
            title: "Golden Era of Sport",
            text: "Mid-century saw Dale cement its reputation as a sporting powerhouse. The First XV became feared across the nation, playing a brand of running rugby that dazzled crowds and dismantled opponents.",
            image: "https://images.unsplash.com/photo-1519003300449-424423927692?q=80&w=2072&auto=format&fit=crop"
        },
        {
            year: "1990s",
            title: "A New Dawn",
            text: "As South Africa transformed, so did Dale. Embracing diversity while holding fast to our core values, the college became a model of integration and brotherhood, proving that the Heron's flight knows no boundaries.",
            image: "https://images.unsplash.com/photo-1529390003868-e9fd267d9688?q=80&w=2076&auto=format&fit=crop"
        },
        {
            year: "2026",
            title: "The Future",
            text: "Today, we stand taller than ever. Modern facilities, cutting-edge academics, and an undying spirit. The methods have evolved, but the mission remains: Per Ardua ad Astra - Through Adversity to the Stars.",
            image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[var(--dale-black)] text-white">
            <Header activePage="our story" />
            
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-6xl font-display font-bold mb-4 text-white">Where It All Began</h1>
                <p className="text-xl text-[var(--dale-gold)] uppercase tracking-widest">The Dale Odyssey</p>
            </div>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--dale-red)] transform -translate-x-1/2 hidden md:block"></div>

                {sections.map((section, index) => (
                    <div key={index} className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden border-t border-white/10 bg-[var(--dale-black)]">
                        {/* Background Image Parallaxish */}
                        <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-1000">
                             <img src={section.image} alt={section.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[5s]" />
                             <div className="absolute inset-0 bg-black/60"></div>
                        </div>

                        <div className={`relative z-10 container-custom flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-8xl font-display font-bold text-white/10 absolute -top-20 -left-10 z-0 select-none">{section.year}</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--dale-red)] mb-6 relative z-10">{section.title}</h2>
                                <div className="text-lg md:text-xl leading-relaxed text-slate-300 relative z-10 bg-black/40 p-6 backdrop-blur-sm border-l-2 border-[var(--dale-red)]">
                                    {section.text}
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="w-64 h-64 rounded-full border-4 border-[var(--dale-gold)] p-2">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={section.image} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);