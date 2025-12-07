import React from 'react';
import { Sparkles, Lightbulb } from 'lucide-react';

const Idea = ({ data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>The Spark</h1>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Everything starts with an idea. Describe what you want to build in as much detail as you have.
            </p>

            <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
                {/* Header */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '600', color: '#6b7280', letterSpacing: '0.05em' }}>
                        <Lightbulb size={16} />
                        PRODUCT VISION INPUT
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Markdown supported</span>
                </div>

                {/* Input Area */}
                <div style={{ padding: '1.5rem' }}>
                    <textarea
                        name="problem" // Mapping to 'problem' for now as the main description
                        value={data.problem || ''}
                        onChange={handleChange}
                        placeholder="Describe your idea...&#10;&#10;E.g., I want to build a fitness app for seniors that focuses on mobility and social connection. It should have large text, voice commands, and connect with Apple Watch..."
                        style={{
                            width: '100%',
                            minHeight: '300px',
                            resize: 'vertical',
                            border: 'none',
                            outline: 'none',
                            padding: '0',
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            color: '#374151'
                        }}
                    />
                </div>

                {/* Footer / Actions */}
                <div style={{
                    padding: '1rem 1.5rem',
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                    backgroundColor: '#fafafa'
                }}>
                    <button className="btn btn-secondary" style={{ border: 'none', color: '#6b7280' }}>
                        Cancel
                    </button>
                    <button className="btn btn-primary">
                        Refine & Synthesize
                        <Sparkles size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Idea;
