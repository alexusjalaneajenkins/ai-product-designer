import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const CodePrompt = ({ data }) => {
    const [copied, setCopied] = useState(false);

    const generatedPrompt = `
You are an expert Senior Full Stack Engineer and Product Designer.

# Project Context
${data.researchData ? `## Background Research\n${data.researchData}\n` : ''}

# Product Definition
**Product Name**: ${data.productIdea.name || 'Untitled'}
**Target Audience**: ${data.productIdea.audience || 'N/A'}

## Problem
${data.productIdea.problem || 'N/A'}

## Solution
${data.productIdea.solution || 'N/A'}

## Key Features
${data.productIdea.features || 'N/A'}

# Implementation Plan
${data.plan || 'N/A'}

# Design Blueprint
${data.blueprint || 'N/A'}

# YOUR TASK
Using the context above, act as the lead engineer and write the initial code for this project.
1. Suggest a modern tech stack (if not specified).
2. Create the file structure.
3. Write the code for the core components and pages described in the Blueprint.
4. Ensure the design matches the "Premium Standard" described in the blueprint.
`.trim();

    const prompt = generatedPrompt;

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="text-gradient">Ready to Code</h1>
                <p>Your comprehensive AI Prompt is ready. Paste this into Gemini, ChatGPT, or Claude.</p>
            </header>

            <div className="glass-panel" style={{ padding: '0', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 10
                }}>
                    <button className="btn btn-primary" onClick={handleCopy}>
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copied!' : 'Copy Prompt'}
                    </button>
                </div>

                <div style={{
                    backgroundColor: '#1e1e2e',
                    padding: '2rem',
                    borderTopLeftRadius: 'var(--radius-md)',
                    borderTopRightRadius: 'var(--radius-md)',
                    maxHeight: '600px',
                    overflowY: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: '#a6accd',
                    whiteSpace: 'pre-wrap'
                }}>
                    {prompt}
                </div>

                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Terminal size={20} color="var(--accent-primary)" />
                    <p style={{ fontSize: '0.9rem' }}>Use this prompt to kickstart your development process.</p>
                </div>
            </div>
        </div>
    );
};

export default CodePrompt;
