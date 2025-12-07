import React, { useState } from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const Research = ({ data, setData }) => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file) => {
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
            setData(e.target.result);
        };
        reader.readAsText(file);
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="text-gradient">Research</h1>
                <p>Import your notes and insights from NotebookLM to ground your product in reality.</p>
            </header>

            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                <input
                    type="file"
                    id="file-upload"
                    multiple={false}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />

                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    style={{
                        border: '2px dashed var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '4rem 2rem',
                        backgroundColor: dragActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                        borderColor: dragActive ? 'var(--accent-primary)' : 'var(--border-color)',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                    }}
                    onClick={() => document.getElementById('file-upload').click()}
                >
                    {data ? (
                        <div className="fade-in">
                            <CheckCircle size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                            <h3>Analysis Complete</h3>
                            <p style={{ marginTop: '0.5rem' }}>Loaded: {fileName || 'Research File'}</p>
                        </div>
                    ) : (
                        <div>
                            <Upload size={48} color="var(--text-secondary)" style={{ marginBottom: '1rem' }} />
                            <h3>Drop your NotebookLM export here</h3>
                            <p style={{ marginTop: '0.5rem' }}>Supports .txt and .md files</p>
                        </div>
                    )}
                </div>
            </div>

            {data && (
                <div className="glass-panel fade-in" style={{ padding: '2rem', marginTop: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <FileText size={20} color="var(--accent-primary)" />
                        <h3>Extracted Context</h3>
                    </div>
                    <div style={{
                        maxHeight: '300px',
                        overflowY: 'auto',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.9rem',
                        whiteSpace: 'pre-wrap',
                        color: 'var(--text-secondary)'
                    }}>
                        {data}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;
