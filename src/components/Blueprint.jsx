import React from 'react';
import { Sparkles } from 'lucide-react';

const Blueprint = ({ data, setData }) => {
    const generateTemplate = () => {
        const template = `# UI Structure & Wireframe

## Global Layout
- Sidebar Navigation (Left): Dashboard, Settings, Profile
- Top Bar: Search, Notifications, User Menu

## Components
1. **Hero Section**
   - Large headline
   - 'Get Started' CTA button (Primary color)
   - 3D Illustration relative to product

2. **Dashboard Grid**
   - Stat Cards (Total Users, Revenue, etc.)
   - Recent Activity Feed
   - Data Visualization Chart

## Theme
- Dark Mode by default
- Primary Color: Indigo 500
- Font: Inter (Sans-serif)`;
        setData(template);
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 className="text-gradient">Design Blueprint</h1>
                    <p>Visualize the interface and structure.</p>
                </div>
                <button className="btn btn-primary" onClick={generateTemplate}>
                    <Sparkles size={18} />
                    Auto-Generate Blueprint
                </button>
            </header>

            <div className="glass-panel" style={{ padding: '0' }}>
                <textarea
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="# UI Structure..."
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

export default Blueprint;
