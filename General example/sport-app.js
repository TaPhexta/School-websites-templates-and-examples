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

function FacilitiesSection() {
    return (
        <Section className="bg-pattern-grid">
            <div className="text-center mb-16">
                <h2 className="section-title">World-Class Facilities</h2>
                <p className="section-subtitle">Our campus boasts excellent sporting facilities to support physical development.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Swimming Pool', 'Football Field', 'Tennis Courts', 'Indoor Gymnasium'].map((item, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl h-64 shadow-md cursor-pointer">
                        <div className="absolute inset-0 bg-[var(--primary-dark)]/20 group-hover:bg-[var(--primary-dark)]/10 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-white font-bold text-xl">{item}</h3>
                        </div>
                        <img 
                            src={`https://source.unsplash.com/featured/?sport,${item.split(' ')[0]}`} 
                            className="w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110"
                            alt={item}
                            // Fallback for unsplash source
                            onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=2070&auto=format&fit=crop'}}
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
}

function TeamSection() {
    return (
        <Section className="bg-pattern-diagonal relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary-light)] to-transparent opacity-30"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <img 
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" 
                        alt="Sports Team" 
                        className="rounded-2xl shadow-xl w-full"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="section-title">The Green Valley Lions</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        Our school teams, known as the Lions, compete in local and regional leagues with pride and passion. We believe that competitive sport teaches valuable life lessons about teamwork, resilience, and fair play.
                    </p>
                    <ul className="space-y-4">
                        {[
                            'Football', 'Netball', 'Swimming', 'Athletics', 'Cricket'
                        ].map((sport, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white">
                                    <span className="icon-check text-sm"></span>
                                </span>
                                <span className="font-semibold text-[var(--text-dark)]">{sport}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="sport" />
            <main className="flex-grow">
                <Hero 
                    title="Sport & Physical Education" 
                    subtitle="Building healthy bodies and competitive spirits through inclusive sports programs."
                    bgImage="https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=2070&auto=format&fit=crop"
                />
                <FacilitiesSection />
                <TeamSection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);