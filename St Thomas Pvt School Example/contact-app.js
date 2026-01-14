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

function ContactForm() {
    const [status, setStatus] = React.useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                    <span className="icon-check text-3xl"></span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-green-800 font-semibold underline">Send another message</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-[var(--primary-dark)]">Send us a Message</h3>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent outline-none transition-all" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Admissions</option>
                        <option>Report Absence</option>
                        <option>Feedback</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea required rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-light)] focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full btn-primary justify-center"
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
}

function InfoSection() {
    return (
        <Section className="bg-[var(--secondary-color)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We welcome visits from prospective parents and students. Please contact our admissions office to schedule a tour or if you have any questions about our school.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary-color)] shadow-sm shrink-0">
                                <span className="icon-map-pin text-xl"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Visit Us</h4>
                                <p className="text-gray-600">123 Education Lane<br/>Green Valley, GV1 2AB</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary-color)] shadow-sm shrink-0">
                                <span className="icon-phone text-xl"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Call Us</h4>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-gray-500 text-sm">Mon-Fri, 8:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary-color)] shadow-sm shrink-0">
                                <span className="icon-mail text-xl"></span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email Us</h4>
                                <p className="text-gray-600">admissions@greenvalley.edu</p>
                                <p className="text-gray-600">info@greenvalley.edu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage="contact" />
            <main className="flex-grow">
                <Hero 
                    title="Contact Us" 
                    subtitle="We are here to help. Reach out to our friendly team."
                    bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                />
                <InfoSection />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);