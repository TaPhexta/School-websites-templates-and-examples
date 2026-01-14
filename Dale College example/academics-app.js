function AcademicsApp() {
    const staff = [
        { name: "Mr. C. Hatches", role: "Headmaster", subject: "Leadership" },
        { name: "Mr. J. Smith", role: "Deputy Head", subject: "Physical Science" },
        { name: "Mrs. A. Williams", role: "HOD Academics", subject: "English" },
        { name: "Mr. B. Nkosi", role: "Senior Master", subject: "Mathematics" },
        { name: "Ms. L. Van Der Merwe", role: "Grade Head", subject: "Life Sciences" },
        { name: "Mr. T. Bala", role: "Sports Director", subject: "History" },
        { name: "Mrs. S. Govender", role: "Subject Head", subject: "Accounting" },
        { name: "Mr. P. Jacobs", role: "Teacher", subject: "Geography" },
    ];

    return (
        <div className="bg-white">
            <Header activePage="academics" />
            
            {/* Mission Section */}
            <div className="bg-[var(--dale-black)] text-white pt-40 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl font-display font-bold mb-8">Academic Excellence</h1>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-xl leading-relaxed text-slate-300">
                            "To cultivate an environment where intellectual curiosity meets disciplined study. We strive to produce young men who are critical thinkers, articulate speakers, and lifelong learners."
                        </p>
                        <div className="w-20 h-1 bg-[var(--dale-red)] mx-auto"></div>
                        <p className="text-sm uppercase tracking-widest text-[var(--dale-gold)]">The Dale Vision</p>
                    </div>
                </div>
            </div>

            {/* Staff Grid */}
            <div className="py-20 container-custom">
                <h2 className="text-3xl font-display font-bold text-[var(--dale-black)] mb-12 text-center">Our Faculty</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staff.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden bg-white shadow-lg rounded-sm">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                                <img 
                                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1560250097-0b93528c311a' : '1573496359142-b8d87734a5a2'}?q=80&w=800&auto=format&fit=crop`} 
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 text-center bg-white absolute bottom-0 left-0 right-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold font-display text-[var(--dale-black)]">{member.name}</h3>
                                <p className="text-[var(--dale-red)] text-xs uppercase tracking-widest font-bold mb-1">{member.role}</p>
                                <p className="text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{member.subject}</p>
                            </div>
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 bg-[var(--dale-red)] text-white flex items-center justify-center rounded-full">
                                    <div className="icon-mail text-xs"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AcademicsApp />);