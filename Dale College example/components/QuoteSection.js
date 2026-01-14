function QuoteSection() {
    return (
        <section className="py-24 bg-[var(--dale-black)] text-white relative isolate overflow-hidden" data-name="quote" data-file="components/QuoteSection.js">
            <div className="absolute inset-0 -z-10 opacity-20">
                <img 
                    src="https://images.unsplash.com/photo-1529390003868-e9fd267d9688?q=80&w=2076&auto=format&fit=crop" 
                    alt="Dale Students" 
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="container-custom text-center">
                <div className="icon-quote text-6xl text-[var(--dale-red)] opacity-50 mx-auto mb-8"></div>
                <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight mb-10 max-w-4xl mx-auto">
                    "When people hear 'Dale', they think tough, well-mannered boys who can lead and perform under pressure."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-[var(--dale-red)]"></div>
                    <cite className="text-lg uppercase tracking-widest font-bold not-italic text-white/80">The Dale Spirit</cite>
                    <div className="h-px w-12 bg-[var(--dale-red)]"></div>
                </div>
            </div>
        </section>
    );
}