// Important: DO NOT remove this `ErrorBoundary` component.
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
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Header activePage="home" />
        <main>
            <Hero />
            <Pillars />
            <QuoteSection />
            <Stats />
            
            {/* News / Latest Section Preview */}
            <section className="section-padding bg-slate-50">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-[var(--dale-red)] uppercase tracking-widest text-sm font-bold mb-2 block">Latest News</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--dale-black)]">Life at Dale</h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-2 text-[var(--dale-black)] font-medium hover:text-[var(--dale-red)] transition-colors group">
                            View All News <span className="icon-arrow-right group-hover:translate-x-1 transition-transform"></span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <article key={item} className="group bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={`https://images.unsplash.com/photo-${item === 1 ? '1519003300449-424423927692' : item === 2 ? '1509062522246-3755977927d7' : '1523580494863-6f3031224c94'}?q=80&w=800&auto=format&fit=crop`} 
                                        alt="News" 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-[var(--dale-red)] font-bold mb-2 uppercase">Sport</div>
                                    <h3 className="text-xl font-bold font-display mb-3 group-hover:text-[var(--dale-red)] transition-colors">
                                        {item === 1 ? 'First XV Rugby Team Dominates Regional Derby' : item === 2 ? 'Academic Awards Ceremony 2025' : 'New Science Centre Opening'}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[var(--dale-black)] group-hover:text-[var(--dale-red)]">
                                        Read More
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);