import React from 'react';

export default function DemoSkills({ data, isEditorOpen, onUpdate }) {
  const handleDeleteProficiency = (index) => {
    const newData = { ...data };
    newData.proficiency.splice(index, 1);
    onUpdate('skills', null, newData);
  };

  const handleAddProficiency = () => {
    const newData = { ...data };
    newData.proficiency.push({ name: "New Skill", percent: 50 });
    onUpdate('skills', null, newData);
  };

  const handleDeleteTech = (index) => {
    const newData = { ...data };
    newData.technologies.splice(index, 1);
    onUpdate('skills', null, newData);
  };

  const handleAddTech = () => {
    const newData = { ...data };
    newData.technologies.push("New Tech");
    onUpdate('skills', null, newData);
  };

  return (
    <div className="dp-section dp-skills">
      <div className="dp-section-header">
        <h2 className="dp-section-title">Skills & Technologies</h2>
        <div className="dp-section-underline"></div>
      </div>
      <div className="dp-skills-grid">
        <div className="dp-skills-card dp-skills-card-proficiency">
          <h3 className="dp-skills-card-title">Technical Proficiency</h3>
          <div className="dp-skills-list">
            {data.proficiency.map((skill, index) => (
              <div key={index} className="dp-skill-item" style={isEditorOpen ? { display: 'flex', flexDirection: 'column', gap: '5px' } : {}}>
                {isEditorOpen ? (
                  <>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input type="text" className="dp-editor-input" value={skill.name} onChange={(e) => {
                        const newData = { ...data };
                        newData.proficiency[index].name = e.target.value;
                        onUpdate('skills', null, newData);
                      }} style={{ flex: 3 }} />
                      <input type="number" className="dp-editor-input" value={skill.percent} onChange={(e) => {
                        const newData = { ...data };
                        newData.proficiency[index].percent = e.target.value;
                        onUpdate('skills', null, newData);
                      }} style={{ flex: 1 }} />
                    </div>
                    <div className="dp-skill-bar-bg" style={{ marginTop: '5px' }}>
                      <div className="dp-skill-bar-fill" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                    <div style={{ cursor: 'pointer', color: '#a0a0a0', fontSize: '12px', marginTop: '5px' }} onClick={() => handleDeleteProficiency(index)}>
                      🗑️
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dp-skill-info">
                      <span className="dp-skill-name">{skill.name}</span>
                      <span className="dp-skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="dp-skill-bar-bg">
                      <div className="dp-skill-bar-fill" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          {isEditorOpen && (
            <div style={{ marginTop: '20px' }}>
              <button className="dp-editor-input" onClick={handleAddProficiency} style={{ cursor: 'pointer', width: 'auto', padding: '5px 15px', color: '#fff' }}>+ Add Skill</button>
            </div>
          )}
        </div>
        <div className="dp-skills-card">
          <h3 className="dp-skills-card-title">Technologies I Work With</h3>
          <div className="dp-tech-badges" style={isEditorOpen ? { display: 'flex', flexWrap: 'wrap', gap: '10px' } : {}}>
            {data.technologies.map((tech, index) => (
              <React.Fragment key={index}>
                {isEditorOpen ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: '1 1 calc(50% - 10px)' }}>
                    <input type="text" className="dp-editor-input" value={tech} onChange={(e) => {
                      const newData = { ...data };
                      newData.technologies[index] = e.target.value;
                      onUpdate('skills', null, newData);
                    }} />
                    <div style={{ cursor: 'pointer', color: '#a0a0a0', fontSize: '12px' }} onClick={() => handleDeleteTech(index)}>
                      🗑️
                    </div>
                  </div>
                ) : (
                  <span className="dp-tech-badge">{tech}</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {isEditorOpen && (
            <div style={{ marginTop: '20px' }}>
              <button className="dp-editor-input" onClick={handleAddTech} style={{ cursor: 'pointer', width: 'auto', padding: '5px 15px', color: '#fff' }}>+ Add Tech</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
