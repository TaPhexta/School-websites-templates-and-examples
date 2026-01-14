function Pillars() {
    const pillars = [
        {
            title: "Discipline",
            icon: "scale",
            desc: "The foundation of character. We forge men who understand that true freedom comes from self-control and responsibility."
        },
        {
            title: "Rugby",
            icon: "trophy",
            desc: "A tradition of excellence. On the field, we learn resilience, teamwork, and the warrior spirit that defines the Heron."
        },
        {
            title: "Leadership",
            icon: "users",
            desc: "Not just taught, but lived. Every Daleian is prepared to lead with integrity, serving their community and country."
        },
        {
            title: "Tradition",
            icon: "landmark",
            desc: "A legacy of over 160 years. We stand on the shoulders of giants, upholding values that stand the test of time."
        }
    ];

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden" data-name="pillars" data-file="components/Pillars.js">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[var(--dale-red)] uppercase tracking-widest text-sm font-bold mb-3 block">The Dale Difference</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--dale-black)] mb-6">Building Men of Stature</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Dale College stands as a beacon of excellence in the Eastern Cape. We don't just educate; we shape character through a balanced pursuit of academics, sport, culture, and service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group p-8 bg-[var(--dale-gray)] hover:bg-[var(--dale-black)] transition-all duration-500 rounded-sm hover:-translate-y-2">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--dale-red)] transition-colors duration-500 shadow-md">
                                <div className={`icon-${pillar.icon} text-2xl text-[var(--dale-black)] group-hover:text-white`}></div>
                            </div>
                            <h3 className="text-xl font-bold font-display mb-4 text-[var(--dale-black)] group-hover:text-white transition-colors">{pillar.title}</h3>
                            <p className="text-sm text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors border-t border-slate-200 group-hover:border-white/20 pt-4">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}