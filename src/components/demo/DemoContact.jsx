import React from 'react';

export default function DemoContact({ data, isEditorOpen, onUpdate }) {
  if (!data) return null;

  return (
    <div className="dp-section dp-contact">
      <div className="dp-section-header">
        <h2 className="dp-section-title">Get In Touch</h2>
        <div className="dp-section-underline"></div>
      </div>

      <div className="dp-contact-grid">
        {/* Contact Info Card */}
        <div className="dp-contact-card">
          <h3 className="dp-contact-card-title">Contact Information</h3>

          <div className="dp-contact-row">
            <div className="dp-contact-icon-box">
              {/* email icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div className="dp-contact-label">EMAIL</div>
              {isEditorOpen ? (
                <input type="text" className="dp-editor-input" value={data.email} onChange={(e) => {
                  onUpdate('contact', null, { ...data, email: e.target.value });
                }} />
              ) : (
                <div className="dp-contact-value">{data.email}</div>
              )}
            </div>
          </div>

          <div className="dp-contact-row">
            <div className="dp-contact-icon-box">
              {/* phone icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div className="dp-contact-label">PHONE</div>
              {isEditorOpen ? (
                <input type="text" className="dp-editor-input" value={data.phone} onChange={(e) => {
                  onUpdate('contact', null, { ...data, phone: e.target.value });
                }} />
              ) : (
                <div className="dp-contact-value">{data.phone}</div>
              )}
            </div>
          </div>

          <div className="dp-contact-row">
            <div className="dp-contact-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12z"></path>
                <circle cx="12" cy="9" r="2.5"></circle>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div className="dp-contact-label">LOCATION</div>
              {isEditorOpen ? (
                <input type="text" className="dp-editor-input" value={data.location || ''} onChange={(e) => {
                  onUpdate('contact', null, { ...data, location: e.target.value });
                }} />
              ) : (
                <div className="dp-contact-value">{data.location || 'U.P, INDIA'}</div>
              )}
            </div>
          </div>

          <div className="dp-contact-opportunity">
            {isEditorOpen ? (
              <>
                <label className="dp-contact-opportunity-label">Opportunity Heading</label>
                <input
                  type="text"
                  className="dp-editor-input"
                  value={data.opportunityTitle || ''}
                  onChange={(e) => {
                    onUpdate('contact', null, { ...data, opportunityTitle: e.target.value });
                  }}
                />

                <label className="dp-contact-opportunity-label">Opportunity Text</label>
                <textarea
                  className="dp-editor-input"
                  rows="4"
                  value={data.opportunityText || ''}
                  onChange={(e) => {
                    onUpdate('contact', null, { ...data, opportunityText: e.target.value });
                  }}
                />
              </>
            ) : (
              <>
                <h4>{data.opportunityTitle || 'Open for Opportunities'}</h4>
                <p>
                  {data.opportunityText || "I'm actively looking for entry-level MERN Stack Developer roles and internship opportunities. If you have an exciting project or role, feel free to connect with me!"}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Message Form Card */}
        <div className="dp-contact-card dp-contact-form-card">
          <h3 className="dp-contact-card-title">Send me a Message</h3>
          <div className="dp-contact-form">
            <input type="text" placeholder="Your Name" className="dp-contact-input" disabled={isEditorOpen} />
            <input type="email" placeholder="Email Address" className="dp-contact-input" disabled={isEditorOpen} />
            <textarea placeholder="Your Message" rows="5" className="dp-contact-input dp-contact-textarea" disabled={isEditorOpen}></textarea>
            <button className="dp-contact-submit" disabled={isEditorOpen}>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
