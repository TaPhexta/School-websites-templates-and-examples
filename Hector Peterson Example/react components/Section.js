function Section({ children, className = "", id = "" }) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`} data-name="section">
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}