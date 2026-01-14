function Section({ children, className = "", id = "" }) {
    const sectionRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Once visible, keep it visible (no toggle)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Clone children to add animation classes if they are valid React elements
    // This is a bit complex for a generic wrapper, so instead we'll wrap content in a div that animates
    
    return (
        <section 
            id={id} 
            ref={sectionRef}
            className={`py-20 md:py-32 ${className} overflow-hidden`} 
            data-name="section"
        >
            <div className={`container mx-auto px-4 md:px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {children}
            </div>
        </section>
    );
}