import React from 'react';

const ProductDoc = ({ data, setData }) => {
    const handleChange = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="text-gradient">Product Definition</h1>
                <p>Define the core aspects of your product to guide the AI architect.</p>
            </header>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <label>Product Name</label>
                    <input
                        value={data.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="e.g. EcoTracker"
                        style={{ fontSize: '1.2rem', fontWeight: '600' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <label>The Problem</label>
                        <textarea
                            rows={5}
                            value={data.problem}
                            onChange={(e) => handleChange('problem', e.target.value)}
                            placeholder="What pain point are you solving?"
                        />
                    </div>
                    <div>
                        <label>The Solution</label>
                        <textarea
                            rows={5}
                            value={data.solution}
                            onChange={(e) => handleChange('solution', e.target.value)}
                            placeholder="How does your product solve it?"
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <label>Target Audience</label>
                    <input
                        value={data.audience}
                        onChange={(e) => handleChange('audience', e.target.value)}
                        placeholder="Who is this for?"
                    />
                </div>

                <div>
                    <label>Key Features (Bullet points)</label>
                    <textarea
                        rows={6}
                        value={data.features}
                        onChange={(e) => handleChange('features', e.target.value)}
                        placeholder="- Feature 1&#10;- Feature 2&#10;- Feature 3"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDoc;
