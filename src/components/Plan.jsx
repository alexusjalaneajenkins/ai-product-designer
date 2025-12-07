import React from 'react';
import { Sparkles } from 'lucide-react';

const Plan = ({ data, setData }) => {
    const generateTemplate = () => {
        const template = `## Phase 1: Core Foundation
- [ ] Initialize project with React + Vite
- [ ] Setup TailwindCSS/Global Styles
- [ ] Create basic routing structure

## Phase 2: MVP Features
- [ ] Implement user authentication
- [ ] Build core dashboard
- [ ] Develop primary data models

## Phase 3: Polish & Launch
- [ ] Responsive design check
- [ ] Performance optimization
- [ ] Deployment to Vercel/Netlify`;
        setData(template);
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="text-gradient">Implementation Plan</h1>
                    <p>Structure your development process.</p>
                </div>
                <button className="btn btn-primary" onClick={generateTemplate}>
                    <Sparkles size={18} />
                    Auto-Generate Plan
                </button>
            </header>

            <div className="glass-panel" style={{ padding: '0' }}>
                <textarea
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Step 1: Setup..."
                    style={{
                        minHeight: '500px',
                        background: 'transparent',
                        border: 'none',
                        resize: 'none',
                        fontFamily: 'monospace',
                        fontSize: '0.95rem',
                        padding: '2rem'
                    }}
                />
            </div>
        </div>
    );
};

export default Plan;
