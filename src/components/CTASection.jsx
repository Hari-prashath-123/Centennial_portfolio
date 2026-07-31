export default function CTASection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-section">
      <div className="section-inner">
        <h2 className="cta-title">Ready to Build Your Dream Portfolio?</h2>
        <p className="cta-sub">
          Join 500+ professionals who already stand out with Centennial Portfolio.
        </p>
        <div className="cta-btns">
          <button className="btn-primary" onClick={() => scrollTo('pricing')}>
            Create My Portfolio
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('features')}>
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
