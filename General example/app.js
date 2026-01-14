// Error Boundary is already defined in the template, but we will redefine it here for clarity as this replaces the whole file
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function WelcomeSection() {
    return (
        <Section className="bg-pattern-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-[var(--primary-color)] font-bold tracking-wider uppercase text-sm">Welcome to Green Valley</span>
                    <h2 className="text-4xl font-bold text-[var(--text-dark)] leading-tight">
                        A Foundation for <span className="text-[var(--primary-color)]">Lifelong Learning</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        At Green Valley Primary School, we believe that every child is unique and has the potential to achieve greatness. Our dedicated team of educators nurtures curiosity, fosters creativity, and builds character.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We provide a safe, inclusive, and stimulating environment where academic excellence goes hand in hand with social and emotional development.
                    </p>
                    <div className="pt-4">
                        <a href="academics.html" className="btn-primary">
                            Discover Our Curriculum
                            <span className="icon-arrow-right"></span>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--accent-color)] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--primary-color)] rounded-full opacity-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                        alt="Students learning" 
                        className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                    />
                </div>
            </div>
        </Section>
    );
}

function StatsSection() {
    const stats = [
        { label: 'Happy Students', value: '500+', icon: 'icon-users' },
        { label: 'Expert Teachers', value: '45+', icon: 'icon-award' },
        { label: 'Years of Excellence', value: '25', icon: 'icon-history' },
        { label: 'School Clubs', value: '30+', icon: 'icon-star' },
    ];

    return (
        <Section className="bg-[var(--primary-dark)] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                            <span className={`${stat.icon} text-2xl`}></span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                        <p className="text-gray-300 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function FeaturesSection() {
    const features = [
        { 
            title: 'Academic Excellence', 
            desc: 'A rigorous curriculum designed to challenge and inspire students to reach their full potential.',
            icon: 'icon-book-open',
            link: 'academics.html'
        },
        { 
            title: 'Sports & Athletics', 
            desc: 'State-of-the-art facilities and a wide range of sports to promote physical health and teamwork.',
            icon: 'icon-trophy',
            link: 'sport.html'
        },
        { 
            title: 'Creative Arts', 
            desc: 'Nurturing creativity through music, drama, and visual arts programs.',
            icon: 'icon-palette',
            link: 'life.html'
        },
    ];

    return (
        <Section className="bg-pattern-diagonal">
            <div className="text-center mb-16">
                <h2 className="section-title">Why Choose Green Valley?</h2>
                <p className="section-subtitle">We offer a holistic education that prepares children for the future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 card-hover border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-light)] opacity-5 rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
                        <div className="w-14 h-14 bg-[var(--secondary-color)] rounded-xl shadow-sm flex items-center justify-center text-[var(--primary-color)] mb-6 relative z-10">
                            <span className={`${feature.icon} text-3xl`}></span>
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3 relative z-10">{feature.title}</h3>
                        <p className="text-gray-600 mb-6 relative z-10">{feature.desc}</p>
                        <a href={feature.link} className="text-[var(--primary-color)] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all relative z-10">
                            Learn More <span className="icon-arrow-right"></span>
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function App() {
    const heroImages = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1887&auto=format&fit=crop"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="home" />
            <main className="flex-grow">
                <Hero 
                    title="Inspiring Young Minds" 
                    subtitle="Empowering the next generation with knowledge, character, and confidence in a world of opportunity."
                    bgImages={heroImages}
                    ctaText="Applications"
                    ctaLink="admissions.html"
                />
                <WelcomeSection />
                <StatsSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);