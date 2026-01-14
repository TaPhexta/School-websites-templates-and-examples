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

function DailyLifeSection() {
    const timetable = [
        { time: '08:30', activity: 'Registration & Assembly' },
        { time: '09:00', activity: 'Morning Lessons' },
        { time: '10:30', activity: 'Break Time' },
        { time: '10:45', activity: 'Mid-Morning Lessons' },
        { time: '12:00', activity: 'Lunch & Play' },
        { time: '13:00', activity: 'Afternoon Lessons' },
        { time: '15:15', activity: 'School Ends / Clubs Begin' },
    ];

    return (
        <Section className="bg-pattern-dots">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="section-title">A Day at Green Valley</h2>
                    <p className="text-gray-600 mb-8">
                        Our school day is structured to provide a balance of academic learning, physical activity, and social interaction. We ensure every child feels settled and ready to learn from the moment they step through the gates.
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--primary-light)] opacity-5 rounded-bl-full"></div>
                        <h3 className="font-bold text-lg mb-4 text-[var(--primary-dark)]">Typical Daily Schedule</h3>
                        <div className="space-y-3">
                            {timetable.map((slot, i) => (
                                <div key={i} className="flex gap-4 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                    <span className="font-bold text-[var(--primary-light)] w-16">{slot.time}</span>
                                    <span className="text-gray-700">{slot.activity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid gap-6">
                    <img src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1887&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-full object-cover min-h-[400px]" alt="School Life" />
                </div>
            </div>
        </Section>
    );
}

function ClubsSection() {
    const clubs = [
        { name: 'Chess Club', icon: 'icon-crown' },
        { name: 'Drama Society', icon: 'icon-drama' },
        { name: 'Robotics', icon: 'icon-bot' },
        { name: 'Gardening', icon: 'icon-flower' },
        { name: 'Choir', icon: 'icon-music' },
        { name: 'Art Club', icon: 'icon-palette' },
    ];

    return (
        <Section className="bg-[var(--primary-dark)] text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Extracurricular Activities</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">Beyond the classroom, we offer a vibrant range of clubs to ignite new passions.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {clubs.map((club, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center hover:bg-white/20 transition-all cursor-default group">
                        <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <span className={`${club.icon} text-xl`}></span>
                        </div>
                        <h3 className="font-bold text-white">{club.name}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="life" />
            <main className="flex-grow">
                <Hero 
                    title="Life at School" 
                    subtitle="A vibrant community where friendships blossom and character is built."
                    bgImage="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1887&auto=format&fit=crop"
                />
                <DailyLifeSection />
                <ClubsSection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);