function Stats() {
    const stats = [
        { label: "Years of Heritage", value: "163+" },
        { label: "Springboks Produced", value: "15+" },
        { label: "Matric Pass Rate", value: "98%" },
        { label: "Sports Teams", value: "40+" }
    ];

    return (
        <section className="py-16 bg-[var(--dale-red)] text-white" data-name="stats" data-file="components/Stats.js">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4">
                            <div className="text-4xl md:text-5xl font-bold font-display mb-2">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest opacity-80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}