import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, AlertCircle, Loader } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const CodePrompt = ({ data }) => {
    const [copied, setCopied] = useState(false);
    const apiKey = 'AIzaSyAWujWc2jxvJOdbPkq5Tz1mMPoX5ULJrcw';
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedCode, setGeneratedCode] = useState('');
    const [error, setError] = useState('');

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

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleGenerate = async () => {
        if (!apiKey) {
            setError('API Key is missing. Please check your .env configuration.');
            return;
        }

        setIsGenerating(true);
        setError('');
        setGeneratedCode('');

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await model.generateContent(generatedPrompt);
            const response = await result.response;
            const text = response.text();

            setGeneratedCode(text);
        } catch (err) {
            console.error("Gemini API Error:", err);
            setError(err.message || "Failed to generate code. Please check your API key.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <header style={{ marginBottom: '3rem' }}>
                <h1 className="text-gradient">Ready to Code</h1>
                <p>Generate your project code directly using Gemini AI.</p>
            </header>

            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <button
                        className="btn btn-primary"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        style={{ minWidth: '200px', padding: '1rem 2rem', fontSize: '1.1rem' }}
                    >
                        {isGenerating ? (
                            <>
                                <Loader className="spin" size={20} />
                                Generating Code...
                            </>
                        ) : (
                            <>
                                <Sparkles size={20} />
                                Generate Project Code
                            </>
                        )}
                    </button>

                    {error && (
                        <div style={{
                            color: '#ff6b6b',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginTop: '0.5rem'
                        }}>
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {generatedCode && (
                <div className="glass-panel" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10
                    }}>
                        <button className="btn btn-primary" onClick={() => handleCopy(generatedCode)}>
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                    </div>
                    <div style={{
                        backgroundColor: '#1e1e2e',
                        padding: '2rem',
                        maxHeight: '800px',
                        overflowY: 'auto',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        color: '#a6accd',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {generatedCode}
                    </div>
                </div>
            )}

            {!generatedCode && !isGenerating && (
                <div className="glass-panel" style={{ padding: '0', position: 'relative', opacity: 0.7 }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.02)' }}>
                        <h3 style={{ fontSize: '1rem', margin: 0 }}>Generated Prompt Preview</h3>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '3.5rem',
                        right: '1rem',
                        zIndex: 10
                    }}>
                        <button className="btn btn-secondary" onClick={() => handleCopy(generatedPrompt)} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            {copied ? 'Copied' : 'Copy Prompt'}
                        </button>
                    </div>
                    <div style={{
                        padding: '2rem',
                        maxHeight: '300px',
                        overflowY: 'auto',
                        fontFamily: 'monospace',
                        fontSize: '0.8rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {generatedPrompt}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodePrompt;
