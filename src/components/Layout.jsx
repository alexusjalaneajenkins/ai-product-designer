import React from 'react';
import { BookOpen, FileText, Layers, Layout as LayoutIcon, Code, Lightbulb, Sparkles } from 'lucide-react';

const Layout = ({ currentStep, onStepChange, children }) => {
    const steps = [
        { id: 'idea', label: 'Idea', icon: <Lightbulb size={18} /> },
        { id: 'research', label: 'Research', icon: <BookOpen size={18} /> },
        { id: 'prd', label: 'PRD', icon: <FileText size={18} /> },
        { id: 'plan', label: 'Planning', icon: <Layers size={18} /> },
        { id: 'blueprint', label: 'Design', icon: <LayoutIcon size={18} /> },
        { id: 'code', label: 'Code', icon: <Code size={18} /> },
    ];

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div style={{ marginBottom: '3rem', paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '700', margin: 0, color: '#111827' }}>FORGE</h2>
                        <p style={{ fontSize: '0.75rem', margin: 0, opacity: 0.6, fontWeight: '500' }}>AI Product Architect</p>
                    </div>
                </div>

                <nav>
                    <div className="nav-section-label">WORKFLOW</div>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`nav-item ${currentStep === step.id ? 'active' : ''}`}
                            onClick={() => onStepChange(step.id)}
                        >
                            {step.icon}
                            <span>{step.label}</span>
                        </div>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', padding: '1rem' }}>
                    {/* Bottom area for profile or settings if needed */}
                </div>
            </aside>

            <main className="main-content fade-in">
                {children}
            </main>
        </div>
    );
};

export default Layout;
