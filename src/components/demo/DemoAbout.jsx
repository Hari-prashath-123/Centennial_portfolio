import React from 'react';

// White SVG icons for each icon type
const ICONS = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  learn: (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 3 1 8l11 5 9-4.09V16h2V8L12 3zm-6 9.27V17l6 3 6-3v-4.73L12 15l-6-2.73z"></path>
    </svg>
  ),
  gear: (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.63l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96c-.51-.39-1.05-.71-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.12.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.85a.5.5 0 0 0 .12.63l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 14.52a.5.5 0 0 0-.12.63l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.51.39 1.05.71 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.58-.23 1.12-.55 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.63l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"></path>
    </svg>
  ),
  brush: (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M20.7 3.3a2.2 2.2 0 0 0-3.11 0l-7.77 7.77A3.5 3.5 0 0 0 8 13.54V15H6.54a3.5 3.5 0 0 0-2.47 1.02l-1.41 1.41A1 1 0 0 0 3.36 19h2.88a5 5 0 0 0 3.54-1.46l7.77-7.77a2.2 2.2 0 0 0 0-3.11l-.85-.86 1.2-1.2.95.95a.5.5 0 0 0 .7 0l.21-.21a.5.5 0 0 0 0-.7l-1.16-1.16ZM8 17.54A1.5 1.5 0 0 1 6.54 19H5.41l.28-.28A1.5 1.5 0 0 1 6.74 18H8v-.46Z"></path>
    </svg>
  ),
};

export default function DemoAbout({ data, isEditorOpen, onUpdate }) {
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    onUpdate('about', null, newData);
  };

  const handleAdd = () => {
    const newData = [...data, { iconType: "code", title: "New Skill", desc: "Description here" }];
    onUpdate('about', null, newData);
  };

  const handleIconChange = (index, iconType) => {
    const newData = [...data];
    newData[index] = { ...newData[index], iconType };
    onUpdate('about', null, newData);
  };

  return (
    <div className="dp-section dp-about">
      <div className="dp-section-header">
        <h2 className="dp-section-title">About Me</h2>
        <div className="dp-section-underline"></div>
      </div>
      <div className="dp-about-grid">
        {data.map((item, index) => (
          <div key={index} className="dp-about-card" style={isEditorOpen ? { display: 'flex', flexDirection: 'column' } : {}}>
            {isEditorOpen ? (
              <>
                <div className="dp-icon-box" style={{ margin: '0 auto 14px' }}>
                  {ICONS[item.iconType] || ICONS.code}
                </div>
                <select
                  className="dp-editor-input"
                  value={item.iconType || 'code'}
                  onChange={(e) => handleIconChange(index, e.target.value)}
                  style={{ marginBottom: '10px' }}
                >
                  <option value="code">Code</option>
                  <option value="learn">Learning</option>
                  <option value="gear">Gear</option>
                  <option value="brush">Brush</option>
                </select>
                <input type="text" className="dp-editor-input" value={item.title} onChange={(e) => {
                  const newData = [...data];
                  newData[index] = { ...newData[index], title: e.target.value };
                  onUpdate('about', null, newData);
                }} style={{ marginBottom: '10px' }} placeholder="Card Title" />
                <textarea className="dp-editor-input" value={item.desc} onChange={(e) => {
                  const newData = [...data];
                  newData[index] = { ...newData[index], desc: e.target.value };
                  onUpdate('about', null, newData);
                }} rows="3" style={{ resize: 'none', flex: 1, marginBottom: '10px' }} placeholder="Card description"></textarea>
                <div
                  style={{ textAlign: 'center', cursor: 'pointer', color: '#666', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                  onClick={() => handleDelete(index)}>
                  🗑️ Delete
                </div>
              </>
            ) : (
              <>
                <div className="dp-icon-box">
                  {ICONS[item.iconType] || ICONS.code}
                </div>
                <h3 className="dp-about-title">{item.title}</h3>
                <p className="dp-about-desc">{item.desc}</p>
              </>
            )}
          </div>
        ))}
      </div>
      {isEditorOpen && (
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
          <button className="dp-editor-input" onClick={handleAdd} style={{ cursor: 'pointer', width: 'auto', padding: '8px 20px', color: '#fff' }}>+ Add Card</button>
        </div>
      )}
    </div>
  );
}
