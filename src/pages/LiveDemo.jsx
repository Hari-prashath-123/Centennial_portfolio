import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoAbout from '../components/demo/DemoAbout';
import DemoSkills from '../components/demo/DemoSkills';
import DemoProjects from '../components/demo/DemoProjects';
import DemoContact from '../components/demo/DemoContact';
import '../demo-sections.css';

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.63l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.07 7.07 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.12.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.85a.5.5 0 0 0 .12.63l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 14.52a.5.5 0 0 0-.12.63l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.51.39 1.05.71 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.58-.23 1.12-.55 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.63l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
  </svg>
);

const SaveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Zm-5 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm3-12H6V5h9v2Z" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
);

const DEMO_STORAGE_KEY = 'centennial-demo-state';

const readPersistedDemoState = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const rawState = window.localStorage.getItem(DEMO_STORAGE_KEY);
    if (!rawState) {
      return null;
    }

    return JSON.parse(rawState);
  } catch {
    return null;
  }
};

const mergeDemoData = (savedData) => ({
  ...defaultDemoData,
  ...savedData,
  hero: { ...defaultDemoData.hero, ...(savedData?.hero || {}) },
  header: { ...defaultDemoData.header, ...(savedData?.header || {}) },
  about: savedData?.about || defaultDemoData.about,
  skills: {
    ...defaultDemoData.skills,
    ...(savedData?.skills || {}),
    proficiency: savedData?.skills?.proficiency || defaultDemoData.skills.proficiency,
    technologies: savedData?.skills?.technologies || defaultDemoData.skills.technologies
  },
  projects: savedData?.projects || defaultDemoData.projects,
  contact: { ...defaultDemoData.contact, ...(savedData?.contact || {}) },
  footer: { ...defaultDemoData.footer, ...(savedData?.footer || {}) }
});

const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(new Error('Unable to read file'));
  reader.readAsDataURL(file);
});

const defaultDemoData = {
  hero: {
    firstName: "Ashwani",
    lastName: "Kumar Chauhan",
    role: "MERN Stack Developer",
    desc: "Passionate about creating responsive applications.",
    github: "",
    linkedin: "",
    image: null
  },
  header: {
    logoName: "Portfolio",
    logoImage: null
  },
  about: [
    { iconType: "code",    title: "Web Development",    desc: "Passionate about creating responsive applications." },
    { iconType: "learn",   title: "Continuous Learning", desc: "Always eager to learn new technologies." },
    { iconType: "gear",    title: "Problem Solving",     desc: "Enjoy tackling complex challenges." },
    { iconType: "brush",   title: "My Hobby",            desc: "My aim is clear to become full stack developer." }
  ],
  skills: {
    proficiency: [
      { name: "AI", percent: 85 },
      { name: "ABC", percent: 80 },
      { name: "MERN Stack", percent: 90 },
      { name: "Generative AI", percent: 70 },
      { name: "HTML", percent: 90 },
      { name: "CSS", percent: 79 }
    ],
    technologies: ["AI", "ABC", "MERN Stack", "Generative AI", "HTML", "CSS"]
  },
  projects: [
    { title: "Sales Funnel Optimization", desc: "Improved a company's sales funnel to increase conversions.", tag: "FUNNEL STEPS (LEAD -> CALL -> CLOSE)", link: "#" },
    { title: "CRM Management Project", desc: "Managed leads using tools like HubSpot or Salesforce.", tag: "LEAD TRACKING SYSTEM", link: "#" }
  ],
  contact: {
    email: "ashwanikumarchauhan014@gmail.com",
    phone: "+91 0000000000",
    location: "U.P, INDIA",
    opportunityTitle: "Open for Opportunities",
    opportunityText: "I'm actively looking for entry-level MERN Stack Developer roles and internship opportunities. If you have an exciting project or role, feel free to connect with me!"
  },
  footer: {
    name: "ashwani",
    tagline: "Building digital experiences with precision and passion.",
    copyright: "© 2026 Ashwani Kumar Chauhan. All rights reserved.",
    location: "Lucknow, Uttar Pradesh, India"
  }
};

