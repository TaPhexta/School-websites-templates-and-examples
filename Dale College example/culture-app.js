function CultureApp() {
    const activities = [
        {
            title: "Music",
            text: "The sound of the Dale Choir is known throughout the land. From classical choral pieces to traditional African hymns, our music department fosters a deep appreciation for harmony and rhythm.",
            headImage: "https://images.unsplash.com/photo-1542596768-5d1d21f1cfb6?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1465847899078-b29dedca37a9?q=80&w=2070&auto=format&fit=crop"
            ],
            icon: "music"
        },
        {
            title: "Debating",
            text: "Sharpening minds and tongues. The debating society tackles complex global issues, teaching boys to articulate their thoughts with clarity, logic, and persuasion. Leaders must be able to speak.",
            headImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            ],
            icon: "mic"
        },
        {
            title: "Drama",
            text: "The stage is a classroom for empathy and expression. Our dramatic arts program puts on major productions annually, allowing boys to explore different perspectives and build supreme confidence.",
            headImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507676184212-d0370baf673c?q=80&w=2069&auto=format&fit=crop"
            ],
            icon: "clapperboard"
        }
    ];

    return (
        <div className="bg-white">
            <Header activePage="culture" />
            
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop" 
                        alt="Culture" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[var(--dale-black)]/70"></div>
                </div>
                <div className="relative z-10 text-center text-white container-custom">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">Culture</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto uppercase tracking-widest text-[var(--dale-gold)]">The Soul of the School</p>
                </div>
            </div>

            <div className="flex flex-col">
                {activities.map((activity, index) => (
                    <CheckerboardSection 
                        key={index}
                        {...activity}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CultureApp />);