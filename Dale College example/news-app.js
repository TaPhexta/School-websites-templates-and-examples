function NewsApp() {
    const newsItems = [
        {
            date: "May 12, 2025",
            category: "Sport",
            title: "First XV Triumphs in Border Derby",
            content: "In a display of sheer grit and tactical brilliance, the Dale College First XV secured a memorable victory against their arch-rivals this past Saturday. The 'Graveyard' was alive with the war cries of thousands as the team overturned a halftime deficit to win 24-17. Captain Siya Xaba led from the front, scoring two pivotal tries."
        },
        {
            date: "April 28, 2025",
            category: "Academics",
            title: "Daleian Scholars Achieve National Recognition",
            content: "Three Grade 12 learners have been selected for the South African Mathematics Olympiad finals. This prestigious achievement underscores the rigorous academic standards upheld at the college. We congratulate Thabo Mokoena, James Smith, and David Williams on their outstanding performance."
        },
        {
            date: "April 15, 2025",
            category: "Culture",
            title: "Annual Choral Festival Date Announced",
            content: "The much-anticipated Annual Inter-Schools Choral Festival will take place on June 5th in the School Hall. This year promises to be our biggest yet, with choirs from across the Eastern Cape descending on King William's Town. Tickets go on sale next Monday."
        },
        {
            date: "March 30, 2025",
            category: "Old Boys",
            title: "Reunion Weekend 2025: A Resounding Success",
            content: "Over 500 Old Daleians returned to their alma mater last weekend to celebrate camaraderie and tradition. The weekend kicked off with a formal dinner on Friday evening, followed by a day of sport and reminiscence. It was a powerful reminder that one never truly leaves Dale."
        }
    ];

    return (
        <div className="bg-white">
            <Header activePage="news" />
            
            <div className="pt-40 pb-12 container-custom text-center border-b-4 border-double border-[var(--dale-black)] mb-12">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-[var(--dale-black)] mb-4 tracking-tighter">THE HERON</h1>
                <div className="flex justify-between text-xs uppercase tracking-widest font-bold border-t border-[var(--dale-black)] pt-2 mt-4">
                    <span>Vol. 165</span>
                    <span>King William's Town</span>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>
            </div>

            <div className="container-custom pb-24">
                <div className="space-y-16">
                    {newsItems.map((item, index) => (
                        <article key={index} className="flex flex-col md:flex-row gap-8 pb-16 border-b border-slate-200 last:border-0">
                            <div className="md:w-1/4">
                                <div className="text-[var(--dale-red)] font-bold uppercase tracking-widest text-sm mb-2">{item.category}</div>
                                <div className="text-slate-400 font-display italic">{item.date}</div>
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-3xl font-display font-bold text-[var(--dale-black)] mb-6 hover:text-[var(--dale-red)] transition-colors cursor-pointer">{item.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-serif text-justify">
                                    {item.content}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NewsApp />);