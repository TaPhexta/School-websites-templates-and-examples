function SportApp() {
    const sports = [
        {
            title: "Rugby",
            text: "The heartbeat of Dale College. Our rugby program demands the highest level of physical conditioning, tactical awareness, and mental fortitude. The First XV 'Herons' are guardians of a sacred legacy.",
            headImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1519003300449-424423927692?q=80&w=2072&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1628779238951-be2c9f2a0758?q=80&w=1000&auto=format&fit=crop"
            ],
            icon: "trophy"
        },
        {
            title: "Cricket",
            text: "A gentleman's game played with fierce intensity. Our cricket facilities include turf nets and a first-class oval. We focus on technique, patience, and the strategic mastery required for long-format dominance.",
            headImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1593341646261-285ee7072a2e?q=80&w=2070&auto=format&fit=crop"
            ],
            icon: "circle-dot"
        },
        {
            title: "Athletics",
            text: "Speed, power, and endurance. The athletics club has produced numerous provincial and national champions. We believe in individual excellence contributing to the collective glory of the school.",
            headImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1552674605-46955595a22e?q=80&w=2074&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
            ],
            icon: "activity"
        },
        {
            title: "Hockey",
            text: "Skill and precision on the astro. Dale Hockey has grown exponentially, blending tactical European styles with South African flair. A sport that requires quick thinking and even quicker reflexes.",
            headImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1563205764-bf630e10b25c?q=80&w=2070&auto=format&fit=crop"
            ],
            icon: "shield"
        }
    ];

    return (
        <div className="bg-white">
            <Header activePage="sport" />
            
            {/* Sport Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1519003300449-424423927692?q=80&w=2072&auto=format&fit=crop" 
                        alt="Rugby" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white container-custom">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">Sport</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto uppercase tracking-widest text-[var(--dale-gold)]">Battlefields of Character</p>
                </div>
            </div>

            {/* Checkerboard Layout */}
            <div className="flex flex-col">
                {sports.map((sport, index) => (
                    <CheckerboardSection 
                        key={index}
                        {...sport}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SportApp />);