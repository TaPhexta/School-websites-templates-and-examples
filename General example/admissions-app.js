class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('ErrorBoundary:', error, errorInfo); }
  render() {
    if (this.state.hasError) return <div className="p-10 text-center">Something went wrong.</div>;
    return this.props.children;
  }
}

function ProcessSection() {
    const steps = [
        { 
            title: '1. Inquiry', 
            desc: 'Fill out our online inquiry form or schedule a tour to visit our campus.',
            icon: 'icon-search' 
        },
        { 
            title: '2. Application', 
            desc: 'Submit the formal application along with the required documents and fee.',
            icon: 'icon-file-text' 
        },
        { 
            title: '3. Assessment', 
            desc: 'Students may be invited for an assessment or interview depending on their age.',
            icon: 'icon-clipboard-check' 
        },
        { 
            title: '4. Offer', 
            desc: 'Successful applicants will receive a formal offer letter to join Green Valley.',
            icon: 'icon-mail' 
        },
    ];

    return (
        <Section className="bg-pattern-dots">
            <div className="text-center mb-16">
                <h2 className="section-title">Admissions Process</h2>
                <p className="section-subtitle">We strive to make our admissions process as smooth and transparent as possible.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative group">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full card-hover relative z-10">
                            <div className="w-14 h-14 bg-[var(--secondary-color)] rounded-full flex items-center justify-center text-[var(--primary-color)] mb-6 mx-auto group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors">
                                <span className={`${step.icon} text-2xl`}></span>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3 text-center">{step.title}</h3>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 z-0"></div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

function FeesSection() {
    return (
        <Section className="bg-pattern-grid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img 
                        src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1887&auto=format&fit=crop" 
                        alt="Students in uniform" 
                        className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="section-title">Tuition & Fees</h2>
                        <p className="text-gray-600 mb-6">
                            We are committed to providing value through an exceptional educational experience. Our fees cover tuition, text books, and most co-curricular activities.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-[var(--primary-dark)] p-4 text-white font-bold flex justify-between">
                            <span>Year Group</span>
                            <span>Annual Fee</span>
                        </div>
                        <div className="divide-y divide-gray-100">
                            <div className="p-4 flex justify-between hover:bg-gray-50">
                                <span className="font-medium">Reception</span>
                                <span className="text-[var(--primary-light)] font-bold">$12,500</span>
                            </div>
                            <div className="p-4 flex justify-between hover:bg-gray-50">
                                <span className="font-medium">Year 1 - Year 2</span>
                                <span className="text-[var(--primary-light)] font-bold">$13,500</span>
                            </div>
                            <div className="p-4 flex justify-between hover:bg-gray-50">
                                <span className="font-medium">Year 3 - Year 6</span>
                                <span className="text-[var(--primary-light)] font-bold">$14,500</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-[var(--secondary-color)] p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-[var(--primary-dark)] mb-2 flex items-center gap-2">
                            <span className="icon-info text-[var(--primary-light)]"></span>
                            Financial Aid
                        </h4>
                        <p className="text-sm text-gray-600">
                            We offer a limited number of bursaries for families who require financial assistance. Please contact the admissions office for more details.
                        </p>
                    </div>
                    
                    <a href="contact.html" className="btn-primary">
                        Contact Admissions
                    </a>
                </div>
            </div>
        </Section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="admissions" />
            <main className="flex-grow">
                <Hero 
                    title="Admissions" 
                    subtitle="We invite you to become part of our vibrant learning community."
                    bgImage="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                    ctaText="Apply Now"
                    ctaLink="#apply"
                />
                <ProcessSection />
                <FeesSection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);