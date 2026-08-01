import React from 'react';
import { Rocket } from 'lucide-react';

export default function DemoProjects({ data, isEditorOpen, onUpdate }) {
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    onUpdate('projects', null, newData);
  };

  const handleAdd = () => {
    const newData = [...data, { title: "New Project", desc: "Project description", tag: "TAG", link: "#" }];
    onUpdate('projects', null, newData);
  };

  return (
    <div className="dp-section dp-projects">
      <div className="dp-section-header">
        <h2 className="dp-section-title-small">Recent Projects</h2>
      </div>
      <div className="dp-projects-grid">
        {data.map((project, index) => (
          <div key={index} className="dp-project-card">
            {isEditorOpen ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" className="dp-editor-input" value={project.title} onChange={(e) => {
                  const newData = [...data];
                  newData[index].title = e.target.value;
                  onUpdate('projects', null, newData);
                }} placeholder="Project Title" />
                <textarea className="dp-editor-input" value={project.desc} onChange={(e) => {
                  const newData = [...data];
                  newData[index].desc = e.target.value;
                  onUpdate('projects', null, newData);
                }} rows="2" placeholder="Project Description"></textarea>
                <input type="text" className="dp-editor-input" value={project.tag} onChange={(e) => {
                  const newData = [...data];
                  newData[index].tag = e.target.value;
                  onUpdate('projects', null, newData);
                }} placeholder="Tag" />
                <input type="text" className="dp-editor-input" value={project.link} onChange={(e) => {
                  const newData = [...data];
                  newData[index].link = e.target.value;
                  onUpdate('projects', null, newData);
                }} placeholder="Link URL" />
                <div style={{ textAlign: 'center', cursor: 'pointer', color: '#a0a0a0', fontSize: '12px' }} onClick={() => handleDelete(index)}>
                  🗑️ Delete
                </div>
              </div>
            ) : (
              <>
                <h3 className="dp-project-title"><span className="dp-project-title-icon"><Rocket size={18} color="#ffffff" strokeWidth={2.25} /></span>{project.title}</h3>
                <p className="dp-project-desc">{project.desc}</p>
                {project.tag && (
                  <div className="dp-project-tag">{project.tag}</div>
                )}
                <div className="dp-project-actions">
                  <a href="#" className="dp-btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.53-4.47-10-10-10z" fill="currentColor"/></svg>
                    CODE
                  </a>
                  <a href={project.link} className="dp-btn-solid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    LIVE DEMO
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {isEditorOpen && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <button className="dp-editor-input" onClick={handleAdd} style={{ cursor: 'pointer', width: 'auto', padding: '5px 15px', color: '#fff' }}>+ Add Project</button>
        </div>
      )}
      <div className="dp-projects-more">
        <p>WANT TO SEE MORE OF MY WORK?</p>
        <a href="#" className="dp-btn-solid dp-btn-large">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.53-4.47-10-10-10z" />
          </svg>
          VISIT MY GITHUB
        </a>
      </div>
    </div>
  );
}
