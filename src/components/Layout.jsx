import React from 'react';
import { BookOpen, FileText, Calendar, Layout as LayoutIcon, Code } from 'lucide-react';

const Layout = ({ currentStep, onStepChange, children }) => {
    const steps = [
        { id: 'research', label: 'Research', icon: <BookOpen size={20} /> },
        { id: 'idea', label: 'Product Idea', icon: <FileText size={20} /> },
        { id: 'plan', label: 'Implementation Plan', icon: <Calendar size={20} /> },
        { id: 'blueprint', label: 'Blueprint & Design', icon: <LayoutIcon size={20} /> },
        { id: 'code', label: 'Ready to Code', icon: <Code size={20} /> },
    ];

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div style={{ marginBottom: '2rem', paddingLeft: '1rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>AI Producer</h2>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Professional Product Designer</p>
                </div>

                <nav>
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

                <div style={{ marginTop: 'auto', padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Project: Gemini AI</p>
                </div>
            </aside>

            <main className="main-content fade-in">
                {children}
            </main>
        </div>
    );
};

export default Layout;