export default function LiveDemo() {
  const persistedState = readPersistedDemoState();
  const [showDemo, setShowDemo] = useState(persistedState?.showDemo ?? false);
  const [isEditorOpen, setIsEditorOpen] = useState(persistedState?.isEditorOpen ?? false);
  const [isHeaderSettingsOpen, setIsHeaderSettingsOpen] = useState(false);
  const [name, setName] = useState(persistedState?.name ?? '');
  const [demoData, setDemoData] = useState(() => mergeDemoData(persistedState?.demoData));
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const nextState = {
      showDemo,
      isEditorOpen,
      name,
      demoData
    };

    window.localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(nextState));
  }, [showDemo, isEditorOpen, name, demoData]);

  const handleUpdateData = (section, field, value) => {
    setDemoData(prev => {
      const newData = { ...prev };
      if (field) {
        newData[section] = { ...newData[section], [field]: value };
      } else {
        newData[section] = value;
      }
      return newData;
    });
  };

  const handleStartDemo = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const parts = name.trim().split(' ');
      const firstName = parts[0];
      const lastName = parts.slice(1).join(' ') || '';
      setDemoData(prev => ({
        ...prev,
        hero: { ...prev.hero, firstName, lastName }
      }));
    }
    setShowDemo(true);
  };

  const handleProfileImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = await fileToDataUrl(file);
    setDemoData(prev => ({
      ...prev,
      hero: { ...prev.hero, image: imageUrl }
    }));
  };

  const handleHeaderLogoChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = await fileToDataUrl(file);
    setDemoData(prev => ({
      ...prev,
      header: { ...prev.header, logoImage: imageUrl }
    }));
  };

  if (showDemo) {
    const fullName = `${demoData.hero.firstName} ${demoData.hero.lastName}`.trim();

    return (
      <div className="demo-portfolio">

        {isHeaderSettingsOpen && (
          <div className="dp-header-settings-overlay" role="dialog" aria-modal="true" aria-labelledby="header-settings-title">
            <div className="dp-header-settings-modal">
              <div className="dp-header-settings-title-row">
                <h3 id="header-settings-title">Header Settings</h3>
              </div>

              <div className="dp-header-settings-field">
                <label htmlFor="header-logo-name">Logo Name</label>
                <input
                  id="header-logo-name"
                  type="text"
                  className="dp-editor-input"
                  value={demoData.header?.logoName || ''}
                  onChange={(e) => handleUpdateData('header', 'logoName', e.target.value)}
                  placeholder="Portfolio"
                />
              </div>

              <div className="dp-header-settings-field">
                <label>Logo Image</label>
                <label htmlFor="header-logo-image" className="dp-header-upload-btn">
                  Upload Logo
                </label>
                <input id="header-logo-image" type="file" accept="image/*" onChange={handleHeaderLogoChange} className="dp-header-upload-input" />
              </div>

              <div className="dp-header-settings-actions">
                <button type="button" className="dp-header-settings-close" onClick={() => setIsHeaderSettingsOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* NAVBAR */}
        <nav className="dp-nav" style={{ padding: '18px 80px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="dp-logo-row">
            {demoData.header?.logoImage ? (
              <img src={demoData.header.logoImage} alt="Logo preview" className="dp-logo-image" onClick={() => navigate('/')} />
            ) : (
              <div className="dp-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>
                {demoData.header?.logoName || 'Portfolio'}
              </div>
            )}
            {isEditorOpen && (
              <button
                type="button"
                className="dp-header-edit-btn"
                onClick={() => setIsHeaderSettingsOpen(true)}
                title="Edit Header Settings"
                aria-label="Edit Header Settings"
              >
                <EditIcon />
              </button>
            )}
          </div>

           <div className="dp-nav-right">
             <div className="dp-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Skills</a>
               <a href="#">Projects</a>
               <a href="#">Contact</a>
             </div>

             <div className="dp-nav-actions">
               {isEditorOpen ? (
                 <button
                   onClick={() => setIsEditorOpen(false)}
                   title="Save changes"
                   aria-label="Save changes"
                   className="dp-nav-save-btn"
                 >
                   <SaveIcon />
                   <span>Save</span>
                 </button>
               ) : (
                 <button
                   onClick={() => setIsEditorOpen(true)}
                   title="Edit Portfolio"
                   aria-label="Edit Portfolio"
                   className="dp-nav-icon-btn"
                 >
                   <GearIcon />
                 </button>
               )}
               <button className="btn-go-premium" onClick={() => navigate('/')}>Go Premium</button>
             </div>
           </div>
        </nav>

        {/* EDIT MODE BANNER */}
        {isEditorOpen && (
          <div className="dp-edit-banner">
            ✏️ <span>Edit Mode — Click any field to update your content. Click <strong>SAVE</strong> when done.</span>
          </div>
        )}

        {/* HERO */}
        <div className="dp-hero" style={{ padding: '80px 80px', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="dp-hero-left">
            {isEditorOpen ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <input type="text" className="dp-editor-input" value={demoData.hero.firstName} onChange={(e) => handleUpdateData('hero', 'firstName', e.target.value)} placeholder="First Name" />
                <input type="text" className="dp-editor-input" value={demoData.hero.lastName} onChange={(e) => handleUpdateData('hero', 'lastName', e.target.value)} placeholder="Last Name" />
                <input type="text" className="dp-editor-input" value={demoData.hero.role} onChange={(e) => handleUpdateData('hero', 'role', e.target.value)} placeholder="Your Role" />
                <textarea className="dp-editor-input" value={demoData.hero.desc} onChange={(e) => handleUpdateData('hero', 'desc', e.target.value)} rows="3" placeholder="Your description..."></textarea>
                <input type="text" className="dp-editor-input" value={demoData.hero.github || ''} onChange={(e) => handleUpdateData('hero', 'github', e.target.value)} placeholder="https://github.com/yourusername" />
                <input type="text" className="dp-editor-input" value={demoData.hero.linkedin || ''} onChange={(e) => handleUpdateData('hero', 'linkedin', e.target.value)} placeholder="https://linkedin.com/in/yourusername" />
                <label style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>Upload Profile Image</label>
                <input type="file" className="dp-editor-input" accept="image/*" onChange={handleProfileImageChange} />
                <label style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>Upload CV</label>
                <input type="file" className="dp-editor-input" />
              </div>
            ) : (
              <>
                <h1 className="dp-title">Hi, I'm <span className="dp-underline">{demoData.hero.firstName}</span><br/>{demoData.hero.lastName}</h1>
                <h2 className="dp-subtitle">{demoData.hero.role}</h2>
                <p className="dp-desc">{demoData.hero.desc}</p>
              </>
            )}
            <div className="dp-actions">
              <button className="dp-btn-primary">DOWNLOAD CV</button>
              <a href={demoData.hero.github || '#'} target="_blank" rel="noopener noreferrer" className="dp-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.53-4.47-10-10-10z"/></svg>
              </a>
              <a href={demoData.hero.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="dp-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/></svg>
              </a>
            </div>
          </div>
          <div className="dp-hero-right">
            <div className="dp-image-placeholder">
              {demoData.hero.image ? (
                <img src={demoData.hero.image} alt="Profile preview" className="dp-hero-image" />
              ) : null}
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <DemoAbout data={demoData.about} isEditorOpen={isEditorOpen} onUpdate={handleUpdateData} />
        <DemoSkills data={demoData.skills} isEditorOpen={isEditorOpen} onUpdate={handleUpdateData} />
        <DemoProjects data={demoData.projects} isEditorOpen={isEditorOpen} onUpdate={handleUpdateData} />
        <DemoContact data={demoData.contact} isEditorOpen={isEditorOpen} onUpdate={handleUpdateData} />

        {/* FOOTER */}
        <footer className="dp-footer">
          <div className="dp-footer-inner">
            <div className="dp-footer-top">
              <div className="dp-footer-left">
                {isEditorOpen ? (
                  <div className="dp-footer-edit-group">
                    <label className="dp-footer-edit-label" htmlFor="footer-name">Footer Name</label>
                    <input
                      id="footer-name"
                      type="text"
                      className="dp-editor-input dp-footer-edit-input"
                      value={demoData.footer?.name || ''}
                      onChange={(e) => handleUpdateData('footer', 'name', e.target.value)}
                    />

                    <label className="dp-footer-edit-label" htmlFor="footer-tagline">Footer Tagline</label>
                    <textarea
                      id="footer-tagline"
                      className="dp-editor-input dp-footer-edit-input"
                      rows="2"
                      value={demoData.footer?.tagline || ''}
                      onChange={(e) => handleUpdateData('footer', 'tagline', e.target.value)}
                    />
                  </div>
                ) : (
                  <>
                    <div className="dp-footer-name">{demoData.footer?.name || demoData.hero.firstName.toLowerCase()}</div>
                    <div className="dp-footer-tagline">{demoData.footer?.tagline || 'Building digital experiences with precision and passion.'}</div>
                  </>
                )}
              </div>
              <div className="dp-footer-icons">
                <a href={demoData.hero.github || '#'} target="_blank" rel="noopener noreferrer" className="dp-footer-icon" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.53-4.47-10-10-10z"/>
                  </svg>
                </a>
                <a href={demoData.hero.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="dp-footer-icon" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/>
                  </svg>
                </a>
                <a href={`mailto:${demoData.contact?.email || ''}`} className="dp-footer-icon" title="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="dp-footer-divider"></div>
            <div className="dp-footer-bottom">
              {isEditorOpen ? (
                <>
                  <div className="dp-footer-bottom-edit">
                    <label className="dp-footer-edit-label" htmlFor="footer-copyright">Copyright Text</label>
                    <input
                      id="footer-copyright"
                      type="text"
                      className="dp-editor-input dp-footer-edit-input"
                      value={demoData.footer?.copyright || ''}
                      onChange={(e) => handleUpdateData('footer', 'copyright', e.target.value)}
                    />
                  </div>
                  <div className="dp-footer-bottom-edit">
                    <label className="dp-footer-edit-label" htmlFor="footer-location">Footer Location</label>
                    <input
                      id="footer-location"
                      type="text"
                      className="dp-editor-input dp-footer-edit-input"
                      value={demoData.footer?.location || ''}
                      onChange={(e) => handleUpdateData('footer', 'location', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="dp-footer-copy">{demoData.footer?.copyright || `© 2026 ${fullName}. All rights reserved.`}</div>
                  <div className="dp-footer-location">{demoData.footer?.location || 'Lucknow, Uttar Pradesh, India'}</div>
                </>
              )}
            </div>
          </div>
        </footer>

      </div>
    );
  }

  return (
    <section className="register-container">
      <div className="auth-card">
        <h2 className="auth-title">Start Instant Demo</h2>
        <p className="auth-subtitle">Preview your interactive portfolio dashboard immediately.</p>

        <form className="auth-form" onSubmit={handleStartDemo}>
          <input
            type="text"
            placeholder="Enter your name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className="btn-auth-primary" style={{marginTop: '24px'}}>Start Demo</button>
        </form>
      </div>
    </section>
  );
}
