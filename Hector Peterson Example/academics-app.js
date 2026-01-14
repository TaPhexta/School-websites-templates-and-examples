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

function CurriculumSection() {
    const subjects = [
        { name: 'Mathematics', icon: 'icon-calculator' },
        { name: 'Science', icon: 'icon-flask-conical' },
        { name: 'English', icon: 'icon-book-a' },
        { name: 'History', icon: 'icon-landmark' },
        { name: 'Geography', icon: 'icon-globe' },
        { name: 'Computing', icon: 'icon-monitor' }
    ];

    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="section-title">Our Curriculum</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Our academic program is designed to be rigorous, relevant, and engaging. We follow the National Curriculum while enriching it with additional opportunities for deep learning and exploration.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We focus on core subjects to build a strong foundation, while also encouraging critical thinking and problem-solving skills across all disciplines.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {subjects.map((sub, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <span className={`${sub.icon} text-[var(--primary-color)]`}></span>
                                <span className="font-medium text-gray-800">{sub.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                    <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                </div>
            </div>
        </Section>
    );
}

function MethodologySection() {
    return (
        <Section className="bg-[var(--secondary-color)]">
            <div className="text-center mb-12">
                <h2 className="section-title">Teaching Methodology</h2>
                <p className="section-subtitle">How we help every child succeed.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[var(--primary-color)]">
                    <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
                    <p className="text-gray-600">We recognize that every child learns differently. Our teachers adapt their strategies to meet individual needs.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[var(--accent-color)]">
                    <h3 className="text-xl font-bold mb-4">Active Engagement</h3>
                    <p className="text-gray-600">Lessons are interactive and hands-on, encouraging students to participate and discover knowledge for themselves.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[var(--primary-color)]">
                    <h3 className="text-xl font-bold mb-4">Technology Integration</h3>
                    <p className="text-gray-600">We use modern technology as a tool to enhance learning, preparing students for a digital future.</p>
                </div>
            </div>
        </Section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="academics" />
            <main className="flex-grow">
                <Hero 
                    title="Academic Excellence" 
                    subtitle="Fostering intellectual curiosity and a love for learning."
                    bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
                />
                <CurriculumSection />
                <MethodologySection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);