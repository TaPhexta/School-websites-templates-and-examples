function BoardingApp() {
    return (
        <div className="bg-white">
            <Header activePage="boarding" />
            
            {/* Hero */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2000&auto=format&fit=crop" 
                        alt="Boarding" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--dale-black)]/90 via-[var(--dale-black)]/50 to-transparent"></div>
                </div>
                <div className="relative z-10 container-custom w-full">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-6xl font-display font-bold mb-6">Home Away From Home</h1>
                        <p className="text-xl leading-relaxed opacity-90 mb-8">
                            Boarding at Dale is more than accommodation. It's an induction into a brotherhood. Here, bonds are forged that last a lifetime.
                        </p>
                        <button className="btn btn-primary">Download Boarding Guide</button>
                    </div>
                </div>
            </div>

            {/* Hostels Section */}
            <div className="py-24 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { name: "Sutton House", desc: "Junior Boarding House (Grades 8-9)" },
                        { name: "Paterson House", desc: "Senior Boarding House (Grades 10-11)" },
                        { name: "Joubert House", desc: "Matric Boarding House (Grade 12)" }
                    ].map((house, idx) => (
                        <div key={idx} className="bg-[var(--dale-gray)] p-8 rounded-sm text-center hover:bg-[var(--dale-black)] hover:text-white transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 text-[var(--dale-red)] group-hover:bg-[var(--dale-red)] group-hover:text-white transition-colors">
                                <div className="icon-home text-2xl"></div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-2">{house.name}</h3>
                            <p className="text-sm uppercase tracking-widest opacity-70">{house.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Daily Routine */}
            <div className="bg-[var(--dale-black)] text-white py-24">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-display font-bold mb-6 text-[var(--dale-red)]">A Structured Life</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Routine is the bedrock of discipline. Our boarders follow a carefully structured schedule that balances academic rigor, sport, and leisure.
                            </p>
                            <ul className="space-y-4 border-l border-white/20 pl-6">
                                <li className="flex flex-col">
                                    <span className="font-bold text-[var(--dale-gold)]">05:30</span>
                                    <span className="text-sm text-slate-400">Rise & Shine / Morning Inspection</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="font-bold text-[var(--dale-gold)]">14:30</span>
                                    <span className="text-sm text-slate-400">Sport Practice</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="font-bold text-[var(--dale-gold)]">19:00</span>
                                    <span className="text-sm text-slate-400">Evening Prep (Study)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" className="rounded-sm shadow-2xl opacity-80" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BoardingApp />);