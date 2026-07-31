const plans = [
  {
    name: 'Basic',
    price: '19',
    period: 'ONE TIME',
    features: [
      'Responsive Portfolio',
      'Free Hosting',
      'Resume Upload',
      'Contact Section',
      'Mobile Friendly',
    ],
    btnLabel: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '35',
    period: 'ONE TIME',
    features: [
      'Custom Domain',
      'Premium Design',
      'SEO Optimization',
      'Unlimited Projects',
      'Priority Support',
    ],
    btnLabel: 'Contact Support',
    popular: true,
  },
  {
    name: 'Business',
    price: '49',
    period: 'ONE TIME',
    features: [
      'Advanced Portfolio',
      'Admin Dashboard',
      'Blog Support',
      'Analytics',
      'Premium Hosting',
    ],
    btnLabel: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-sub">
            Affordable portfolio websites designed to help you stand out and
            land your next opportunity.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card${plan.popular ? ' popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              <div className="pricing-divider" />

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="check-icon">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`pricing-btn${plan.popular ? ' pricing-btn-popular' : ''}`}>
                {plan.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
