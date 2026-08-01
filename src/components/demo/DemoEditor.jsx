import React, { useState } from 'react';

export default function DemoEditor({ isOpen, onClose, data, onUpdate }) {
  const [activeTab, setActiveTab] = useState('hero');

  if (!isOpen) return null;

  return (
    <div className="dp-editor-overlay">
      <div className="dp-editor-modal">
        <div className="dp-editor-header">
          <h3>Edit Portfolio Settings</h3>
          <button onClick={onClose} className="dp-editor-close">&times;</button>
        </div>
        
        <div className="dp-editor-tabs">
          <button className={activeTab === 'hero' ? 'active' : ''} onClick={() => setActiveTab('hero')}>Hero</button>
          <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>About</button>
          <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Skills</button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
        </div>

        <div className="dp-editor-body">
          {activeTab === 'hero' && (
            <div className="dp-editor-section">
              <label>First Name</label>
              <input type="text" value={data.hero.firstName} onChange={(e) => onUpdate('hero', 'firstName', e.target.value)} className="dp-editor-input" />
              
              <label>Last Name</label>
              <input type="text" value={data.hero.lastName} onChange={(e) => onUpdate('hero', 'lastName', e.target.value)} className="dp-editor-input" />
              
              <label>Role</label>
              <input type="text" value={data.hero.role} onChange={(e) => onUpdate('hero', 'role', e.target.value)} className="dp-editor-input" />
              
              <label>Description</label>
              <textarea value={data.hero.desc} onChange={(e) => onUpdate('hero', 'desc', e.target.value)} className="dp-editor-input" rows="3"></textarea>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="dp-editor-section">
              {data.about.map((item, index) => (
                <div key={index} className="dp-editor-item-box">
                  <h4>Card {index + 1}</h4>
                  <label>Title</label>
                  <input type="text" value={item.title} onChange={(e) => {
                    const newAbout = [...data.about];
                    newAbout[index].title = e.target.value;
                    onUpdate('about', null, newAbout);
                  }} className="dp-editor-input" />
                  <label>Description</label>
                  <textarea value={item.desc} onChange={(e) => {
                    const newAbout = [...data.about];
                    newAbout[index].desc = e.target.value;
                    onUpdate('about', null, newAbout);
                  }} className="dp-editor-input" rows="2"></textarea>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="dp-editor-section">
              <h4>Proficiencies</h4>
              {data.skills.proficiency.map((skill, index) => (
                <div key={index} className="dp-editor-row">
                  <input type="text" value={skill.name} onChange={(e) => {
                    const newSkills = { ...data.skills };
                    newSkills.proficiency[index].name = e.target.value;
                    onUpdate('skills', null, newSkills);
                  }} className="dp-editor-input" style={{flex: 2}} />
                  <input type="number" value={skill.percent} onChange={(e) => {
                    const newSkills = { ...data.skills };
                    newSkills.proficiency[index].percent = e.target.value;
                    onUpdate('skills', null, newSkills);
                  }} className="dp-editor-input" style={{flex: 1}} />
                </div>
              ))}
              <h4 style={{marginTop: '20px'}}>Technologies</h4>
              <textarea value={data.skills.technologies.join(', ')} onChange={(e) => {
                const newSkills = { ...data.skills };
                newSkills.technologies = e.target.value.split(',').map(s => s.trim());
                onUpdate('skills', null, newSkills);
              }} className="dp-editor-input" rows="3"></textarea>
              <small>Comma separated</small>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="dp-editor-section">
              {data.projects.map((project, index) => (
                <div key={index} className="dp-editor-item-box">
                  <h4>Project {index + 1}</h4>
                  <label>Title</label>
                  <input type="text" value={project.title} onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[index].title = e.target.value;
                    onUpdate('projects', null, newProjects);
                  }} className="dp-editor-input" />
                  <label>Description</label>
                  <textarea value={project.desc} onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[index].desc = e.target.value;
                    onUpdate('projects', null, newProjects);
                  }} className="dp-editor-input" rows="2"></textarea>
                  <label>Tag</label>
                  <input type="text" value={project.tag} onChange={(e) => {
                    const newProjects = [...data.projects];
                    newProjects[index].tag = e.target.value;
                    onUpdate('projects', null, newProjects);
                  }} className="dp-editor-input" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="dp-editor-footer">
          <button onClick={onClose} className="dp-btn-primary" style={{width: '100%'}}>Save & Apply</button>
        </div>
      </div>
    </div>
  );
}
