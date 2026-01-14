function AdmissionsApp() {
    return (
        <div className="bg-white">
            <Header activePage="admissions" />
            
            <div className="pt-40 pb-20 bg-[var(--dale-gray)]">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-display font-bold mb-6 text-[var(--dale-black)]">Join the Brotherhood</h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600">
                        Admission to Dale College is a commitment to excellence. We are looking for young men who are ready to embrace our values and contribute to our legacy.
                    </p>
                </div>
            </div>

            <div className="container-custom py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Steps / Info */}
                    <div className="lg:w-1/3 space-y-12">
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[var(--dale-black)] text-white flex items-center justify-center text-sm">1</span>
                                Application
                            </h3>
                            <p className="text-slate-600 pl-11">Complete the online form or download the PDF application. Ensure all supporting documents are attached.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[var(--dale-black)] text-white flex items-center justify-center text-sm">2</span>
                                Assessment
                            </h3>
                            <p className="text-slate-600 pl-11">Prospective students will write an entrance assessment focusing on Mathematics and English.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[var(--dale-black)] text-white flex items-center justify-center text-sm">3</span>
                                Interview
                            </h3>
                            <p className="text-slate-600 pl-11">Successful candidates and their parents will be invited for an interview with the Headmaster.</p>
                        </div>
                        
                        <div className="bg-[var(--dale-red)] text-white p-8 rounded-sm mt-8">
                            <h4 className="font-bold text-lg mb-4">Required Documents</h4>
                            <ul className="space-y-2 text-sm opacity-90 list-disc list-inside">
                                <li>Certified copy of Birth Certificate</li>
                                <li>Latest School Report</li>
                                <li>ID of Parents/Guardians</li>
                                <li>Proof of Residence</li>
                                <li>Character Reference</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3 bg-white border border-slate-200 p-8 md:p-12 shadow-xl">
                        <h2 className="text-3xl font-display font-bold mb-8 text-[var(--dale-black)]">Online Enquiry</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Student First Name</label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Student Surname</label>
                                    <input type="text" className="form-input" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Current Grade</label>
                                    <select className="form-input">
                                        <option>Grade 6</option>
                                        <option>Grade 7</option>
                                        <option>Grade 8</option>
                                        <option>Grade 9</option>
                                        <option>Grade 10</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Year of Entry</label>
                                    <select className="form-input">
                                        <option>2026</option>
                                        <option>2027</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-6">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Parent Name</label>
                                <input type="text" className="form-input mb-6" />
                                
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Email Address</label>
                                <input type="email" className="form-input mb-6" />

                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Message / Queries</label>
                                <textarea className="form-input h-32"></textarea>
                            </div>

                            <button className="btn btn-primary w-full">Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdmissionsApp />);